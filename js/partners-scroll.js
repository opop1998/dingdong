// 合作伙伴循环轮播
let viewBox = document.querySelector('.viewBox')
let str = ''
// 渲染
for (let i = 1; i <= 24; i++) {
  if (i % 3 == 1) {
    str += `<div class="picBox">`
  }
  str += `
  <img src="./imgs/pinpai/pinpai000${i < 10 ? "0" + i : i}.png">
  `
  if (i % 3 == 0) {
    str += `</div>`
  }
}
// 复制
viewBox.innerHTML = str + str
// 循环
let step = 0
let cut = viewBox.scrollWidth / 2
setInterval(() => {
  step++
  // 用transform更平滑
  viewBox.style.transform = `translateX(-${step}px)`
  if (step >= cut) step = 0
}, 20)
