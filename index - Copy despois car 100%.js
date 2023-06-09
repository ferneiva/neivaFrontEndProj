
// ----------------Carrossel inicial com classes --------------------------
// ------button next-----------
let nextButton = document.querySelector(".next-Button");

nextButton.addEventListener("click", (eventArgs) => {
    //identificar a imagem ativa (identufy active image)
    let activeImage = document.querySelector(".item-active")
    //identificar o prox irmao da imagem  (identify next image sibling)  
    let nextImage = activeImage.nextElementSibling;
    // ver se a  imagem é a ultima (proxima sibling null) se sim passar para first child
    //se não for passar para a próxima com o else 
    //(see if image is the last( next sibling null) if yes pass to first child if not pass to next with else)
    if (!activeImage.nextElementSibling) {

        // mostro a 1ª imagem que é a primeira escondida (sohe 1st image which is first hide)
        let firstImage = document.querySelector(".item-hide");
        
        firstImage.classList.remove("item-hide");
        firstImage.classList.add("item-active");
        //escondo a imagem actual(última) here I hide the current iamge(last)
        activeImage.classList.remove("item-active");
        activeImage.classList.add("item-hide");


    }
    else {
        //trocar as classes para esconder a ativa e mostrar a irmã seguinte (change classes to hide active image and show sister )
        activeImage.classList.remove("item-active");
        activeImage.classList.add("item-hide");
        nextImage.classList.add("item-active");
        nextImage.classList.remove("item-hide");
    }
})
// ------botão prev-----------
let prevButton = document.querySelector(".prev-Button");
prevButton.addEventListener("click", (eventArgs) => {
    //identificar a imagem ativa (identify active image)
    let activeImage = document.querySelector(".item-active")
    //identificar o irmao da proxima imagem anterior (identify sibling of next previous image )
    let nextPrevImage = activeImage.previousElementSibling;
    // ver se a  imagem é a 1ª (previous sibling null) se sim passar para last child
    //se não for passar para a próxima anterior com o else
    // see if image is the 1st(previous sibling null), if yes pass to last child, if not pass to next prevoius 
    //image with else
    if (!activeImage.previousElementSibling) {
        // estou na 1ª imagem ñ tem irmãos para trás (I'm at image without sibling behind)
        activeImage.classList.remove("item-active");
        activeImage.classList.add("item-hide");

        // tenho de ir para a última foto (I have to move to next image)
        // identificar a ultima foto (identify last image)
        const arrayHide = document.querySelectorAll(".item-hide")
        let lastImage = arrayHide[arrayHide.length - 1];


        // mostrar a ultima foto (Show last image)

        lastImage.classList.remove("item-hide");
        lastImage.classList.add("item-active");




    }
    else {
        //trocar as classes para esconder a ativa e mostrar a irma anterior
        // change classes to hide active and show th previous sibling
        activeImage.classList.remove("item-active");
        activeImage.classList.add("item-hide");
        nextPrevImage.classList.remove("item-hide");
        nextPrevImage.classList.add("item-active");
    }

});

//-----------------end initial carousel---------------

//---------.--- section tabs-------------


let tabs = document.querySelectorAll(".tab");
tabs.forEach(element => element.addEventListener("click",
    eventArg => {
        let contents = document.querySelectorAll(".tab-content");
        contents.forEach(content => content.classList.add("tab-hide"));
        let tabClicked = eventArg.target;
        let tabId = tabClicked.id;
        let content2Showdocument = document.querySelector("." + tabId);
        content2Showdocument.classList.remove("tab-hide");
    }));


// ---- fim section tabs ----

//---------carousel Categories --------------

const arrCat = [
    {
        id: 0,
        symbol: "./assets/icons/flat-4733-64px.png",
        category: "Business 0",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

    },
    {
        id: 1,
        symbol: "./assets/icons/rocket-3432-64px.png",
        category: "Startup 1",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

    },
    {
        id: 2,
        symbol: "./assets/icons/coins-787-64px.png",
        category: "Economy 2",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

    },
    {
        id: 3,
        symbol: "./assets/icons/artificial-intelligence-14078-64px.png",
        category: "Technology 3",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

    },
    {
        id: 4,
        symbol: "./assets/icons/cooperation.png",
        category: "Startup 4",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

    },
    {
        id: 5,
        symbol: "./assets/icons/5-icon.png",
        category: "Economy 5",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

    },
    {
        id: 6,
        symbol: "./assets/icons/6-icon.png",
        category: "Development 6",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

    },
    {
        id: 7,
        symbol: "./assets/icons/monitor.png",
        category: "Technology 7",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

    },
    {
        id: 8,
        symbol: "./assets/icons/8-virtual-reality.png",
        category: "Startup 8",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

    }
];

