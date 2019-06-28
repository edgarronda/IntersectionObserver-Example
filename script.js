const $video = document.querySelector('#video')
const options = {
    //root:,   
    rootMarging: '0px 0px 0px 0px',
    threshold: 1,
}

function callback(entries, observer){
    $video.play()
}

const observer = new IntersectionObserver(callback, options)

observer.observe($video)
