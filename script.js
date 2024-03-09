function fetchData() {
  fetch('https://api.tredfy.cz/mhd')
    .then(response => response.json())
    .then(apiData => {
      var spoje = apiData.message.data;

      spoje.forEach(function(spojData) {
        console.log("Linka: " + spojData[1]);
        console.log("Číslo vozu: " + spojData[0]);
        console.log("Zpoždění: " + spojData[2]);
        console.log("Poslední zastávka: " + spojData[3]);
        console.log("Konečná zastávka: " + spojData[4]);
        console.log("Směr: " + spojData[5]);
        console.log("Číslo řidiče: " + spojData[6]);
        console.log("--------------------------------");

        var kontejner = document.getElementById("obsah");
        var novyKontejner = document.createElement("div");
        novyKontejner.className = "container";

        var cisloLinky = document.createElement("div");
        cisloLinky.className = "cislo-linky";
        cisloLinky.innerHTML = "<strong>" + spojData[1] + "</strong>";
        novyKontejner.appendChild(cisloLinky);

        var obsahSpoje = document.createElement("div");
        obsahSpoje.className = "obsah-spoje";
        obsahSpoje.innerHTML = "Číslo vozu: " + spojData[0] + "<br>Zpoždění: " + spojData[2] + "<br>Poslední zastávka: " + spojData[3] + "<br>Konečná zastávka: " + spojData[4];
        novyKontejner.appendChild(obsahSpoje);

        kontejner.appendChild(novyKontejner);
      });
    })
    .catch(error => console.error('Chyba při načítání dat:', error));
}

// Spustíme fetchData při načtení stránky
fetchData();

// Nastavíme periodické obnovování každých 20 sekund
setInterval(fetchData, 20000);
