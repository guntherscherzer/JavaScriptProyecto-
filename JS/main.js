
let myPj = new HojaPj();

let characterRace = document.getElementById("characterRace");
let characterClass = document.getElementById("characterClass");
let attrsValue = document.querySelectorAll(".stat");
let strScore = document.getElementById("strScore");
let dexScore = document.getElementById("dexScore");
let conScore = document.getElementById("conScore");
let wisScore = document.getElementById("wisScore");
let intScore = document.getElementById("intScore");
let chaScore = document.getElementById("chaScore");
let attrsMod = document.querySelectorAll(".statmod");
let strMod = document.getElementById("strMod");
let dexMod = document.getElementById("dexMod");
let conMod = document.getElementById("conMod");
let intMod = document.getElementById("intMod");
let wisMod = document.getElementById("wisMod");
let chaMod = document.getElementById("chaMod");
let speed = document.getElementById("speed");
let features = document.getElementById("features");
let proficiencies = document.getElementById("proficiencies");
let languages = document.getElementById("languages");
let equipment = document.getElementById("equipment");
let infos = document.querySelectorAll(".info");
let backgrounds = document.getElementById("background");
let alignment = document.getElementById("alignment");
let proficiencybonus= document.getElementById("proficiencybonus");
let experiencepoints = document.getElementById("experiencepoints");
let initiative = document.getElementById("initiative");
let lvl = document.getElementById("lvl");
let savingThrowsValue = document.querySelectorAll(".savingThrowsValue");
let savingThrowsProf = document.querySelectorAll(".savingThrowsProf");

let skillsValue = document.querySelectorAll(".skillsValue")
let skillsProf = document.querySelectorAll(".skillsProf")

let strModValue = document.querySelectorAll(".strModValue")
let dexModValue = document.querySelectorAll(".dexModValue")
let conModValue = document.querySelectorAll(".conModValue")
let intModValue = document.querySelectorAll(".intModValue")
let wisModValue = document.querySelectorAll(".wisModValue")
let chaModValue = document.querySelectorAll(".chaModValue")

let chatBox = document.getElementById("chatBox");
let chatButton = document.getElementById("chatButton");
let chatScreen = document.getElementById("chatScreen");
// Fetch a la api del select

fetch("https://www.dnd5eapi.co/api/races")
    .then((response)=>response.json())
    .then((races)=>{
        races.results.forEach(race => {
            let option = document.createElement("option")
            option.value= race.index
            option.innerText= race.name
            
            characterRace.appendChild(option)
            
        });
    })
fetch("https://www.dnd5eapi.co/api/classes")
    .then((response)=>response.json())
    .then((classes)=>{
        classes.results.forEach(clase => {
            let option = document.createElement("option")
            option.value= clase.index
            option.innerText= clase.name
            
            characterClass.appendChild(option)
            
        });
    })
fetch("https://www.dnd5eapi.co/api/backgrounds")
    .then((response)=>response.json())
    .then((backgrounds)=>{
        backgrounds.results.forEach(trasfondo => {
            let option = document.createElement("option")
            option.value= trasfondo.index
            option.innerText= trasfondo.name
            
            background.appendChild(option)
            
        });
    })

    fetch("https://www.dnd5eapi.co/api/alignments")
    .then((response)=>response.json())
    .then((alignments)=>{
        alignments.results.forEach(alineamiento => {
            let option = document.createElement("option")
            option.value= alineamiento.index
            option.innerText= alineamiento.name
            
            alignment.appendChild(option)
            
        });
    })

