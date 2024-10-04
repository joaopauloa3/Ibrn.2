const Events = [
    {
        title: "AQUILES PRIESTER",
        image: "url(../../assets/events/aquiles_2019.png)",
        date: "27 DE AGOSTO DE 2019"
    },
    {
        title: "WORKSHOP MUSICAL",
        image: "url(../../assets/events/workshop_musical_2021.png)",
        date: "23 DE AGOSTO DE 2021"
    },
    {
        title: "BATUKANDO",
        image: "url(../../assets/events/batukando_2024.png)",
        date: "28 DE JULHO DE 2024"
    },
    {
        title: "RECITAL DE BATERIA",
        image: "url(../../assets/events/recital_bateria_2022.png)",
        date: "17 DE OUTUBRO DE 2022"
    },
    {
        title: "WORKSHOP DE BATERIA",
        image: "url(../../assets/events/workshop_de_bateria.png)",
        date: "07 DE OUTUBRO DE 2023"
    }, 
]

const containerCards = document.querySelector(".container-cards-events")
Events.forEach(element => {
    let card = document.createElement = `
    <div class="card-event">
        <div
        style="background-image: ${element.image}; background-size: cover;"
        class="img-event"
        >
        </div>
        <div class="infos-event">
            <h2>${element.title}</h2>
            <p><i class="ph ph-calendar"></i>${element.date}</p>
        </div>
    </div>


`

    containerCards.insertAdjacentHTML('beforeend', card)
});