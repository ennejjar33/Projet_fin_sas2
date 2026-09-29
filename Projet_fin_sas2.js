// Projet fin sas2:


const prompt = require("prompt-sync")()


const candidats = [{
    CIN: "LC28254",
    nom: "mohamed",
    prenom: "chaaban",
    partiPolitique: "indépendant",
    age: 42,
    electeurs: ["LC5727"]
}, {
    CIN: "XX36457",
    nom: "chref",
    prenom: "elbakkali",
    partiPolitique: "PAM",
    age: 45,
    electeurs: ["lc46433", "kb4644"]
}, {
    CIN: "HH5628",
    nom: "fatima",
    prenom: "etahiri",
    partiPolitique: "RNI",
    age: 40,
    electeurs: ["lc76584", "l46346", "kb8643"]
}];

///////////////////////////// MENU principale://////////////////////////////////
function menuPrincipaleglobale() {

    let menuPrincipale;

    do {
        console.log("~~~~~~~~~~~~~ MENU principale ~~~~~~~~~~~~~")
        console.log("-1. Ajouter un candidat.")////////////// ok
        console.log("-2. Afficher la liste des candidas.") /////// ok
        console.log("-3. Voter.")   /////// ok
        console.log("-4. Modifier les information d\'un candidat.")   ///////// OK
        console.log("-5. Supprimer un candidat.") ////////////// ok
        console.log("-6. Rechercher des candidat.") ///////////////ok
        console.log("-7. Statistiques de l\'election.")
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
        menuPrincipale = prompt("Faire votre choix: ")
        switch (menuPrincipale) {
            case "1":
                menuAjoute()

                break;
            case "2":
                affichageList()
                break;

            case "3":
                voters()
                break;

            case "4":
                modifierInfoCandidat()
                break;

            case "5":
                removeCandidat()
                break;

            case "6":
                rechercheCandidat()
                break;

            case "7":
                Statistiques()
                break;

            default:
                console.log("Verfier votre choix.")
                break;
        }

    } while (menuPrincipale = 0);

}



////////////// Ajoute///////////////77

function menuAjoute() {
    let nouveauCandidat = prompt("Enter votre CIN: ").toUpperCase()

    for (let i = 0; i < candidats.length; i++) {

        if (nouveauCandidat == candidats[i].CIN) {
            console.log("La CIN déjà trouver")
            return false;
        }


    }
    if (nouveauCandidat == "0") {
        menuPrincipaleglobale()
    }
    let candidat = {}
    candidat.CIN = nouveauCandidat
    candidat.nom = prompt("Entre votre nom: ")
    candidat.prenom = prompt("Entre votre prenom: ")
    candidat.partiPolitique = prompt("Entre votre partiPolitique: ")
    candidat.age = prompt("Entre votre age: ")
    candidat.electeurs = []
    candidats.push(candidat)
    console.log(candidat)
    menuAjoute()






}




//////////// Voter////////////////////

function voters() {
    console.log("~~~~~~~~~~~~ Voter pour un candidat ~~~~~~~~~~~~~\n")


    let userVoter = prompt("Enters votre CIN: ").toUpperCase()
    for (let n = 0; n < candidats.length; n++) {
        if (userVoter == candidats[n].electeurs) {
            console.log("Vous avez déjà voté et vous n\'avez pas le droit de modifier votre vote ni de voter à nouveau")
            menuPrincipaleglobale()
            return false;

        }

    }
    for (let list = 0; list < candidats.length; list++) {

        console.log(`Candidat ${list + 1}: \nCIN: ${candidats[list].CIN}\nnom: ${candidats[list].nom}\nage: ${candidats[list].age}\nPolitique: ${candidats[list].partiPolitique}\n\n`)

    }

    let userChoix = prompt("Enter la CIN de votre choix: ").toUpperCase()
    for (let v = 0; v < candidats.length; v++) {
        if (userChoix == candidats[v].CIN) {
            candidats[v].electeurs.push(userVoter)
            console.log("Votre demande a été enregistrée.")
            menuPrincipaleglobale()
            return false;
        }
    }
    console.log("Verifie la CIN de votre choix.")
    menuPrincipaleglobale()








}
/////////// Rechercher des candidats/////////////////////