//  eventos
characterRace.addEventListener("change",(e)=>{
    let RaceId = e.target.value;
    console.log(RaceId);
    fetch(`https://www.dnd5eapi.co/api/races/${RaceId}`)
        .then((response)=>response.json())
        .then(race=>{
            console.log(race);
            const myRace = new CharacterRace(race.name)
            race.ability_bonuses.forEach(abilityBonus => {
                myRace[abilityBonus.ability_score.index]= abilityBonus.bonus           
            });
            myRace.size = race.size;
            myRace.speed = race.speed
            myRace.features = race.traits.map(trait=>trait.name);
            myRace.proficiencies = race.starting_proficiencies.map(proficiencie=>proficiencie.name);
            myRace.langueges = race.languages.map(language=>language.name);
            console.log(myRace);
            myPj.characterRace=myRace;
            speed.value=myPj.characterRace.speed;
            features.value=myPj.characterRace.features.join("\n");
            proficiencies.value=myPj.characterRace.proficiencies.join("\n");
            proficiencies.value+="\n"+myPj.characterRace.langueges.join("\n");
        })
    
    
})
characterClass.addEventListener("change",(e)=>{
    let ClassId = e.target.value;
    console.log(characterClass);
    fetch(`https://www.dnd5eapi.co/api/classes/${ClassId}`)
        .then((response)=>response.json())
        .then(clase=>{
            console.log(clase);
            const myClass = new CharacterClass(clase.name);
            myClass.hitDice = clase.hit_die;
            myClass.proficiencies = clase.proficiencies.map(proficiencie=>proficiencie.name);
            myClass.savingThrows = clase.saving_throws.map(saving_throw=>saving_throw.index);
            myClass.equipment = clase.starting_equipment.map(equip=>equip.equipment.name);
            console.log(myClass);
            let savingThrowsCheckbox = ["str","dex","con","int","wis","cha"];
            savingThrowsCheckbox.forEach((checkbox)=>document.getElementById(`SavingThrows${checkbox}`).removeAttribute("checked"));
            myClass.savingThrows.forEach((savingThrow)=>{
                document.getElementById(`SavingThrows${savingThrow}`).setAttribute("checked", true);
            })
            myPj.characterClass=myClass;   
            proficiencies.value+="\n"+myPj.characterClass.proficiencies.join("\n");
            features.value+=myPj.characterClass.features.join("\n");
            equipment.value+=myPj.characterClass.equipment.join("\n");
        })
        
})
backgrounds.addEventListener("change",(e)=>{
    let backgrounds = e.target.value;
    console.log(characterClass);
    fetch(`https://www.dnd5eapi.co/api/backgrounds/${backgrounds}`)
        .then((response)=>response.json())
        .then(background=>{
            console.log(background);
            const myBackground = new CharacterClass(background.name);
            console.log(myBackground);
        })

})
infos.forEach((info)=>{
    info.addEventListener("click",(e)=>{
        let infoTitle = "";
        let infoText = "";
        let attrMod = 0
        switch (info.getAttribute("infoTarget")) {
            case "attrStr":
                infoTitle = "Información Atributo Fuerza"
                infoText = "Mide la potencia física, entrenamiento atlético y situaciones en que se puede ejercer puro poderío físico.";
                attrMod = myPj.strMod
                break;
            case "attrDex":
                infoTitle = "Información Atributo Destreza "
                infoText = "Mide la agilidad, los reflejos y el equilibrio.";
                attrMod = myPj.dexMod
                break;
            case "attrCon":
                infoTitle = "Información Atributo Constitución "
                infoText = "Mide la salud, el aguante y el vigor.";
                attrMod = myPj.conMod
                break;   
            case "attrInt":
                infoTitle = "Información Atributo Inteligencia"
                infoText = "Mide la agudeza mental, la exactitud de los recuerdos y la capacidad de razonar.";
                attrMod = myPj.intMod
                break;
            case "attrWis":
                infoTitle = "Información Atributo Sabiduria"
                infoText = "Refleja que tan en sintonía estas con el mundo que te rodea y representa la perspicacia e intuición.";
                attrMod = myPj.wisMod
                break;
            case "attrCha":
                infoTitle = "Información Atributo Carisma"
                infoText = "Mide tu capacidad para interactuar de forma efectiva con otros. Incluye factores tales como la confianza y elocuencia, y puede representar una personalidad encantadora o imponente.";
                attrMod = myPj.chaMod
                break;
            }
        Swal.fire({
            title: infoTitle,
            html: `${infoText} <br> <button class="btn btn-danger" onclick="chatComand('/roll 1d20+${attrMod}');Swal.close()">Lanzar 1d20 </button>`,
        })                
    })
});

