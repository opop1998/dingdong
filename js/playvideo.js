// 播放按钮

let playerBtn = document.querySelector('.play-img')
playerBtn.addEventListener('click', function () {
  let playerBox = document.createElement('div')
  playerBox.className = 'playerBox'
  playerBox.innerHTML = `
  <video class="newVideo" autoplay muted controls src="./libs/100meindex.mp4">
  </video>
  <a href="javascript:void(0)" class="closebutton">
  <img src="./imgs/close.png" alt="">
  </a>
   `
  document.body.append(playerBox)
  document.documentElement.classList.add('scrollable-content')
  // 关闭按钮
  let closebutton = document.querySelector('.closebutton')
  closebutton.onclick = function () {
    let player = closebutton.parentElement
    player.remove()
    document.documentElement.classList.remove('scrollable-content')
  }

})

