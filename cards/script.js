const baseURL = "https://deckofcardsapi.com/api/deck";
let deck_id;

async function getDeck() {
    let res = await $.getJSON(`${baseURL}/new/shuffle/?deck_count=1`);
    console.log(res);
    deck_id = res.deck_id;
    console.log(deck_id);
}
getDeck();

async function drawCard() {
    let res = await $.getJSON(
        `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    );
    let cardImg = res.cards[0].image;

    let randomRotation = Math.floor(Math.random() * 30) - Math.random() * 20;

    let randomX = Math.floor(Math.random() * 11);
    let randomY = Math.floor(Math.random() * 11);

    $("body").append(
        $("<img />", {
            src: cardImg,
            alt: "Image Alt Text",
            width: "200px",
            class: "card",
            style: `transform: translate(-50%, -50%) rotate(${randomRotation}deg) translate(${randomX}px, ${randomY}px);`,
        })
    );
}
