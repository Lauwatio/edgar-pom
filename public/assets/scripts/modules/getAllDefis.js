// Récupérer nos éléments du DOM
const enonce = document.getElementById("enonce");

export const getAllDefis = async () => {
  const defis = await fetch("../includes/handlers/getAllDefis.php");
  return defis;
};

export const renderDefis = async (joueurs) => {
  const defis = await getAllDefis();
  const randomDefis = [];

  for (let index = 0; index < 2; index++) {
    if (defis.length === 0) break;

    const randomIndex = Math.floor(Math.random() * defis.length);
    randomDefis.push(defis.splice(randomIndex, 1)[0]);
  }

  gestionPartie(randomDefis, joueurs);

  enonce.innerText = `Défi : ${randomDefis[0].defis}`;

};


// Récupérer les défis
// J'écoute l'evenement
// Afficher le défi (difficulté ?)
// Bouton Défi suivant
