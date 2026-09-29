const prompt = require("prompt-sync")()


const candidats = [{
    CIN: "LC28254",
    nom: "mohamed",
    prenom: "chaaban",
    partiPolitique: "PAM",
    age: 42,
    electeurs: ["lc7628", "ld83276", "fj98738"]
}, {
    CIN: "XX36457",
    nom: "chref",
    prenom: "elbakkali",
    partiPolitique: "independant",
    age: 45,
    electeurs: ["LC1234", "jh4555"]
}, {
    CIN: "HH5628",
    nom: "fatima",
    prenom: "etahiri",
    partiPolitique: "PGD",
    age: 40,
    electeurs: ["kdf655", "jf857", "df6588", "djf985"]
}];


function Statistiques() {
    console.log("~~~~~~~~~~~~~~Statistique~~~~~~~~~~~~~~~~\n")
    console.log("-1. Afficher le nombre total de candidats.")
    console.log("-2. Afficher le nombre total de votes exprimés dans toute l'élection.")
    console.log("-3. Afficher le Top 3 des candidats ayant le plus de votes.")
    console.log("-4. Afficher le nombre de candidats par parti politique.")
    let statisChoix = prompt("Entre votre choix: ")
    switch (statisChoix) {
        case "1":
            let total = 0
            for(let i=0; i<candidats.length; i++){
                total = total +1

            }
            console.log(`Le nombre total des candidas c\'est ${total}`)
            
            break;


        default:
            break;
    }
}
Statistiques()


