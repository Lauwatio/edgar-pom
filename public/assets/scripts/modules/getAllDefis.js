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


const suivant = (defi, defis) => {
  if (defis.length > 0) {
    const randomIndex = Math.floor(Math.random() * defis.length);
    const randomDefi = defis[randomIndex];

    defi.innerHTML = `
      <p>Défi : ${randomDefi.defis}</p>
      <button type="button" id="buttonSuit" class="button-suit">Défi Suivant</button>
    `;

    // Re-sélection du bouton fraîchement injecté
    const buttonSuit = document.getElementById("buttonSuit");
    buttonSuit?.addEventListener("click", () => {
      suivant(defi, defis); // on rappelle avec le tableau original
    });
  } else {
    defi.innerText = "Aucun défi disponible 😢";
  }
};

export const renderDefis = async () => {
  const defis = await getAllDefis();
  console.log("📦 Données reçues depuis l'API :", defis);

  suivant(defi, defis); // on démarre l'affichage
};





// Récupérer les défis
// J'écoute l'evenement
// Afficher le défi (difficulté ?)
// Bouton Défi suivant
