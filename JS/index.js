let nav = document.getElementById('navbar');
nav.style.transition = "top 0.8s ease-out";
let pagePrevPos = window.scrollY + 50;

window.addEventListener('scroll', function(){
    let pageCurrPos = this.window.scrollY;

    if(pagePrevPos > pageCurrPos){ //user is scrolling up
        nav.style.top = "0";
    }
    else{
        nav.style.top = "-100px"; //user is scrolling down
    }

    pagePrevPos = pageCurrPos;
});
  // if(event.pageY > 0){
    //     // header.classList.add("scroll-down");
    //     header.style.opacity = "0";
    // }
    // else{
    //     // header.classList.add("scroll-up");
    //     header.style.opacity = "1";
    // }