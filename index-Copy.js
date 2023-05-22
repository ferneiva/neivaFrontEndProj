// ----------------Carrossel inicial com classes --------------------------
// ------botão next-----------
let nextButton = document.querySelector(".next-Button");

nextButton.addEventListener("click",(eventArgs)=>{   
    //identificar a imagem ativa
    let activeImage = document.querySelector(".item-active")
    //identificar o prox irmao da imagem    
    let nextImage = activeImage.nextElementSibling;
    // ver se a  imagem é a ultima (proxima sibling null) se sim passar para first child
    //se não for passar para a próxima com o else
    if(!activeImage.nextElementSibling){
        
        // mostro a 1ª imagem que é a primeira escondida
        let firstImage = document.querySelector(".item-hide");
        // devolve na consola div.photo1-item-hide <==== ERRO
        
        firstImage.classList.remove("item-hide");
        firstImage.classList.add("item-active");
        //escondo a imagem actual(última)
        activeImage.classList.remove("item-active");
        activeImage.classList.add("item-hide");
    
    
    }
    else{
        //trocar as classes para esconder a ativa e mostrar a irmã seguinte
        activeImage.classList.remove("item-active");
        activeImage.classList.add("item-hide");
        nextImage.classList.add("item-active");
        nextImage.classList.remove("item-hide");
    }  
})
// ------botão prev-----------
let prevButton = document.querySelector(".prev-Button");
prevButton.addEventListener("click",(eventArgs)=>{  
      //identificar a imagem ativa
      let activeImage = document.querySelector(".item-active")
      //identificar o irmao da proxima imagem anterior
      let nextPrevImage = activeImage.previousElementSibling;
      // ver se a  imagem é a 1ª (prevous sibling null) se sim passar para last child
    //se não for passar para a próxima anteior com o else
    if(!activeImage.previousElementSibling){
          // estou na 1ª imagem ñ tem irmãos para trás
          activeImage.classList.remove("item-active");
          activeImage.classList.add("item-hide");
        
        // tenho de ir para a última foto
    // identificar a ultima foto <========== ERRO
    const arrayHide = document.querySelectorAll(".item-hide")
    let lastImage = arrayHide[arrayHide.length - 1];

        
        // mostrar a ultima foto
        
        lastImage.classList.remove("item-hide");
        lastImage.classList.add("item-active");

      


     }
     else{
        //trocar as classes para esconder a ativa e mostrar a irma anterior
        activeImage.classList.remove("item-active");
        activeImage.classList.add("item-hide");
        nextPrevImage.classList.remove("item-hide");
        nextPrevImage.classList.add("item-active");
     }
      
});

//-----------------fim carosssel inicial---------------




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
