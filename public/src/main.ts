import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import './initializeFirebase'
import { authComponent } from './components/auth'


const template = document.createElement('div')
template.innerHTML = `
  <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" class="logo" alt="Vite logo" />
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
  </a>
  <h1>Vite + TypeScript</h1>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
  <p class="read-the-docs">
    Click on the Vite and TypeScript logos to learn more
  </p>
  `
setupCounter(template.querySelector<HTMLButtonElement>('#counter')!)

const app = document.querySelector<HTMLDivElement>('#app')!
app.appendChild(authComponent)
app.appendChild(template)
