let navbar = document.querySelector(".navbar")
let sticky = navbar.offsetTop

// make navebar fixed when navbar is at the top
window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}

$(document).ready(function () {

    // Events
    $.getJSON('./data/events.json', function(data) { 
        $.each(data, function(key, value) {
            $(".event-container").append($(`<div class="card-container col-lg-4 col-md-6 col-12"><div class="card event-${key}"></div></div>`))
            $(`.event-${key}`).append($(`<div class="event-front flip-btn" data-id="event-${key}"><div class="inner flip-btn" data-id="event-${key}"><img src="images/${value.image}" class="flip-btn" data-id="event-${key}" alt="${value.event}" /></div><p class="event-name flip-btn" data-id="event-${key}">${value.event}</p><p class="flip-btn" data-id="event-${key}">Apr 17, 2021 - Oct 30, 2021 (Every Saturday)</p>`))
            $(`.event-${key}`).append($(`<div class="event-back"><p class="event-name">${value.event}</p><p><strong>Date:</strong> ${value.duration} ${value.days ? "("+ value.days +")" : ""}</p><p><strong>Time:</strong> ${value.time}</p>${value.eventLink ? '<p><strong>Event Link:</strong> <a href="' + value.eventLink +'" target="_blank">' + value.eventLink +'</a></p>' : "" }<p><strong>Location:</strong> <a href="${value.locationLink}" target="_blank">${value.location}</a></p><div class="flip-back"><p>click to flip</p></div></div>`))
        }) 
    })
    // HTML
    // <div class="card-container col-lg-4 col-md-6 col-12">
    //     <div class="card event-1">
    //         <div class="event-front">
    //             <div class="inner">
    //                 <img src="images/bronx-night-market-1.png" alt="Bronx Night Market" />
    //             </div>
    //             <a href="https://www.thebronxnightmarket.com/" target="_blank" class="event-link">
    //                 <p class="event-name">Bronx Night Market</p>
    //             </a>
    //             <p>Apr 17, 2021 - Oct 30, 2021 (Every Saturday)</p>
    //             <div class="flip-btn" data-id="event-1">
    //                 <p>click to flip</p>
    //             </div>
                
    //         </div>
    //         <div class="event-back">
    //             <p class="event-name">Bronx Night Market</p>
    //             <p><strong>Date:</strong> Apr 17, 2021 - Oct 30, 2021 (Every Saturday)</p>
    //             <p><strong>Time:</strong> 12am - 7pm</p>
    //             <p><strong>Location:</strong> <a href="#" target="_blank">Fortham Plaza</a></p>
    //             <p><strong>Event Link:</strong> <a href="https://www.thebronxnightmarket.com/" target="_blank">thebronxnightmarket.com</a></p>
    //             <div class="flip-back">
    //                 <p>click to flip</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // JSON
    // {
    //     "event": "",
    //     "eventLink": "",
    //     "image": "",
    //     "duration": "",
    //     "time": "",
    //     "days": "",
    //     "location": "",
    //     "locationLink": ""
    // }

    // Flip Back Card
    $(document).on("click", ".flip-back",function() {
        $(".flipcard").removeClass("flipcard");
    })

    // Flip Event Card
    $(document).on("click", ".flip-btn",function() {
        var dataId = $(this).attr("data-id");
        $(".flipcard").removeClass("flipcard");
        setTimeout(function(){ $(`.${dataId}`).addClass("flipcard"); }, 200);
        
    })


    
    // Gallery
    $.getJSON('./data/gallery.json', function(data) { 
        $.each(data, function(key, value) {
            $(".gallery-container").append($(`<a href="images/${value.img}" data-lightbox="${value.data}" class="${value.class}"><img src="images/${value.img}" alt="${value.alt}"/></a>`))
        }) 
    })
    // <a href="img/gallery_1.jpg" data-lightbox="hangrydogGallery" class="horizontal">
    //   <img src="img/gallery_1.jpg"/>
    // </a>

})