/* 滚动时下拉栏 */

let winHeight = window.innerHeight
let navStart = document.querySelector('.start')
let dv1 = document.querySelector('.dv1')

let certainty = document.querySelector('.certainty')
window.addEventListener('scroll', function () {
  scrollLength = window.pageYOffset
  // 元素到window窗口顶部小于80px
  if (certainty.offsetTop < 80 + scrollLength) {
    navStart.style.transform = `translateY(-70px)`
    navStart.classList.add('hide')
    dv1.style.top = '0px'
  } else {
    navStart.style.transform = `translateY(0px)`
    navStart.classList.remove('hide')
    dv1.style.top = '-70px'
  }
})
