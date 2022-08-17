
let myPj = new HojaPj();

let characterRace = document.getElementById("characterRace");
let characterClass = document.getElementById("characterClass");
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
let features = document.getElementById("features");
let proficiencies = document.getElementById("proficiencies");
let languages = document.getElementById("languages");
let equipment = document.getElementById("equipment");
let infos = document.querySelectorAll(".info");

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
    features.value=myPj.characterRace.features.join("\n");
    proficiencies.value=myPj.characterRace.proficiencies.join("\n");
    languages.value=myPj.characterRace.langueges.join("\n");
    
})
characterClass.addEventListener("change",(e)=>{
    let selectedClass;
    switch (characterClass.value) {
        case "Barbaro": 
            selectedClass=barbarian;
            break;
        case "Mago": 
            selectedClass=mage;
            break;
        case "Picaro": 
            selectedClass=rogue;
            break;
        }
        console.log(selectedClass);
    myPj.characterClass=selectedClass;   
    proficiencies.value+=myPj.characterClass.proficiencies.join("\n");
    features.value+=myPj.characterClass.features.join("\n");
    equipment.value+=myPj.characterClass.equipment.join("\n");
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
infos.forEach((info)=>{
    info.addEventListener("click",(e)=>{
        let infoTitle = "";
        let infoText = "";
        switch (info.getAttribute("infoTarget")) {
            case "attrStr":
                infoTitle = "Información Atributo Fuerza"
                infoText = "Mide la potencia física, entrenamiento atlético y situaciones en que se puede ejercer puro poderío físico.";
                break;
            case "attrDex":
                infoTitle = "Información Atributo Destreza "
                infoText = "Mide la agilidad, los reflejos y el equilibrio.";
                break;
            case "attrCon":
                infoTitle = "Información Atributo Constitución "
                infoText = "Mide la salud, el aguante y el vigor.";
                break;   
            case "attrInt":
                infoTitle = "Información Atributo Inteligencia"
                infoText = "Mide la agudeza mental, la exactitud de los recuerdos y la capacidad de razonar.";
                break;
            case "attrWis":
                infoTitle = "Información Atributo Sabiduria"
                infoText = "Refleja que tan en sintonía estas con el mundo que te rodea y representa la perspicacia e intuición.";
                break;
            case "attrCha":
                infoTitle = "Información Atributo Carisma"
                infoText = "Mide tu capacidad para interactuar de forma efectiva con otros. Incluye factores tales como la confianza y elocuencia, y puede representar una personalidad encantadora o imponente.";
                break;
            }
        Swal.fire({
            title: infoTitle,
            html: infoText,
        })                
    })
});