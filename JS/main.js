let playerName= prompt("ingrese su nombre");
let characterName= prompt("ingrese el nombre del personaje");
let characterClass=Number(prompt("Seleccione entre 1.Barbaro,2.Mago,3.Picaro"));
let characterRace= Number(prompt("Seleccione entre 1.Humano, 2.Elfos, 3.Enano "));
let background=Number(prompt("ingrese el trasfondo 1.Erudito, 2.criminal, 3.Soldado "));
let alignment= Number(prompt("ingrese el alineamiento entre 1.Legal Bueno, 2.Neutral, 3.Caotico Bueno"));
let attribute= prompt("ingrese los 6 valores de sus atributos separados por guion (STR-DEX-INT-...)").split("-");

let charClass;
let charRace;
let charbackground;
let charAligment;
switch (characterClass) {
    case 1:
         charClass= new CharacterClass 12, 1, [
                "Armaduras Ligeras",
                "Armaduras Medias",
                "Escudos",
                "Armas Sencillas",
                "Armas Marciales"
            ], 2,[
                "Str",
                "Con"
            ],[
                {
                    numRage: 2,
                    damageRage: 2
                }
            ], [
                ["Hacha a dos manos","Cualquier arma cuerpo a cuerpo marcial"],
                ["Dos hachas de mano", "Cualquier arma sencilla"],
                ["Un paquete de explorador y cuatro Jabalinas"]
            ]);
        break;
    case 2:
         charClass= new CharacterClass( 6, 1,[
                "Dagas",
                "Dardos",
                "Hondas",
                "Bastones",
                "Ballestas Ligeras"
            ],
         2,[
                "Int",
                "Wis"
            ],[
                {
                    trucos: 3,
                    Lvl1: 2
                }
            ],[
                ["Baston ", "Daga"],
                ["Saquito de componentes", "Canalizador Magico"],
                ["Un paquete de erudito","Paquete de explorador" ],
                ["libro de conjuros"]
            ]);
        break;
    case 3:
         charClass= new CharacterClass(: 8,
            : 1,
            : [
                "Armaduras Ligeras",
                "Ballestas de mano",
                "Espadas cortas",
                "Armas Sencillas",
                "Espadas Largas",
                "Estoques",
                "Herramientas de ladron"
            ],
            : 2,
            :[
                "Dex",
                "Int"
            ],
            :[
                {
                    sneakAttackDamage: "1d6"
                }
            ],
            : [
                ["Estoque","Espada Corta"],
                ["Arco Corto y 20 flechas", "Espada corta"],
                ["Un paquete de Ladron", "Paquete de explorador", "Paquete de explorador de mazmorras"],
                ["Armadura de cuero, dos dagas y herramientas de ladron"]
            ]);
        break;
}
switch (characterRace) {
    case 1:
        charRace= new CharacterRace(...human);
        break;
    case 2:
        charRace= new CharacterRace(...elve);
        break;
    case 3:
        charRace= new CharacterRace(...dwarf);
        break;
}
switch (background) {
    case 1:
         charbackground= "erudito";
        break;
    case 2:
         charbackground= "criminal";
        break;
    case 3:
         charbackground= "soldado";
        break;
}
switch (alignment) {
    case 1:
         charAligment= "Legal Bueno";
        break;
    case 2:
         charAligment= "Neutral";
        break;
    case 3:
         charAligment= "Caotico Bueno";
        break;
}
const inventario= new Inventory();
const MiPersonaje= new HojaPj(playerName, characterName,charClass,charRace,charbackground,charAligment,attribute[0],attribute[1],attribute[2],attribute[3],attribute[4],attribute[5],inventario)
console.log(MiPersonaje);
// let picaro = new CharacterClass( 8,1,[
//         "Armaduras Ligeras",
//         "Ballestas de mano",
//         "Espadas cortas",
//         "Armas Sencillas",
//         "Espadas Largas",
//         "Estoques",
//         "Herramientas de ladron"
//     ],2,[
//         "Dex",
//         "Int"
//     ],[
//         {
//             sneakAttackDamage: "1d6"
//         }
//     ],[
//         ["Estoque","Espada Corta"],
//         ["Arco Corto y 20 flechas", "Espada corta"],
//         ["Un paquete de Ladron", "Paquete de explorador", "Paquete de explorador de mazmorras"],
//         ["Armadura de cuero, dos dagas y herramientas de ladron"]
//     ]);
// let elfo = new CharacterRace( 0, 2, 0, 0, 0, 0, "Mediano", 30,["Vision en la oscuridad", "Sentidos Agudos","linaje Feerico","Trance"],[],["Comun","Elfo"]);
// let inventario= new Inventory();
// const MiPersonaje= new HojaPj("facu", "garret",picaro,elfo,"criminal","neutral",8,16,14,12,10,14,inventario);
// console.log(MiPersonaje);