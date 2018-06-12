import SignupSaga from './pages/Auth/signup/sagas'
import LoginSaga from './pages/Auth/login/sagas'
import AppSaga from './pages/App/saga'

export default function* RootSaga () {
  yield [
    SignupSaga(),
    LoginSaga(),
    AppSaga(),
  ]
}