function rechercheCandidat() {
    console.log("~~~~~~~~~Rechercher des candidas~~~~~~~~\n")

    let listRechercher = prompt("Enter votre nom de candidas: ").toLowerCase()
    for (let r = 0; r < candidats.length; r++) {
        if (listRechercher == candidats[r].nom) {
            console.log(`CIN: ${candidats[r].CIN}\nnom: ${candidats[r].nom}\nprenom: ${candidats[r].prenom}\nage: ${candidats[r].age}\npartiPolitique: ${candidats[r].partiPolitique}. `)
            menuPrincipaleglobale()
            return
        }
    }
    console.log("Il n\'y a pas de candidats portant ce nom.")
    menuPrincipaleglobale()
}


/////////////////////Supprimer un candidat///////////////////////////


function removeCandidat() {
    console.log("~~~~~~~Supprimer un candidat~~~~~~~~~~\n")
    let removeCIN = prompt("Entre votre CIN: ")
    for (let s = 0; s < candidats.length; s++) {
        if (removeCIN === candidats[s].CIN) {
            candidats.splice(s, 1)
            console.log("C\'est fait.")
            menuPrincipaleglobale()

            return false;

        }
    }
    console.log("Verifie la CIN de votre choix.")
    menuPrincipaleglobale()

}

///////////////////////Modifier les informations d'un candidat///////////////////



function modifierInfoCandidat() {
    console.log("~~~~~~~~Modifier les informations des candidats~~~~~~~~~~\n")
    console.log("-1. Modifier le parti politique d'un candidat.")
    console.log("-2. Modifier l'âge d'un candidat.\n")

    let userModifier = prompt("Enter votre choix de modification: ")

    let cinModifier;



    switch (userModifier) {
        case "1":
            cinModifier = prompt("Enter votre CIN: ").toUpperCase()
            for (let m = 0; m < candidats.length; m++) {
                if (cinModifier == candidats[m].CIN) {
                    let nowPolitique = prompt("Entre nouveau parti politique: ")
                    candidats[m].partiPolitique = nowPolitique
                    console.log("C\'est fait.")
                    menuPrincipaleglobale()
                    return false;

                }

            }
            console.log("Verifie votre CIN.")
            menuPrincipaleglobale()

        case "2":
            cinModifier = prompt("Enter votre CIN: ").toUpperCase()
            for (let m = 0; m < candidats.length; m++) {
                if (cinModifier == candidats[m].CIN) {
                    let nowAge = prompt("Entre nouveau age: ")
                    candidats[m].age = nowAge
                    console.log("C\'est fait.")
                    menuPrincipaleglobale()
                    return false;
                }
            }




        default:
            console.log("Verfier votre choix.")
            menuPrincipaleglobale()
            break;
    }
}




/////////////////////Afficher la list des candidats/////////////////////////////




function affichageList() {
    console.log("~~~~~~~~Affichage la list des candidats~~~~~~~~\n")
    console.log("-1. Afficher les candidats par nombre de votes.")
    console.log("-2. filter uniquement les candidats d'un parti politique spécifique.\n")
    let affichageChoix = prompt("Enter votre choix de affichage: ")
    switch (affichageChoix) {
        case "1":
            for (let a = 0; a < candidats.length; a++) {

                for (let j = 0; j < candidats.length - 1; j++) {
                    if (candidats[a].electeurs.length > candidats[j].electeurs.length) {
                        let temp = candidats[a]
                        candidats[a] = candidats[j]
                        candidats[j] = temp
                    }

                }


            } console.table(candidats)
            menuPrincipaleglobale()
            break;



        case "2":
            let affichagePolitique = prompt("Entre le parti politique que choix: ")
            for (let p = 0; p < candidats.length; p++) {
                if (affichagePolitique == candidats[p].partiPolitique) {
                    console.table(candidats)
                }
            } console.log("La partiPolitique n\'est pas trouvé\n")


            menuPrincipaleglobale()
            break;

        case "0":
            menuPrincipaleglobale()
            break;

        default:
            console.log("Verfier votre choix.\n")
            menuPrincipaleglobale()
            break;
    }
}


////////////////////////Statistiques de l'election///////////////


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
            for (let i = 0; i < candidats.length; i++) {
                total = total + 1

            }
            console.log(`Le nombre total des candidas c\'est ${total}`)

            break;


        default:
            break;
    }
}

menuPrincipaleglobale()





