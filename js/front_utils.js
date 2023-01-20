$(document).ready(function () {
    window.initMap = initMap;
    $('.menu_list').hide()
    $('.burger_icon').click(function (){
        $(this).closest('.burger_menu').toggleClass('active');
        $(this).closest('.burger_menu').find('.menu_list').toggle("slow")
    })
})

function setActive(pBtn, itemName) {
    $(pBtn).closest('.'+itemName).toggleClass('active')
}

function initMap() {
    // The location of Uluru
    const uluru = {lat: -25.344, lng: 131.031};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

function playpause(pVideo) {
    if (pVideo.paused || pVideo.ended) {
        pVideo.setAttribute('data-state', 'play')
        $(pVideo).closest('.modal').removeClass('paused')
        pVideo.play()
    } else {
        pVideo.setAttribute('data-state', 'pause')
        $(pVideo).closest('.modal').addClass('paused')
        pVideo.pause()
    }
}

function showModal(videoUrl) {
    $('.modal').toggleClass('display_none')
        .find('video').attr('src',videoUrl)
    document.getElementById('modal_video').addEventListener('click', ev => {
        if (ev.target.localName !== 'video') {
            $('.modal video').trigger('pause')
            hideModal('.modal')
        }
    })
}

function hideModal(modal) {
    $(modal).addClass('display_none')
}
