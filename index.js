function changeActive(activeImage,nextImage){
    activeImage.classList.remove("item-active");
    activeImage.classList.add("item-hide");
    nextImage.classList.add("item-active");
    nextImage.classList.remove("item-hide");
}

let nextButton = document.querySelector('.nextButton');

nextButton.addEventListener("click",(eventArgs)=>{
   
    //identificar a imagem ativa
    let activeImage = document.querySelector(".item-active")
    //identificar o irmao da imagem
    //a proxima imagem ativa
    let nextImage = activeImage.nextElementSibling;
    //trocar as classes para esconder a ativa e mostrar a irma
    /*activeImage.classList.remove("item-active");
    activeImage.classList.add("item-hide");
    nextImage.classList.add("item-active");
    nextImage.classList.remove("item-hide");*/
    changeActive(activeImage,nextImage);
    if(!nextImage.nextElementSibling){
       // let buttonNext = document.querySelector("#nextButton");
       let buttonNext = eventArgs.target;
       buttonNext.classList.add("item-hide");
    }
    // mostra o prev button
    let buttonprev = document.querySelector(".prevButton");
    buttonprev.classList.remove("item-hide");
})

let prevButton = document.querySelector(".prevButton");
prevButton.addEventListener("click",(eventArgs)=>{
  
      //identificar a imagem ativa
      let activeImage = document.querySelector(".item-active")
      //identificar o irmao da imagem
      //a proxima imagem ativa
      let nextImage = activeImage.previousElementSibling;
      //trocar as classes para esconder a ativa e mostrar a irma
    /*    activeImage.classList.remove("item-active");
    activeImage.classList.add("item-hide");
    nextImage.classList.add("item-active");
    nextImage.classList.remove("item-hide");
    */
    changeActive(activeImage,nextImage);
    if(!nextImage.previousElementSibling){
       // let buttonPrev = document.querySelector("#prevButton");
       let buttonPrev = eventArgs.target; 
       buttonPrev.classList.add("item-hide");
    }
    //se andei para tras então ja faz sentido ter o botão prev
    let buttonNext = document.querySelector(".nextButton");
    buttonNext.classList.remove("item-hide");
});

//---------.--- section tabs-------------
let tabs = document.querySelectorAll(".tab");
tabs.forEach(element => element.addEventListener("click",
eventArg =>{
    let contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.classList.add("tab-hide"));
    let tabClicked = eventArg.target;
    let tabId = tabClicked.id;
    let content2Showdocument = document.querySelector("."+tabId);
    content2Showdocument.classList.remove("tab-hide");
}));