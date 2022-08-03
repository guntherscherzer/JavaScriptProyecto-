
let myPj = new HojaPj();

let characterRace = document.getElementById("characterRace");
let characterClasses = document.getElementById("characterClasses");
let strScore = document.getElementById("strScore");
let dexScore = document.getElementById("dexScore");
let conScore = document.getElementById("conScore");
let wisScore = document.getElementById("wisScore");
let intScore = document.getElementById("intScore");
let chaScore = document.getElementById("chaScore");
let strMod = document.getElementById("strMod");
let dexMod = document.getElementById("dexMod");
let conMod = document.getElementById("conMod");
let intMod = document.getElementById("intMod");
let wisMod = document.getElementById("wisMod");
let chaMod = document.getElementById("chaMod");
let speed = document.getElementById("speed");
let size = document.getElementById("size");

characterRace.addEventListener("change",(e)=>{
    let selectedRace;
    switch (characterRace.value) {
        case "Human": 
            selectedRace=human;
            break;
        case "Elve": 
            selectedRace=elve;
            break;
        case "Dwarf": 
            selectedRace=dwarf;
            break;
    }
    myPj.characterRace=selectedRace;
    size.value=myPj.characterRace.size;
    speed.value=myPj.characterRace.speed;
    
})
strScore.addEventListener("keyup",(e)=>{
    myPj.str=strScore.value;
    myPj.calcMod();
    strMod.innerText=myPj.strMod;
})
dexScore.addEventListener("keyup",(e)=>{
    myPj.dex=dexScore.value;
    myPj.calcMod();
    dexMod.innerText=myPj.dexMod;
})
conScore.addEventListener("keyup",(e)=>{
    myPj.con=conScore.value;
    myPj.calcMod();
    conMod.innerText=myPj.conMod;
    
})
wisScore.addEventListener("keyup",(e)=>{
    myPj.wis=wisScore.value;
    myPj.calcMod();
    wisMod.innerText=myPj.wisMod;
})
intScore.addEventListener("keyup",(e)=>{
    myPj.int=IntScore.value;
    myPj.calcMod();
    intMod.innerText=myPj.intMod;
})
chaScore.addEventListener("keyup",(e)=>{
    myPj.cha=chaScore.value;
    myPj.calcMod();
    chaMod.innerText=myPj.chaMod;
})
