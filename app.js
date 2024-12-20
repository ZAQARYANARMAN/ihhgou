const block = document.querySelector(".block");
const containerLivesBlock = document.querySelector(".container-lives-block");
const containerButtonsBlock = document.querySelector(".container-buttons-block");
const closeCardBlock = document.querySelector(".close-card-block");
const lives = ["./asects/image/card.jpg", "./asects/image/card.jpg", "./asects/image/card.jpg"];
let randomNum = Math.floor(Math.random() * 52);
let result = true;
let account = 0;
const pictures = [
    { unit: 2, picture: "./asects/image/cardClubs2.png" },
    { unit: 3, picture: "./asects/image/cardClubs3.png" },
    { unit: 4, picture: "./asects/image/cardClubs4.png" },
    { unit: 5, picture: "./asects/image/cardClubs5.png" },
    { unit: 6, picture: "./asects/image/cardClubs6.png" },
    { unit: 7, picture: "./asects/image/cardClubs7.png" },
    { unit: 8, picture: "./asects/image/cardClubs8.png" },
    { unit: 9, picture: "./asects/image/cardClubs9.png" },
    { unit: 10, picture: "./asects/image/cardClubs10.png" },
    { unit: 11, picture: "./asects/image/cardClubsJ.png" },
    { unit: 12, picture: "./asects/image/cardClubsQ.png" },
    { unit: 13, picture: "./asects/image/cardClubsK.png" },
    { unit: 14, picture: "./asects/image/cardClubsA.png" },
    { unit: 2, picture: "./asects/image/cardDiamonds2.png" },
    { unit: 3, picture: "./asects/image/cardDiamonds3.png" },
    { unit: 4, picture: "./asects/image/cardDiamonds4.png" },
    { unit: 5, picture: "./asects/image/cardDiamonds5.png" },
    { unit: 6, picture: "./asects/image/cardDiamonds6.png" },
    { unit: 7, picture: "./asects/image/cardDiamonds7.png" },
    { unit: 8, picture: "./asects/image/cardDiamonds8.png" },
    { unit: 9, picture: "./asects/image/cardDiamonds9.png" },
    { unit: 10, picture: "./asects/image/cardDiamonds10.png" },
    { unit: 11, picture: "./asects/image/cardDiamondsJ.png" },
    { unit: 12, picture: "./asects/image/cardDiamondsQ.png" },
    { unit: 13, picture: "./asects/image/cardDiamondsK.png" },
    { unit: 14, picture: "./asects/image/cardDiamondsA.png" },
    { unit: 2, picture: "./asects/image/cardHearts2.png" },
    { unit: 3, picture: "./asects/image/cardHearts3.png" },
    { unit: 4, picture: "./asects/image/cardHearts4.png" },
    { unit: 5, picture: "./asects/image/cardHearts5.png" },
    { unit: 6, picture: "./asects/image/cardHearts6.png" },
    { unit: 7, picture: "./asects/image/cardHearts7.png" },
    { unit: 8, picture: "./asects/image/cardHearts8.png" },
    { unit: 9, picture: "./asects/image/cardHearts9.png" },
    { unit: 10, picture: "./asects/image/cardHearts10.png" },
    { unit: 11, picture: "./asects/image/cardHeartsJ.png" },
    { unit: 12, picture: "./asects/image/cardHeartsQ.png" },
    { unit: 13, picture: "./asects/image/cardHeartsK.png" },
    { unit: 14, picture: "./asects/image/cardHeartsA.png" },
    { unit: 2, picture: "./asects/image/cardSpades2.png" },
    { unit: 3, picture: "./asects/image/cardSpades3.png" },
    { unit: 4, picture: "./asects/image/cardSpades4.png" },
    { unit: 5, picture: "./asects/image/cardSpades5.png" },
    { unit: 6, picture: "./asects/image/cardSpades6.png" },
    { unit: 7, picture: "./asects/image/cardSpades7.png" },
    { unit: 8, picture: "./asects/image/cardSpades8.png" },
    { unit: 9, picture: "./asects/image/cardSpades9.png" },
    { unit: 10, picture: "./asects/image/cardSpades10.png" },
    { unit: 11, picture: "./asects/image/cardSpadesJ.png" },
    { unit: 12, picture: "./asects/image/cardSpadesQ.png" },
    { unit: 13, picture: "./asects/image/cardSpadesK.png" },
    { unit: 14, picture: "./asects/image/cardSpadesA.png" },
]

const paintLives = () => {
    containerLivesBlock.innerHTML = "";
    lives.forEach(element => {
        console.log(element)
        containerLivesBlock.innerHTML += `
        <img src="${element}" class="container-lives-block-picture" />
        `
    })
}

const paintCard = (picture) => {
    block.innerHTML = `
       <img src="${picture}" class="block-picture" />
    `
    return randomNum
}

paintLives();
paintCard(pictures[randomNum].picture);

containerButtonsBlock.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" && result) {
        let res = true;
        let randomNumber = randomNum
        randomNum = Math.floor(Math.random() * pictures.length)
        if (event.target.innerHTML === "high" && pictures[randomNumber].unit < pictures[randomNum].unit) {
            event.target.style.backgroundColor = "green"
        }
        else if (event.target.innerHTML === "high") {
            res = false
            event.target.style.backgroundColor = "red"
        }
        else if (event.target.innerHTML === "low" && pictures[randomNumber].unit > pictures[randomNum].unit) {
            event.target.style.backgroundColor = "green"
        }
        else if (event.target.innerHTML === "low") {
            res = false;
            event.target.style.backgroundColor = "red"
        }

        pictures.slice(randomNumber, 1)
        closeCardBlock.style.backgroundImage = `url("${pictures[randomNum].picture}")`
        result = false;
        setTimeout(() => {
            paintCard(pictures[randomNum].picture)
            event.target.style.backgroundColor = "bisque";
            closeCardBlock.style.backgroundImage = "";
            result = true
            !res ? lives.shift() && paintLives() : account++
            if (lives.length === 0) {
                alert(`duq partveciq bayc duq gushakel eq ${account} angam`);
            } else if (account === 52) {
                alert("shnorhavorum em duq haxteciq")
                location.reload()
            }
        }, 1000)
    }
})