attrsValue.forEach(attrValue=>{
    attrValue.addEventListener("keyup",(e)=>{
        let pjAttr= attrValue.getAttribute("pjAttr")
        let modInput = attrValue.nextSibling;
        myPj[pjAttr]=attrValue.value;
        myPj.calcMod();
        calcAttrsMod();
        calcSavingThrowsMods();
        CalcSkillsMod();
    })
    
})

savingThrowsProf.forEach(savingThrowProf=>{
    savingThrowProf.addEventListener("change",(e)=>{
        let pjAttr = savingThrowProf.getAttribute("pjAttr");
        myPj.savingThrows[pjAttr].prof = savingThrowProf.checked;
        myPj.calcMod();
       calcSavingThrowsMods();
    })
})
skillsProf.forEach(skillProf=>{
    skillProf.addEventListener("change",(e)=>{
        let pjSkill = skillProf.getAttribute("pjSkill");
        myPj.skills[pjSkill].prof = skillProf.checked;
        myPj.calcMod();
        CalcSkillsMod();   
    })
})

experiencepoints.addEventListener("keyup",(e)=>{
    myPj.exp=Number(experiencepoints.value);
    myPj.calcProfBonByExp ();
    proficiencyBonus.value = myPj.proficiencieBonus
    lvl.value = myPj.lvl
    myPj.calcMod();
    calcSavingThrowsMods();
    CalcSkillsMod(); 
})
lvl.addEventListener("change",(e)=>{
    myPj.lvl=Number(lvl.value);
    myPj.calcProfBonByLvl ();
    proficiencyBonus.value = myPj.proficiencieBonus
    experiencepoints.value = myPj.exp
    myPj.calcMod();
    calcSavingThrowsMods();
    CalcSkillsMod();  
})

chatButton.addEventListener("click",(e)=>{
    ChatCtrl(e);

})
chatBox.addEventListener("keydown",(e)=>{
    ChatCtrl(e);
})

// funciones
function calcAttrsMod() {
    attrsMod.forEach(attrMod=>{
        let pjAttr = attrMod.getAttribute("pjAttr")
        attrMod.innerText = (Number(myPj[pjAttr+"Mod"])>0) ? `+${myPj[pjAttr+"Mod"]}` : myPj[pjAttr+"Mod"];
        
    })
    
}
function calcSavingThrowsMods() {
    savingThrowsValue.forEach(savingThrow=>{
        let pjAttr = savingThrow.getAttribute("pjAttr");
        savingThrow.value=(myPj.savingThrows[pjAttr].value>0) ? `+${myPj.savingThrows[pjAttr].value}` : myPj.savingThrows[pjAttr].value;
    })
}
function CalcSkillsMod() {
    skillsValue.forEach(skillValue=>{
        let pjSkill = skillValue.getAttribute("pjSkill");
        skillValue.value=(myPj.skills[pjSkill].value>0) ? `+${myPj.skills[pjSkill].value}` : myPj.skills[pjSkill].value;
    })
}

function rollDice(max) {
    return 1 + Math.floor(Math.random() * max);
}
  
function ChatCtrl(e) {
    if ((e.key == 'Enter' && e.type == "keydown")  || ( e.type == "click")) {
        let chatValue = chatBox.value
        if (chatValue.charAt(0) == "/") {
            chatComand(chatValue);
        } 
        else{
            chatScreen.innerText += chatValue+ "\n"
            chatBox.value = ""
            chatBox.focus();
        }
    }
}
function chatComand(comands) {
    let comand = comands.split(" ") 
 
    switch (comand[0]) {
        case "/roll":
            let diceParam = comand[1].split("+")
            DiceType = diceParam[0].split("d")
            diceParam.splice(0,1)
            console.log(diceParam);

            let results = []
            for (let i = 0; i <DiceType[0] ; i++) {
                let diceValue = rollDice(DiceType[1]);
                results.push(diceValue);    
            }
            let calc = `${results.join("+")}`
            let result = results.reduce((sum,x)=>sum+x,0)
            diceParam.forEach(mod=>{
                result += Number(mod)
                calc += Number(mod)>0 ? `+${Number(mod)}` : `${Number(mod)}`
            })
            
            
            console.log(results);
            chatScreen.innerText += `Tu tirada fue: \n ${calc}=${result}\n` 
            chatBox.value = ""
            chatBox.focus();
            break;
            
    }
}
