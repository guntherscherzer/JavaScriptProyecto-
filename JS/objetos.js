class HojaPj{
    constructor(playerName, characterName,characterClass,characterRace,background,alignment,str,dex,con,int,wis,cha,inventory){
        this.playerName=playerName || "";
        this.characterName=characterName || "";
        this.characterClass= characterClass || new CharacterClass();
        this.characterRace= characterRace || new CharacterRace();
        this.background=background || "";
        this.alignment=alignment || "";
        this.exp=0;
        this.lvl=1;
        this.proficiencieBonus=2;
        this.str=str || 0;
        this.strMod=Math.floor((this.str-10)/2);
        this.dex=dex || 0;
        this.dexMod=Math.floor((this.dex-10)/2);
        this.con=con || 0;
        this.conMod=Math.floor((this.con-10)/2);
        this.int=int || 0;
        this.intMod=Math.floor((this.con-10)/2);
        this.wis=wis || 0;
        this.wisMod=Math.floor((this.wis-10)/2);
        this.cha=cha || 0;
        this.chaMod=Math.floor((this.cha-10)/2);
        this.savingThrows= {
            str:{prof:false,value:this.strMod},
            dex:{prof:false,value:this.dexMod},
            con:{prof:false,value:this.conMod},
            int:{prof:false,value:this.intMod},
            wis:{prof:false,value:this.wisMod},
            cha:{prof:false,value:this.chaMod}
        }
        this.skills = {
            acrobatics:{prof:false,value:this.dexMod,attr:"dex"},
            animal_handling:{prof:false,value:this.wisMod,attr:"wis"},
            arcana :{prof:false,value:this.intMod,attr:"int"},
            athletics :{prof:false,value:this.strMod,attr:"str"},
            deception :{prof:false,value:this.chaMod,attr:"cha"},
            history :{prof:false,value:this.intMod,attr:"int"},
            insight :{prof:false,value:this.wisMod,attr:"wis"},
            intimidation :{prof:false,value:this.chaMod,attr:"cha"},
            investigation :{prof:false,value:this.intMod,attr:"int"},
            medicine:{prof:false,value:this.wisMod,attr:"wis"},
            nature :{prof:false,value:this.intMod,attr:"int"},
            perception :{prof:false,value:this.wisMod,attr:"wis"},
            performance :{prof:false,value:this.chaMod,attr:"cha"},
            persuasion :{prof:false,value:this.chaMod,attr:"cha"},
            religion :{prof:false,value:this.intMod,attr:"int"},
            sleight_of_hand:{prof:false,value:this.dexMod,attr:"dex"},
            stealth :{prof:false,value:this.dexMod,attr:"dex"},
            survival :{prof:false,value:this.wisMod,attr:"wis"}
        }
        this.successes=0;
        this.failures=0;
        this.inventory= inventory || new Inventory();
    
        this.characterClass.calcHP(true,0,this.conMod);
    }
    
    calcMod(){
        this.strMod=Math.floor((this.str-10)/2);
        this.savingThrows.str.value=(this.savingThrows.str.prof) ? Number(this.strMod)+Number(this.proficiencieBonus) : this.strMod;
        this.dexMod=Math.floor((this.dex-10)/2);
        this.savingThrows.dex.value=(this.savingThrows.dex.prof) ? Number(this.dexMod)+Number(this.proficiencieBonus) : this.dexMod;
        this.conMod=Math.floor((this.con-10)/2);
        this.savingThrows.con.value=(this.savingThrows.con.prof) ? Number(this.conMod)+Number(this.proficiencieBonus) : this.conMod;
        this.intMod=Math.floor((this.int-10)/2);
        this.savingThrows.int.value=(this.savingThrows.int.prof) ? Number(this.intMod)+Number(this.proficiencieBonus) : this.intMod;
        this.wisMod=Math.floor((this.wis-10)/2);
        this.savingThrows.wis.value=(this.savingThrows.wis.prof) ? Number(this.wisMod)+Number(this.proficiencieBonus) : this.wisMod;
        this.chaMod=Math.floor((this.cha-10)/2);
        this.savingThrows.cha.value=(this.savingThrows.cha.prof) ? Number(this.chaMod)+Number(this.proficiencieBonus) : this.chaMod;

        Object.keys(this.skills).forEach(skill=>{
            this.skills[skill].value = (this.skills[skill].prof) ? Number(this[`${this.skills[skill].attr}Mod`]) + Number(this.proficiencieBonus) : Number(this[`${this.skills[skill].attr}Mod`]);
        })
    }

    calSuccFail(diceRoll){
        if (diceRoll<=10) {
            this.failures++;
        }else {
            this.successes++;
        }
        if (this.failures==3) {
            this.failures=0
            alert("Estas muerto");
        }else{
            alert(`Te quedan ${3-this.failures} fallos`);
        }
        if (this.successes==3) {
            this.successes=0
            alert("te haz levantado");
        }else{
            alert(`te faltan ${3-this.successes} para sobrevivir`);
        }   
    }
    calcProfBonByLvl(){
        switch (Number(this.lvl)) {
            case 1:
                this.proficiencieBonus= "+2"
                this.exp=0
                break;
             case 2:
                this.proficiencieBonus= "+2"
                this.exp=300
                break;
            case 3:
                this.proficiencieBonus= "+2"
                this.exp=900
                break;
            case 4:
                this.proficiencieBonus= "+2"
                this.exp=2700
                break;
            case 5:
                this.proficiencieBonus= "+3"
                this.exp=6500
                break;
            case 6:
                this.proficiencieBonus= "+3"
                this.exp=14000
                break;
            case 7:
                this.proficiencieBonus= "+3"
                this.exp=23000
                break;
            case 8:
                this.proficiencieBonus= "+3"
                this.exp=34000
                break;
            case 9:
                this.proficiencieBonus= "+4"
                this.exp=48000
                break;
            case 10:
                this.proficiencieBonus= "+4"
                this.exp=64000
                break;
            case 11:
                this.proficiencieBonus= "+4"
                this.exp=85000
                break;
            case 12:
                this.proficiencieBonus= "+4"
                this.exp=100000
                break;
            case 13:
                this.proficiencieBonus= "+5"
                this.exp=120000
                break;
            case 14:
                this.proficiencieBonus= "+5"
                this.exp=140000
                break;
            case 15:
                this.proficiencieBonus= "+5"
                this.exp=165000
                break;
            case 16:
                this.proficiencieBonus= "+5"
                this.exp=195000
                break;
            case 17:
                this.proficiencieBonus= "+6"
                this.exp=225000
                break;
            case 18:
                this.proficiencieBonus= "+6"
                this.exp=265000
                break;
            case 19:
                this.proficiencieBonus= "+6"
                this.exp=305000
                break;
            case 20:
                this.proficiencieBonus= "+6"
                this.exp=355000
                break;
            
        }
    }
    calcProfBonByExp(){
        if (this.exp<300  ) {
            this.proficiencieBonus= "+2"
            this.lvl = "1" 
        }
        else if (this.exp<900 && this.exp>=300 ) {
            this.proficiencieBonus= "+2"
            this.lvl = "2" 
        }
        else if (this.exp<2700 && this.exp>=900 ) {
            this.proficiencieBonus= "+2"
            this.lvl = "3" 
        }
        else if (this.exp<6500 && this.exp>=2700  ) {
            this.proficiencieBonus= "+2"
            this.lvl = "4" 
        }
        else if (this.exp<14000 && this.exp>=6500  ) {
            this.proficiencieBonus= "+3"
            this.lvl = "5" 
        }
        else if (this.exp<23000 && this.exp>=14000  ) {
            this.proficiencieBonus= "+3"
            this.lvl = "6" 
        }
        else if (this.exp<34000 && this.exp>=23000  ) {
            this.proficiencieBonus= "+3"
            this.lvl = "7" 
        }
        else if (this.exp<48000 && this.exp>=34000 ) {
            this.proficiencieBonus= "+3"
            this.lvl = "8" 
        }
        else if (this.exp<64000 && this.exp>=48000 ) {
            this.proficiencieBonus= "+4"
            this.lvl = "9"
        }
        else if (this.exp<85000 && this.exp>=64000 ) {
            this.proficiencieBonus= "+4"
            this.lvl = "10"
        }
        else if (this.exp<100000 && this.exp>=85000 ) {
            this.proficiencieBonus= "+4"
            this.lvl = "11"
        }
        else if (this.exp<12000 && this.exp>=100000 ) {
            this.proficiencieBonus= "+5"
            this.lvl = "12"
        }
        else if (this.exp<140000 && this.exp>=120000 ) {
            this.proficiencieBonus= "+5"
            this.lvl = "13"
        }
        else if (this.exp<165000 && this.exp>=140000 ) {
            this.proficiencieBonus= "+5"
            this.lvl = "14"
        }
        else if (this.exp<195000 && this.exp>=165000 ) {
            this.proficiencieBonus= "+5"
            this.lvl = "15"
        }
        else if (this.exp<225000 && this.exp>=195000 ) {
            this.proficiencieBonus= "+5"
            this.lvl = "16"
        }
        else if (this.exp<265000 && this.exp>=225000 ) {
            this.proficiencieBonus= "+6"
            this.lvl = "17"
        }
        else if (this.exp<305000 && this.exp>=265000 ) {
            this.proficiencieBonus= "+5"
            this.lvl = "18"
        }
        else if (this.exp<355000 && this.exp>=305000 ) {
            this.proficiencieBonus= "+5"
            this.lvl = "19"
        }
        else if (this.exp>=3555000 ) {
            this.proficiencieBonus= "+5"
            this.lvl = "20"
        }
        
    }
   
}

