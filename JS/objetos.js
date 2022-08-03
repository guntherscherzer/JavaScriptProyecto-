class HojaPj{
    constructor(playerName, characterName,characterClass,characterRace,background,alignment,str,dex,con,int,wis,cha,inventory){
        this.playerName=playerName || "";
        this.characterName=characterName || "";
        this.characterClass= characterClass || new CharacterClass();
        this.characterRace= characterRace || new CharacterRace();
        this.background=background || "";
        this.alignment=alignment || "";
        this.exp=0;
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
        this.successes=0;
        this.failures=0;
        this.inventory= inventory || new Inventory();

        this.characterClass.calcHP(true,0,this.conMod);
    }
    
    calcMod(){
        this.strMod=Math.floor((this.str-10)/2);
        this.dexMod=Math.floor((this.dex-10)/2);
        this.conMod=Math.floor((this.con-10)/2);
        this.intMod=Math.floor((this.con-10)/2);
        this.wisMod=Math.floor((this.wis-10)/2);
        this.chaMod=Math.floor((this.cha-10)/2);
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