const buttonTrailer = document.querySelector('.button-trailer')
const buttonClose = document.querySelector('.close-modal')
const video = document.getElementById('video')
const modal = document.querySelector('.modal')
const linkVideo = video.src

function toggleModal() {
  modal.classList.toggle('open')
}

buttonTrailer.addEventListener('click', () => {
  toggleModal()
  video.setAttribute('src', linkVideo)
})

buttonClose.addEventListener('click', () => {
  toggleModal()
  video.setAttribute('src', '')
})
