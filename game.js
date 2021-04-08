let player = document.querySelectorAll('.box button'); 
const choix = ["pierre","feuille","ciseaux"];
let scoreJoueur = document.getElementById("scorej");
let scoreOrdinateur = document.getElementById("scoreo"); 
let joueur = 0;
let ordi = 0;
let imageJ = document.querySelector('.mainJ');
let imageO = document.querySelector('.mainO');
let message = document.querySelector('.message');




//FONCTION GENERALE DU JEU 

function jeu() {

    // CHOIX DU JOUEUR
    player.forEach(element => {
        element.addEventListener('click', function(){
            let choixPlayer = this.value;
            console.log(choixPlayer);

            //CHOIX DE L'ORDINATEUR
            let ordinateur = Math.floor(Math.random () * choix.length);
            let choixOrdi = choix[ordinateur];
            console.log (choixOrdi);

            //UPDATE DES IMAGES
            imageJ.src = `images/joueur/${choixPlayer}.png`;
            imageO.src = `images/ordi/${choixOrdi}.png`;

                //INITIALISATION DES REGLES DU JEU 
                if (choixOrdi=== choixPlayer){
                    console.log("Match Nul");
                    message.innerHTML = 'Match Nul';

                    return;
                }
                
                
                //feuille

                if(choixPlayer === 'feuille'){
                    if(choixOrdi === 'ciseaux'){
                        console.log('Ordinateur gagne');
                        message.innerHTML = 'Ordinateur gagne !';
                        ordi++;
                        update();
                        return;
                    }else{
                        console.log('Vous avez gagné');
                        message.innerHTML = 'Vous avez gagné !!';
                        joueur++;
                        update();
                        return;
                    }
                }
           
                //pierre

                if(choixPlayer === 'pierre'){
                    if(choixOrdi === 'feuille'){
                        console.log('Ordinateur gagne');
                        message.innerHTML = 'Ordinateur gagne !';
                        ordi++;
                        update()
                        return;
                    }else{
                        console.log('Vous avez gagné');
                        message.innerHTML = 'Vous avez gagné !!';
                        joueur++;
                        update();
                        return;
                    }
                }

                //ciseaux

                if(choixPlayer === 'ciseaux'){
                    if(choixOrdi === 'pierre'){
                        console.log('Ordinateur gagne');
                        message.innerHTML = 'Ordinateur gagne !';
                        ordi++;
                        update();
                        return;
                    }else{
                        console.log('Vous avez gagné');
                        message.innerHTML = 'Vous avez gagné !!';
                        joueur++;
                        update();
                        return;
                    }
                }
                
            
      

        });
             
        // MAJ SCORE
        const update = ()=>{
        scoreJoueur.textContent = joueur;
        scoreOrdinateur.innerHTML = ordi;
 
        console.log("points du joueur " + joueur);
        console.log("points de l'odinateur " + ordi);
        }
    });

    


}


jeu();


//  MAJ du fichier le 08/04/2021 LEBON Robin 
