import FastClick from './fastclick'

// 设置 HTML fontSize(响应式)
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'

// 初始化 FastClick
window.addEventListener('load', () => FastClick.attach(document.body), false)

// 禁止多指
document.documentElement.addEventListener('touchmove', e => e.touches.length > 1 || e.preventDefault(), false)
