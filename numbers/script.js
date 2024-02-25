const baseURL = "http://numbersapi.com";

async function favNumber() {
    let res = await $.getJSON(`${baseURL}/7?json`);
    $("body").append(res.text);
    $("body").append($("<br>"));
}
favNumber();

async function favNumbers() {
    numbers = [5, 8, 9];
    let res = await $.getJSON(`${baseURL}/${numbers}?json`);
    $("body").append(res[5]);
    $("body").append($("<br>"));
    $("body").append(res[8]);
    $("body").append($("<br>"));
    $("body").append(res[9]);
    $("body").append($("<br>"));
}
favNumbers();

async function numFacts() {
    let res = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/21?json`))
    );
    res.forEach((res) => {
        $("body").append(`<p>${res.text}</p>`);
        $("body").append($("<br>"));
    });
}
numFacts();
