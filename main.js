let h1 = document.querySelector(".h1");
let container = document.querySelector(".container");
let button = document.querySelector(".button1");

async function getName() {
  try {
    let response = await fetch(`https://ipinfo.io/json`);
    let data = await response.json();
    console.log(data);

    let card = document.createElement("div");
    card.className = "card";

    let parts = data.loc.split(",");
    let kenglik = parts[0];
    let uzunlik = parts[1];
    console.log(parts);

    card.innerHTML = `  
      <p>Kenglik: ${kenglik}</p>
      <p>Uzunlik: ${uzunlik}</p>
      <p>Mamlakat: ${data.country}</p>
      <p>Shahar: ${data.city}</p>
      <p>IP Manzil: ${data.ip}</p>
      <p>Internet provayder: ${data.org}</p>
    `;
    const iframe = document.createElement("iframe");
    iframe.width = "600";
    iframe.height = "450";
    iframe.style.border = "0";
    iframe.loading = "lazy";
    iframe.allowFullscreen = "";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.src = `https://www.google.com/maps?q${kenglik}=, ${uzunlik}&output=embed`;
    document.getElementById("mapContainer").appendChild(iframe);

    container.appendChild(card);

    createMap(kenglik, uzunlik);
  } catch (error) {
    console.log(error);
  }
}
getName();
button.addEventListener("click", () => {
  container.innerHTML = "";
  document.getElementById("mapContainer").innerHTML = "";
  getName();
});