const arrShow = [
    {
        id: 0,
        symbol: "./assets/icons/flat-4733-64px.png",
        category: "Business 0",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

    },
    {
        id: 1,
        symbol: "./assets/icons/rocket-3432-64px.png",
        category: "Startup 1",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

    },
    {
        id: 2,
        symbol: "./assets/icons/coins-787-64px.png",
        category: "Economy 2",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

    },
    {
        id: 3,
        symbol: "./assets/icons/artificial-intelligence-14078-64px.png",
        category: "Technology 3",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"

    }
]

// _________create array shadow ________
/*
const arrCatShadow = [];
let n=-1;
function createArrayShadow (arrayData){
    for(i=0;  i<arrCat.length; i++){
        n=n+1
        arrCatShadow.push(n)
        
    }
}
console.log(createArrayShadow(arrCat));
const arrShowShadow = [0,1,2,3];
not used arry indexes worked
*/
//________________________________________

let funcPopCat = (dataArray) =>{
    let catContainer = document.querySelector(".choose-cat-wrapper");
    catContainer.innerHTML = "";
    for(i=0;i<dataArray.length; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("choose-box");
        newDiv.innerHTML = ` <div = class="choose-icon"> <img src=${dataArray[i].symbol}> </div>
        <h3 class="cat-title"> ${dataArray[i].category} </h3>
        <p class="cat-page"> ${dataArray[i].text} </p> `
        catContainer.appendChild(newDiv);
    }
}

let nap; //next array position


let nextBtCateg = document.querySelector(".btn-cat-next");
nextBtCateg.addEventListener("click", ()=>{
    if(arrShow[3].id === arrCat[arrCat.length-1].id){
        arrShow.push(arrCat[0]);
        arrShow.shift();
        console.log("entering 1st if of next");
    }
    else{ 
            for(i=0;  i<arrCat.length; i++){
            if(arrShow[3].id === arrCat[i].id){
                console.log("entering if of else next")
                nap = arrCat[i].id+1;
            }
                        
        }
            arrShow.push(arrCat[nap]);
            arrShow.shift();
            nap = nap;
    }
    
    
    funcPopCat ([arrShow[0], arrShow[1],arrShow[2], arrShow[3]]);
    // console.log("passed on function funcPopCat next ");
})
let pap; // prev array position
let prevBtCateg = document.querySelector(".btn-cat-prev");
prevBtCateg.addEventListener("click", ()=>{
//I'm in array show first element whitout previous elemnent on array cat, must pasa to the last element of arrar categories
    if(arrShow[0].id === arrCat[0].id){
        console.log("entering 1st if of prev")
        arrShow.unshift(arrCat[arrCat.length-1]);
        arrShow.pop();
    }
    // I'm in the middle of array act find the array categ equal to first element of array show and place n-1 in first place
    else{
            for(i=0; i<arrCat.length; i++){
            if(arrShow[0].id === arrCat[i].id){
                console.log("entering if of else prev")
                pap=arrCat[i].id-1;
            }
        }
        arrShow.pop();
        arrShow.unshift(arrCat[pap]);
        // pap=pap;
    }
    funcPopCat ([arrShow[0], arrShow[1],arrShow[2], arrShow[3]]);
})



// teste do array json

// function writeArrayCateg(arrayObj){
//     for(i=0;  i<arrayObj.length; ++i){
//         let divArray= document.querySelector ("#teste-array");              
//         divArray.innerHTML = divArray.innerHTML +
//          "<p>Symbol:"+ " "+arrayObj[i].symbol + "******"+ " indice do arrayCateg:"+"----"+ i + "</p>"; 

//     }
// }
// writeArrayCateg(arrayCateg);

// let n=-1;
// symbA=undefined; catA=undefined; textA=undefined;
// symbB=undefined; catB=undefined; textB=undefined;
// symbC=undefined; catC=undefined; textC=undefined;
// next button

