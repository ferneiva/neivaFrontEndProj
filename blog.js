
let  apNextButton = document.querySelector(".ap-next-bt");

apNextButton.addEventListener("click", (eventArgs) => {
    //identificar a imagem ativa
    let activeImage = document.querySelector(".ap-active")
    //identificar o prox irmao da imagem    
    let nextImage = activeImage.nextElementSibling;
    // ver se a  imagem é a ultima (proxima sibling null) se sim passar para first child
    //se não for passar para a próxima com o else
    if (!activeImage.nextElementSibling) {

        // mostro a 1ª imagem que é a primeira escondida
        let firstImage = document.querySelector(".ap-hide");
        // devolve na consola div.photo1-item-hide <==== ERRO

        firstImage.classList.remove("ap-hide");
        firstImage.classList.add("ap-active");
        //escondo a imagem actual(última)
        activeImage.classList.remove("ap-active");
        activeImage.classList.add("ap-hide");


    }
    else {
        //trocar as classes para esconder a ativa e mostrar a irmã seguinte
        activeImage.classList.remove("ap-active");
        activeImage.classList.add("ap-hide");
        nextImage.classList.add("ap-active");
        nextImage.classList.remove("ap-hide");
    }
})
// ------botão prev-----------
let apPrevButton = document.querySelector(".ap-prev-bt");
apPrevButton.addEventListener("click", (eventArgs) => {
    //identificar a imagem ativa
    let activeImage = document.querySelector(".ap-active")
    //identificar o irmao da proxima imagem anterior
    let nextPrevImage = activeImage.previousElementSibling;
    // ver se a  imagem é a 1ª (prevous sibling null) se sim passar para last child
    //se não for passar para a próxima anteior com o else
    if (!activeImage.previousElementSibling) {
        // estou na 1ª imagem ñ tem irmãos para trás
        activeImage.classList.remove("ap-active");
        activeImage.classList.add("ap-hide");

        // tenho de ir para a última foto
        // identificar a ultima foto <========== ERRO
        const arrayHide = document.querySelectorAll(".ap-hide")
        let lastImage = arrayHide[arrayHide.length - 1];


        // mostrar a ultima foto

        lastImage.classList.remove("ap-hide");
        lastImage.classList.add("ap-active");




    }
    else {
        //trocar as classes para esconder a ativa e mostrar a irma anterior
        activeImage.classList.remove("ap-active");
        activeImage.classList.add("ap-hide");
        nextPrevImage.classList.remove("ap-hide");
        nextPrevImage.classList.add("ap-active");
    }

});
