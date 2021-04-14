const images = document.querySelectorAll('.image')
const body = document.querySelector('body')


body.addEventListener('click', () => {
  images.forEach(image => {
    let delay = Math.random() * (0.2 - 0) + 0;
    image.style.transitionDelay = delay + "s"
    image.classList.toggle('hidden')
  })
})


