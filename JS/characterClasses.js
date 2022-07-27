let barbarian = {
    hitDice: 12,
    lvl: 1,
    proficiencies: [
        "Armaduras Ligeras",
        "Armaduras Medias",
        "Escudos",
        "Armas Sencillas",
        "Armas Marciales"
    ],
    proficiencieBonus: 2,
    savingThrows:[
        "Str",
        "Con"
    ],
    features:[
        {
            numRage: 2,
            damageRage: 2
        }
    ],
    equipment: [
        ["Hacha a dos manos","Cualquier arma cuerpo a cuerpo marcial"],
        ["Dos hachas de mano", "Cualquier arma sencilla"],
        ["Un paquete de explorador y cuatro Jabalinas"]
    ]
}
let mage = {
    hitDice: 6,
    lvl: 1,
    proficiencies: [
        "Dagas",
        "Dardos",
        "Hondas",
        "Bastones",
        "Ballestas Ligeras"
    ],
    proficiencieBonus: 2,
    savingThrows:[
        "Int",
        "Wis"
    ],
    features:[
        {
            trucos: 3,
            Lvl1: 2
        }
    ],
    equipment: [
        ["Baston ", "Daga"],
        ["Saquito de componentes", "Canalizador Magico"],
        ["Un paquete de erudito","Paquete de explorador" ],
        ["libro de conjuros"]
    ]
}
let rogue = {
    hitDice: 8,
    lvl: 1,
    proficiencies: [
        "Armaduras Ligeras",
        "Ballestas de mano",
        "Espadas cortas",
        "Armas Sencillas",
        "Espadas Largas",
        "Estoques",
        "Herramientas de ladron"
    ],
    proficiencieBonus: 2,
    savingThrows:[
        "Dex",
        "Int"
    ],
    features:[
        {
            sneakAttackDamage: "1d6"
        }
    ],
    equipment: [
        ["Estoque","Espada Corta"],
        ["Arco Corto y 20 flechas", "Espada corta"],
        ["Un paquete de Ladron", "Paquete de explorador", "Paquete de explorador de mazmorras"],
        ["Armadura de cuero, dos dagas y herramientas de ladron"]
    ]
}

