const $video = document.querySelector('#video')
const options = {
    //root:,   
    rootMarging: '0px 0px 0px 0px',
    threshold: 1,
}

function callback(entries, observer) {
    if (entries[0].isIntersecting) {
      $video.play()
    } else {
      $video.pause()
    }
  }

const observer = new IntersectionObserver(callback, options)

observer.observe($video)
