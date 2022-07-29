
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

strScore.addEventListener("keypress",(e)=>{
    if (e.keyCode==13) {
        myPj.str=strScore.value;
        myPj.calcMod();
        strMod.innerText=myPj.strMod;
    }
})
dexScore.addEventListener("keypress",(e)=>{
    if (e.keyCode==13) {
        myPj.dex=dexScore.value;
        myPj.calcMod();
        dexMod.innerText=myPj.dexMod;
    }
})
conScore.addEventListener("keypress",(e)=>{
    if (e.keyCode==13) {
        myPj.con=conScore.value;
        myPj.calcMod();
        conMod.innerText=myPj.conMod;
    }
})
wisScore.addEventListener("keypress",(e)=>{
    if (e.keyCode==13) {
        myPj.wis=wisScore.value;
        myPj.calcMod();
        wisMod.innerText=myPj.wisMod;
    }
})
intScore.addEventListener("keypress",(e)=>{
    if (e.keyCode==13) {
        myPj.int=IntScore.value;
        myPj.calcMod();
        intMod.innerText=myPj.intMod;
    }
})
chaScore.addEventListener("keypress",(e)=>{
    if (e.keyCode==13) {
        myPj.cha=chaScore.value;
        myPj.calcMod();
        chaMod.innerText=myPj.chaMod;
    }
})
