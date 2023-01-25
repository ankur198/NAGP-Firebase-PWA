import firebase from './initializeFirebase'
import { logEvent } from 'firebase/analytics'

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    logEvent(firebase.analytics, 'counter_clicked', {"count": count})
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
