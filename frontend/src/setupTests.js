// setup file
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'core-js/features/array/flat'
import 'core-js/features/array/map'
import 'core-js/features/array/reduce'
import 'core-js/features/array/find'
import 'core-js/features/object/entries'
import 'core-js/features/object/keys'
import 'core-js/features/object/values'
import 'core-js/features/object/to-string'

import 'react-app-polyfill/jsdom'

configure({ adapter: new Adapter() })
