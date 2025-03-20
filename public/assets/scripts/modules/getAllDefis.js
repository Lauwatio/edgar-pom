
export const getAllDefis = async () => {
    const defi = await fetch("../includes/handlers/getAllDefis.php");
    const defis = await defi.json();
    return defis;
    
  };
  

  export const renderDefis = async (joueurs) => {
    const defi = await getAllDefis();
    const randomDefi = [];
  
    for (let index = 0; index < 2; index++) {
      if (defi.length === 0) break;
  
      const randomIndex = Math.floor(Math.random() * defi.length);
      randomDefi.push(defi.splice(randomIndex, 1)[0]);
    }
  
    gestionPartie(randomDefi, joueurs);
    
  
    defi.innerText = `Défi : ${randomDefi[0].defi}`;
  };