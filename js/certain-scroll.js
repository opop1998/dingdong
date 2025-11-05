// 轮播图
let main, imgs, dots, previous, next, certainShow
main = document.querySelector('.certainty-container')
imgs = document.querySelector('.main-imgs')
dots = document.querySelectorAll('.controls span')
previous = document.querySelector('.previous')
next = document.querySelector('.next')
certainShow = document.querySelector('.certains-page')

// 现在位置
let current = 0
// 移动单位
let width = certainShow.clientWidth

// 动态居中
window.onresize = function () {
  width = certainShow.clientWidth
  imgs.style.left = `-${width * current}px`;
}
// 点击锁
let isLocked = false;
next.onclick = function () {
  //  关键判断：如果已上锁（动画未结束） 直接阻止后续操作移动完之前禁止点击
  if (isLocked) return;
  // 上锁 
  isLocked = true;
  setTimeout(() => {
    current++;
    imgs.style.transition = 'left .4s';
    imgs.style.left = `-${width * current}px`;
    // 监听是否执行完一次
    imgs.addEventListener('transitionend', function unlock () {
      // 解锁：允许下次点击
      isLocked = false;
      // 移除当前事件监听（防止累积）
      imgs.removeEventListener('transitionend', unlock);
    }, { once: true });
  }, 0);
}

previous.onclick = function () {
  // 防止重复点击
  if (isLocked) return;
  isLocked = true;
  if (current == 0) {
    // 将当前页定位到尾页(去除了动画 所以看不出来) 再向前滑动
    current = 3
    imgs.style.transition = ''
    imgs.style.left = `-${width * current}px`
  }
  // 向上一页滑动
  setTimeout(() => {
    current--
    imgs.style.transition = 'left 0.4s'
    imgs.style.left = `-${width * current}px`
    imgs.addEventListener('transitionend', function unlock () {
      // 滑动结束解锁：允许下次点击
      isLocked = false;
      // 移除当前事件监听（防止累积） 
      imgs.removeEventListener('transitionend', unlock);
      // 防止事件重复绑定
    }, { once: true });
  }, 0);
}

// 边缘判断 发生改变（left）才会触发
imgs.addEventListener('transitionend', function () {
  // 末尾（假页）时 回到第一页
  if (current == 3 || current == 0) {
    imgs.style = '' // 去除动画 形成视觉连续效果
    current = 0
  }
})
// 开始移动立刻变化
imgs.addEventListener('transitionstart', function () {
  if (current == 3) {
    current = 0
  }
  // 页面切换 小圆点变化
  dots.forEach(d => d.className = '')
  dots[current].className = 'active'
})


// 小圆点点击变化
dots.forEach((dot, i) => {
  dot.onclick = function () {
    current = i
    dots[current].className = 'active'
    imgs.style.transition = 'left 0.4s'
    imgs.style.left = `-${width * i}px`
  }
})



let timer = setInterval(next.onclick, 4300)
// main.addEventListener('mouseover', () => clearInterval(timer))
// main.addEventListener('mouseleave', () =>
//   timer = setInterval(next.onclick, 3300))
