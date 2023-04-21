let nav = document.getElementById('navbar');
// nav.style.transition = "top 0.8s ease-out";
let pagePrevPos = window.scrollY + 50;

window.addEventListener('scroll', function(){
    let pageCurrPos = this.window.scrollY;

    if(pagePrevPos > pageCurrPos || (pagePrevPos >= 0 && pagePrevPos <= 100)){ //user is scrolling up
        nav.style.top = "0";
    }
    else{
        nav.style.top = "-100px"; //user is scrolling down
    }

    pagePrevPos = pageCurrPos;
});
 
//Deleting the PopAnimation after 8 secs
if(window.location.pathname === "/about-me.html"){ //if we are in about me page then target the pop up
    setTimeout(()=>{
        let popUp = document.getElementById("pop-up");
        popUp.style.transition = "opacity 1s linear";
        popUp.style.opacity = "0";
        popUp.style.we
        setTimeout(() =>{
            popUp.style.display = "none"; //Removing the element fromt the document flow
        },1000)
        
    },4000);
}
