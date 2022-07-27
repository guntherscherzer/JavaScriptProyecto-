class HojaPj{
    constructor(playerName, characterName,characterClass,characterRace,background,alignment,str,dex,con,int,wis,cha,inventory){
        this.playerName=playerName;
        this.characterName=characterName;
        this.characterClass= characterClass;
        this.characterRace= characterRace;
        this.background=background;
        this.alignment=alignment;
        this.exp=0;
        this.str=str;
        this.strMod=Math.floor((this.str-10)/2);
        this.dex=dex;
        this.dexMod=Math.floor((this.dex-10)/2);
        this.con=con;
        this.conMod=Math.floor((this.con-10)/2);
        this.int=int;
        this.wis=wis;
        this.wisMod=Math.floor((this.wis-10)/2);
        this.cha=cha;
        this.chaMod=Math.floor((this.cha-10)/2);
        this.successes=0;
        this.failures=0;
        this.inventory= inventory;

        this.characterClass.calcHP(true,0,this.conMod);
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
    constructor(str,dex,con,int,wis,cha,size,speed,features,proficiencies,langueges,subrace){
        this.str=str;
        this.dex=dex;
        this.con=con;
        this.int=int;
        this.wis=wis;
        this.cha=cha;
        this.size=size;
        this.speed=speed;
        this.features=features || [];
        this.proficiencies=proficiencies || [];
        this.langueges=langueges || [];
        this.subrace=subrace;
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
    constructor(hitDice,lvl,proficiencies,proficiencieBonus,savingThrows,features,equipment){
        this.hitDice=hitDice;
        this.hitPoints;
        this.lvl=lvl;
        this.proficiencies=proficiencies || [];
        this.proficiencieBonus=proficiencieBonus;
        this.savingThrows=savingThrows || [];
        this.features=features || [];
        this.equipment=equipment || [];
    }
    
    calcHP(useAvg,hitDice,con){
        if (useAvg) {
           hitDice=Math.ceil((hitDice)/2) 
        }
        if(this.lvl==1){
            console.log(this.hitDice,con);
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