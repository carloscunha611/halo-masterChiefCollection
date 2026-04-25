const buttonTrailer = document.querySelector('.button-trailer')
const buttonClose = document.querySelector('.close-modal')
const video = document.getElementById('video')
const modal = document.querySelector('.modal')

if (buttonTrailer && buttonClose && video && modal) {
  const linkVideo = video.src

  function openModal() {
    modal.classList.add('open')
    modal.setAttribute('aria-hidden', 'false')
    document.body.classList.add('modal-open')
    video.setAttribute('src', linkVideo)
  }

  function closeModal() {
    modal.classList.remove('open')
    modal.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('modal-open')
    video.setAttribute('src', '')
  }

  buttonTrailer.addEventListener('click', openModal)
  buttonClose.addEventListener('click', closeModal)

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal()
    }
  })
}
