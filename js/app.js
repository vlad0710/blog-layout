'use strict'
// $(document).ready(function () { })

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    )
  }
}

if (isMobile.any()) {
  document.body.classList.add('_mobile')
} else {
  document.body.classList.add('_pc')
}




function mobileBurger() {
  const iconMenu = document.querySelector('.header__icon')

  if (iconMenu) {
    const menuBody = document.querySelector('.header__menu')

    iconMenu.addEventListener("click", function (event) {
      document.body.classList.toggle('_lock')

      iconMenu.classList.toggle('_active')
      menuBody.classList.toggle('_active')
    })

  }
}
mobileBurger()


const facebookIcon = new Vivus(
  'facebook',
  {
    type: 'sync',
    duration: 200
  }
);