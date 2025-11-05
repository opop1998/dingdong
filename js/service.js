// 服务切换
/*
  遍历li 只添加mouseover监听 
  图标和类名重置为默认 
  激活当前li时：
  添加show
  移除item-text 的hide类
  item-name img.src根据索引改变
  右phone img.src根据索引改变
*/
let lis = document.querySelectorAll('.ser-items ul li')
let itemtTexts = document.querySelectorAll('.item-text')
let phoneImg = document.querySelector('.phone img')

lis.forEach((li, i) => {
  let itemtText = li.querySelector('.item-text')
  let img = li.querySelector('img')
  // 只有移入变化
  li.addEventListener('mouseover', function () {
    lis.forEach((li, j) => {
      li.className = ''
      // 所有图标重置为对应默认图标
      let img = li.querySelector('img')
      if (j == 0) img.src = './imgs/servehome.png'
      if (j == 1) img.src = './imgs/hat.png'
      if (j == 2) img.src = './imgs/iconEat.png'
      if (j == 3) img.src = './imgs/servevip.png'
    })
    // 滑入时
    li.className = 'show'
    itemtTexts.forEach(t => t.classList.add('hide')) //隐藏所有小字
    // 显示当前小字
    itemtText.classList.remove('hide')
    // 根据索引改变图标图片
    if (i == 0) {
      img.src = './imgs/servehomeActive.png'
      phoneImg.src = "./imgs/serveBg.12cc7aef.png"
    }
    if (i == 1) {
      img.src = './imgs/hatcolor.png'
      phoneImg.src = "./imgs/goodsBg.e29ddff3.png"
    }
    if (i == 2) {
      img.src = './imgs/iconEatActive.png'
      phoneImg.src = "./imgs/eatBg.png"
    }
    if (i == 3) {
      img.src = './imgs/iconVipActive.png'
      phoneImg.src = "./imgs/vipBg.b2b1b780.png"
    }
  })
})

