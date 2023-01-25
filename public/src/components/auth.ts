import firebase from '../initializeFirebase';
import { GoogleAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import './auth.scss'

const uiConfig: firebaseui.auth.Config = {
  signInSuccessUrl: '/',
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID
  ]
}

const ui = new firebaseui.auth.AuthUI(firebase.auth)

const authComponent = document.createElement('div')
authComponent.classList.add('auth')
authComponent.innerHTML = `
    <div class="info">Hello <span></span></div>
    <div class="right">
      <button id='login'>Login</button>
      <button id='logout' class='hide'>Logout</button>
      <div id='firebaseui-auth-container'></div>
    </div>
  `
const loginBtn = authComponent.querySelector('#login')!
const logoutBtn = authComponent.querySelector('#logout')!

loginBtn.addEventListener('click', () => {
  ui.start('#firebaseui-auth-container', uiConfig)
})
logoutBtn.addEventListener('click', () => {
  firebase.auth.signOut()
})

firebase.auth.onAuthStateChanged(user => {
  const userNameElement = authComponent.querySelector('.info')!.querySelector('span')!
  userNameElement.innerHTML = user?.displayName ?? 'Anonymous'
  if(user){
    loginBtn.classList.add('hide')
    logoutBtn.classList.remove('hide')
  }
  else{
    loginBtn.classList.remove('hide')
    logoutBtn.classList.add('hide')
  }
})

export { authComponent }