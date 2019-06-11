package ar.edu.unq.pdes.chinwenwenchas.revInd

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Requests {
  def signIn() = {
    http("Sign in")
      .post("/api/sign_in")
      .header("Content-Type", "application/json")
      .body(StringBody(session => s"""{"user": "${session("userName").as[String]}"}"""))
      .check(status.is(200))
  }

  def getFactories() = {
    http("Get Factories")
      .get("/api/factories")
      .queryParam("user", session => session("userName").as[String])
      .check(status.is(200))
  }

  def createFactory() = {
    http("Create factory")
      .post("/api/new_factory")
      .header("Content-Type", "application/json")
      .body(StringBody(session => s"""{"user": "${session("userName").as[String]}", "size": "${session("size").as[Int]}", "name":"${session("name").as[String]}", "board":{"test": "board"}}"""))
      .check(status.is(200))
  }
}
