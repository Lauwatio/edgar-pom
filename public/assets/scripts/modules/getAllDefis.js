// Récupérer nos éléments du DOM
const defi = document.getElementById("defi");

export const getAllDefis = async () => {

  const response = await fetch("../includes/handlers/getAllDefis.php");
  const text = await response.text();
  console.log("🧾 Réponse brute du serveur :", text);
  
  try {
    const defis = JSON.parse(text);
    return defis;
  } catch (e) {
    console.error("❌ JSON mal formé :", e);
    return [];
  }
};

const buttonSuit = document.querySelector(".button-suit");

export const renderDefis = async () => {
  const defis = await getAllDefis();

  console.log("📦 Données reçues depuis l'API :", defis);

  const randomDefis = [];

    const randomIndex = Math.floor(Math.random() * defis.length);
    randomDefis.push(defis.splice(randomIndex, 1)[0]);

if (randomDefis.length > 0 && randomDefis[0]?.defis) {
  defi.innerText = `Défi : ${randomDefis[0].defis}
  <button type="button" class="button-suit">Défis Suivant</button>`
  ;
} else {
  defi.innerText = "Aucun défi disponible 😢";
}

buttonSuit?.addEventListener("click", () => {
  if (compteurQuestion < questions.length) {
    questionActuelle = questions[compteurQuestion];

    
      defi.innerHTML = `Défi : ${randomDefis[0].defis}
      <button type="button" class="button-suit">Défi Suivant</button>`;
    }
  })
  


};




// Récupérer les défis
// J'écoute l'evenement
// Afficher le défi (difficulté ?)
// Bouton Défi suivant
