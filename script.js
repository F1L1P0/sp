const modal = document.getElementById('myModal')
const slides = document.getElementsByClassName('mySlides')
const dots = document.getElementsByClassName('demo')
const navDropdown = document.getElementById('navDropdown')
const navBtn = document.getElementById('navBtn')

let slideIndex = 1
showSlides(slideIndex)

function openModal() {
  modal.style.display = 'block'
}

function closeModal() {
  modal.style.display = 'none'
}

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}

document.addEventListener('click', function (e) {
  if (e.target === navDropdown || e.target.closest('#navBtn')) {
    navDropdown.classList.toggle('toggleNav')
  } else return
})

//appear animation

function isVisible(element) {
  let elementBox = element.getBoundingClientRect()
  let distanceFromTop = -200

  if (elementBox.top - window.innerHeight < distanceFromTop) {
    return true
  } else {
    return false
  }
}

function scanDocument() {
  let sectionList = document.querySelectorAll('.hide')
  sectionList.forEach(function (section) {
    if (isVisible(section)) {
      section.classList.remove('hide')
      section.classList.add('show')
    }
  })
}

document.addEventListener('scroll', scanDocument)

//parallax  effect

const parallax_bg = document.querySelectorAll('.parallax')

function updateParallax() {
  parallax_bg.forEach((image) => {
    image.style.backgroundPosition = `50% ${window.scrollY / 2}px`
  })
}

window.addEventListener('scroll', () => {
  requestAnimationFrame(updateParallax)
})
