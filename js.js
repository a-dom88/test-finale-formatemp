

// $('#button1').click(function () {
//     $('.wrapper').animate({ //animate element that has scroll
//         scrollTop: 340 //for scrolling
//     }, 1000);
// });




//Start script scroll to top
window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.scrolltop');
    scroll.classList.toggle("active", window.scrollY > 500)
})


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
//End script scroll to top


// cookie script start //
window.cookieconsent.initialise({
    "palette": {
        "popup": {
            "background": "#000000"
        },
        "button": {
            "background": "#ffa500"
        }
    },
    "theme": "classic",
    "position": "bottom-right",
    "content": {
        "dismiss": "Accept Cookies",
        "link": "Learn More"
    }
});

// cookie script end //