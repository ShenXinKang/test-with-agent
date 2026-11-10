import './style.css'

interface PageContent {
  eyebrow: string
  greeting: string
  subtitle: string
  cta: string
  footer: string
}

const content: PageContent = {
  eyebrow: 'TypeScript × Vite',
  greeting: 'Hello, World!',
  subtitle: '一个用 TypeScript 编写的简单前端页面，点击下面的按钮试试。',
  cta: '点我一下',
  footer: 'Built with TypeScript · Vite',
}

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) {
  throw new Error('页面挂载节点 #app 不存在')
}

app.innerHTML = `
  <main class="card">
    <p class="eyebrow">${content.eyebrow}</p>
    <h1>${content.greeting}</h1>
    <p class="subtitle">${content.subtitle}</p>
    <button id="greet-button" type="button">${content.cta}</button>
    <p id="greet-count" class="count" aria-live="polite">还没有点击按钮</p>
  </main>
  <footer class="footer">${content.footer}</footer>
`

const button = document.querySelector<HTMLButtonElement>('#greet-button')
const count = document.querySelector<HTMLParagraphElement>('#greet-count')
if (!button || !count) {
  throw new Error('页面交互元素初始化失败')
}

let clicks = 0

button.addEventListener('click', () => {
  clicks += 1
  count.textContent = `已点击 ${clicks} 次`
})
