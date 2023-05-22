// ---- Exibir hamburger menu-----
function showHamburgTab(){
    console.log("entrei na f exibir hamburger");
    
    let seeHamb = document.querySelector(".hide-hbg-tab");
    seeHamb.classList.toggle("see-hbg-tab");
};
let seeHamb = document.querySelector("#show-hbg-tab");
seeHamb.addEventListener("click", showHamburgTab);