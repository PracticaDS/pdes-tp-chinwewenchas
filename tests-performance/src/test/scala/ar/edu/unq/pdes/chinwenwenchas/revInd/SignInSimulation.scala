package ar.edu.unq.pdes.chinwenwenchas.revInd

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import java.util.UUID.randomUUID
import scala.concurrent.duration._

import Requests._

class SignInSimulation extends TodosBaseSimulation {
  val users = List.fill(10)(randomUUID().toString())
  val factories = List.fill(10)(randomUUID().toString())

  val scn = scenario("Sign in Load Testing")
    .exec(_.set("userName", randomUUID().toString))
    .exec(signIn())
      .repeat(10) {
        exec(_.set("name", randomUUID().toString))
        .exec(_.set("size", 10))
        .exec(createFactory())
      }
      .pause(2)
      .exec(signIn())
      .exec(getFactories())

  setUp(
    scn.inject(rampUsers(100).during(30.seconds)).protocols(httpProtocol),
  )
}