/*

-- Funçtion with mathematic matrix indexes, not finish orev matrix difficult to resolve
let nextBtCateg = document.querySelector(".btn-cat-next");
nextBtCateg.addEventListener("click", ()=>{
    
    arrayCateg.forEach (element => {

        indA=n+1
        indB=n+2
        indC=n+3

        symbA=symbol.ArrayCateg[indA];
        catA=category.ArrayCateg[indA];
        textA=text.arrayCateg[indA];

        symbB=symbol.ArrayCateg[indB];
        catB=category.ArrayCateg[indB];
        textB=text.arrayCateg[indC];

        symbC=symbol.ArrayCateg[indC];
        catC=category.ArrayCateg[indC];
        textC=text.arrayCateg[indC];


        const arrayDisplay = [
            {
                idArrD:1,
                symbolArrD:(symbA),
                categoryArrD:(catA),
                textArrD:(textA),
        
            },
            {
                idArrD:2,
                symbolArrD:(symbB),
                categoryArrD:(catB),
                textArrD:(textB),
        
            },
            {
                idArrD:3,
                symbolArrD:(symbC),
                categoryArrD:(catC),
                textArrD:(textC),
        
            },
            ]
        n= n+1;
            let writeDiv = document.querySelector(".choose-cat-wrapper");
            function writeDivDom (){
                
                writeDiv.innerHTML =             
                `<div class="choose-box"></br>
                <div class="choose-icon"><img src=$(symbolArrD.arrayDisplay[])</div><br>
                <h3 class="cat-title">$(categoryArrD.arrayDisplay[])</h3><br>
                <p class="cat-page">$(textArrD.arrayDisplay[])</p><br>
                </div>`;
                
            }
            

        arraydisplay.map(writeDivDom);

    })
    
});
*/

// --------------- carousel testimonials ------------------

// ------button next-----------
let testiNextButton = document.querySelector(".next-button-testi");

testiNextButton.addEventListener("click", (eventArgs) => {
    //identify active div
    let activeDivTesti = document.querySelector(".testi-active")
    //identify next brother of div(with same class)    
    let nextDivTesti = activeDivTesti.nextElementSibling;
    // check if next div is the last (next div sibling null) if yes pass to first child
    //if not pass to next with eslse
    if (!activeDivTesti.nextElementSibling) {
        // if (activeDivTesti.nextElementSibling === null){
        console.log("entrei no if nextDivTest1 existe ou não");
        // Show 1st image,which is first hide 
        let firstDivTesti = document.querySelector(".testi-hide");        

        firstDivTesti.classList.remove("testi-hide");
        firstDivTesti.classList.add("testi-active");
        //hide the actual div (which is the active and last)
        activeDivTesti.classList.remove("testi-active");
        activeDivTesti.classList.add("testi-hide");

    }
    else {
        //change classes to hide active div and show next sister
        activeDivTesti.classList.remove("testi-active");
        activeDivTesti.classList.add("testi-hide");
        nextDivTesti.classList.add("testi-active");
        nextDivTesti.classList.remove("testi-hide");
    }
})
// ------button prev-----------
let testiPrevButton = document.querySelector(".prev-button-testi");
testiPrevButton.addEventListener("click", (eventArgs) => {
    //identify active iamge
    let activeDivTesti = document.querySelector(".testi-active")
    // identify brother of next previous div
    let nextPrevDivTesti = activeDivTesti.previousElementSibling;
    // see if the div is the 1st  (previous sibling null) if yes pass to last child
    //if not, pass to nest previous div with else
    if (!activeDivTesti.previousElementSibling) {
        console.log("entrei no if nextPrevDivTest1 existe ou não")
        // i'm on first div with no brothers behind
        activeDivTesti.classList.remove("testi-active");
        activeDivTesti.classList.add("testi-hide");

        // I have to go to last div
        // identification of last div
        const arrayHideTesti = document.querySelectorAll(".testi-hide")
        let lastDivTesti = arrayHideTesti[arrayHideTesti.length - 1];

        // show last div
        lastDivTesti.classList.remove("testi-hide");
        lastDivTesti.classList.add("testi-active");

    }
    else {
        //change classes to hide active div as show the previous div sister  
        activeDivTesti.classList.remove("testi-active");
        activeDivTesti.classList.add("testi-hide");
        nextPrevDivTesti.classList.remove("testi-hide");
        nextPrevDivTesti.classList.add("testi-active");
    }

});


//-----------------end carosssel testimonials---------------

