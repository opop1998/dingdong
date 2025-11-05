// 采购申请
let ipts = document.querySelectorAll('.inp_item .inpContainer  input')
let iptsArea = document.querySelectorAll('.inpContainer textarea')
let select = document.querySelector('.inpContainer select')




// 文本框


ipts.forEach(ipt => {
  ipt.addEventListener('blur', function () {
    checkVal(this)
  })
})
let nameReg = /^[\u4e00-\u9fffA-Za-z]{2,20}$/;
let telReg = /^1[3-9]\d{9}$/
let emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
// 名字验证
ipts[1].addEventListener('blur', function () {
  if (this.value) {
    if (!nameReg.test(this.value)) {
      this.nextElementSibling.classList.add('show')
      this.nextElementSibling.innerHTML = '格式错误,请输入2-20字母或汉字'
      this.classLista.add('err')
    } else {
      this.nextElementSibling.classList.remove('show')
      this.classLista.remove('err')
    }
  } else {
    this.nextElementSibling.innerHTML = '该字段是必填字段'
  }
})
ipts[1].addEventListener('input', function () {
  if (this.value) {
    if (!nameReg.test(this.value)) {
      this.nextElementSibling.classList.add('show')
      this.nextElementSibling.innerHTML = '格式错误,请输入2-20字母或汉字'
      this.classLista.add('err')
    } else {
      this.nextElementSibling.classList.remove('show')
      this.classLista.remove('err')
    }
  } else {
    this.nextElementSibling.innerHTML = '该字段是必填字段'
  }
})
// 手机号验证
ipts[2].addEventListener('blur', function () {
  if (this.value) {
    if (!telReg.test(this.value)) {
      this.nextElementSibling.classList.add('show')
      this.nextElementSibling.innerHTML = '格式错误,请输入正确的手机号码'
      this.classLista.add('err')
    } else {
      this.nextElementSibling.classList.remove('show')
      this.classLista.remove('err')
    }
  } else {
    this.nextElementSibling.innerHTML = '该字段是必填字段'
  }
})
ipts[2].addEventListener('input', function () {
  if (this.value) {
    if (!telReg.test(this.value)) {
      this.nextElementSibling.classList.add('show')
      this.nextElementSibling.innerHTML = '格式错误,请输入正确的手机号码'
      this.classLista.add('err')
    } else {
      this.nextElementSibling.classList.remove('show')
      this.classLista.remove('err')
    }
  } else {
    this.nextElementSibling.innerHTML = '该字段是必填字段'
  }
})
// 邮箱验证
ipts[3].addEventListener('blur', function () {
  if (this.value) {
    if (!emailReg.test(this.value)) {
      this.nextElementSibling.classList.add('show')
      this.nextElementSibling.innerHTML = '格式错误,请输入正确的邮箱地址'
      this.classLista.add('err')
    } else {
      this.nextElementSibling.classList.remove('show')
      this.classLista.remove('err')
    }
  } else {
    this.nextElementSibling.innerHTML = '该字段是必填字段'
  }
})
ipts[3].addEventListener('input', function () {
  if (this.value) {
    if (!emailReg.test(this.value)) {
      this.nextElementSibling.classList.add('show')
      this.nextElementSibling.innerHTML = '格式错误,请输入正确的邮箱地址'
      this.classLista.add('err')
    } else {
      this.nextElementSibling.classList.remove('show')
      this.classLista.remove('err')
    }
  } else {
    this.nextElementSibling.innerHTML = '该字段是必填字段'
  }
})

function checkVal (tar) {
  if (!tar.value) {//空时
    tar.style.border = '1px solid #ff4d4f'
    tar.nextElementSibling.classList.add('show')
  } else {
    tar.style.border = '1px solid #d9d9d9'
    tar.nextElementSibling.classList.remove('show')
  }
}

// 选择框
select.addEventListener('blur', function () {
  checkVal(this)
})
// 文本域
iptsArea.forEach(ta => {
  ta.addEventListener('blur', function () {
    checkVal(this)
  })
})
// 选择文件
// 绑定点击事件
document.querySelector('.select-btn').addEventListener('click', function () {
  document.getElementById('fileInput').click();

});
// fileInput.onclick =
fileInput.onchange = function () {
  if (this.value) {
    document.querySelector('.license p').classList.add('show')
    document.querySelector('.license p').innerHTML = '已选择一张图片'
    document.querySelector('.license p').style.color = 'black'
  } else {
    document.querySelector('.license p').style.color = 'red'
    document.querySelector('.license p').innerHTML = '该字段是必填字段'
    tar.nextElementSibling.classList.add('show')
  }
}
// 提交按钮
document.querySelector('form').onsubmit = function (f) {
  f.preventDefault()
  // 逐一验证
  ipts.forEach(function (ipt) {
    checkVal(ipt)
  })
  checkVal(select)
  iptsArea.forEach(ar => {
    checkVal(ar)
  })

  if (!fileInput.value) {
    document.querySelector('.select-btn').nextElementSibling.classList.add('show')
  } else {
    document.querySelector('.select-btn').nextElementSibling.classList.remove('show')
  }
  let err = document.querySelectorAll('.show')
  if (err.length > 0) {
    alert('请输入正确数据')
  } else {
    alert('提交成功')
    location.href = 'index.html'
  }
}
