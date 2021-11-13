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
    // const top = 350;
    boxAnime.style.top =   350 - y + "px";
    boxAnime.style.transition = ` all .4s ease `;
    console.log(boxAnime);

    // const top2 = 400
    boxAnime2.style.top =   400 - y + "px";
    boxAnime2.style.transition = ` all .2s ease `;
    console.log(boxAnime2);

}