class CharacterRace{
    constructor(raceName,str,dex,con,int,wis,cha,size,speed,features,proficiencies,langueges,subrace){
        this.raceName=raceName|| "";
        this.str=str || 0;
        this.dex=dex || 0;
        this.con=con || 0;
        this.int=int || 0;
        this.wis=wis || 0;
        this.cha=cha || 0;
        this.size=size || "";
        this.speed=speed || 0;
        this.features=features || [];
        this.proficiencies=proficiencies || [];
        this.langueges=langueges || [];
        this.subrace=subrace || "";
    }

    addFeature(feature){
        this.features.push(feature);
    }
    addProficiencie(proficiencie){
        this.proficiencies.push(proficiencie);
    }
    addLanguge(languege){
        this.langueges.push(languege);
    }
}   
 

class CharacterClass{
    constructor(className,hitDice,lvl,proficiencies,proficiencieBonus,savingThrows,features,equipment){
        this.className=className || "";
        this.hitDice=hitDice || 0;
        this.hitPoints || 0;
        this.lvl=lvl || 1;
        this.proficiencies=proficiencies || [];
        this.proficiencieBonus=proficiencieBonus || 2;
        this.savingThrows=savingThrows || [];
        this.features=features || [];
        this.equipment=equipment || [];
    }
    
    calcHP(useAvg,hitDice,con){
        if (useAvg) {
           hitDice=Math.ceil((hitDice)/2) 
        }
        if(this.lvl==1){
            
            this.hitPoints=this.hitDice+con;
        }else {
            this.hitPoints+=hitDice+con;
        }
    }
    addFeature(feature){
        this.features.push(feature);
    }
    addEquip(equip){
        this.equipment.push(equip);
    }
    addSavThr(savThr){
        this.savingThrows.push(savThr);
    }
    addProficiencie(proficiencie){
        this.proficiencies.push(proficiencie);
    }
}


class Inventory{
    constructor(equipment){
        this.coins={
            CP: 0,
            SP: 0,
            EP: 0,
            GP: 0,
            PP: 0
        };

        this.equipment=equipment || [];
        this.weight;
    }
    useCoins(piece,value){
        this.coins[piece]+=value;
    }
    addEquip(equip){
        this.equipment.push(equip);
    }
    removeEquip(equip){
        let equipKey= this.equipment.indexOf(equip);
        this.equip.splice(equipKey,1);
    }
}