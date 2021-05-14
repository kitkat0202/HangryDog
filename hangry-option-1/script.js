$(document).ready(function () {
  let main = $("#main")
  let menu = $(".hamburger")


  $(menu).click(function(e){
    e.preventDefault()
    $(main).toggleClass("active")
    $(this).toggleClass("is-active")
  })

  
  // Menu
  $.getJSON('./data/menu.json', function(data) { 
    $.each(data, function(key, value) {
      $(".menu-container").append($(`<div class="col-lg-4 col-6"><div class="item item-${key}"></div></div>`))
      $(`.item-${key}`).append($(`<img src="img/pin.png" alt="pin" class="pin"/>`))
      $(`.item-${key}`).append($(`<div class="${value.containerClass}"><img src="img/${value.file}" alt="${value.name}" class="${value.imgClass}"/></div>`))
      $(`.item-${key}`).append($(`<p>${value.name}</p>`))
    }) 
  })
  // <div class="col-4">
  //     <div class="item item-1">
  //         <img src="img/pin.png" alt="pin" class="pin"/>
  //         <div class="item-photo">
  //             <img src="img/1.png" alt="Classic" class="item-img"/>
  //         </div>
  //         <p>Classic</p>
  //     </div>
  // </div>


  // Events
  // $.getJSON('./data/events.json', function(data) { 
  //   $.each(data, function(key, value) {
  //     $(".event-container").append($(`<div class="col-4"><div class="item item-${key}"></div></div>`))
  //   }) 
  // })

  // <a href="https://www.thebronxnightmarket.com/" target="_blank" class="event-link">
  //   <div class="event event-1">
  //       <div class="inner">
  //           <img src="img/bronx-night-market-1.png" alt="Bronx Night Market" />
  //       </div>
  //       <p class="event-name">Bronx Night Market</p>
  //       <p class="event-time">April 17, 2021 - October 30, 2021</p>
  //   </div>
  // </a>



  // Gallery
  $.getJSON('./data/gallery.json', function(data) { 
    $.each(data, function(key, value) {
      $(".gallery-container").append($(`<a href="img/${value.img}" data-lightbox="${value.data}" class="${value.class}"><img src="img/${value.img}" alt="${value.alt}"/></a>`))
    }) 
  })
  // <a href="img/gallery_1.jpg" data-lightbox="hangrydogGallery" class="horizontal">
  //   <img src="img/gallery_1.jpg"/>
  // </a>

})