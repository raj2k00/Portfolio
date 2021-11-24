
window.addEventListener("load", () => {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
    // setTimeout(function(){
        let divs = document.querySelectorAll('.Main-text-anime');
        console.log(divs)
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.add('text-anime');  
        }  
    //   },0);
  });

const navBar = document.getElementById('responsive-navbar');
const toggleIcon = document.getElementById('toggle-icon');

function myFunction(){
    navBar.classList.toggle('responsive-nav-hide');
    if(toggleIcon.classList.contains('fa-bars')){
        toggleIcon.classList.remove('fa-bars')
        toggleIcon.classList.add('fa-times')
    }else{
        toggleIcon.classList.add('fa-bars')
        toggleIcon.classList.remove('fa-times')
    }
}


const scrollText = document.getElementById('first');
const boxAnime = document.getElementById('Main-content-BoxRoll');
const boxAnime2 = document.getElementById('Main-content-BoxRoll2');

window.addEventListener("scroll", displayContent);

function displayContent(){
    
    let y = window.scrollY;
    if(y >= 100){
        scrollText.className  = "Main-content-designer show"
    }else{
        scrollText.className  = "Main-content-designer hide"
    }

    boxAnime.style.setProperty('top',`calc(55vh - ${y}px)`);
    boxAnime.style.transition = ` all .4s ease `;
   
    boxAnime2.style.setProperty('top',`calc(60vh - ${y}px)`);
    boxAnime2.style.transition = ` all .2s ease `;


}

const waypoint = new Waypoint({
    element: document.getElementById('way-about'),
    handler: function(direction) {
    //   console.log('Scrolled to waypoint!')
        const navBar = document.getElementById('nav-section')
        const navIcon = document.getElementById('nav-image')
        if(direction == "down"){
            navBar.classList.add('navigation-sticky')
            navIcon.classList.add('navigation-sticky-icon')
    
            var divs = document.querySelectorAll('.nav-links'); 
            for (var i = 0; i < divs.length; i++) {
                divs[i].classList.add('nav-links-sticky');  
            }
        }else{
            navBar.classList.remove('navigation-sticky')
            navIcon.classList.remove('navigation-sticky-icon')
    
            var divs = document.querySelectorAll('.nav-links'); 
            for (var i = 0; i < divs.length; i++) {
                divs[i].classList.remove('nav-links-sticky');  
            }
        }
    }
})
  





