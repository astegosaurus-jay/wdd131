const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();


const lastmodified = document.querySelector("#lastmodified")
lastmodified.innerHTML = document.lastModified


const videoGames = [
    {
        name: "Gears of War",
        brand: "xbox",
        image: "images/gow.webp",
        thought: "Gears of War was something I played a lot with my brother and friends and it helped destroy that barrier of older siblings not wanting to hang out with their younger sibling. It helped show me brotherhood and that a game could be way more than just a game"
    },

    {
        name: "Halo",
        brand: "xbox",
        image: "images/halo.webp",
        thought: "Halo really helped me through a lot of anxiety growing up, especially Halo 3 which I don't have in this photo. I don't know where I would be now without Halo, I know that may sound extreme but it really did have a huge impact on me."
    },
    {
        name: "Mass Effect",
        brand: "xbox",
        image: "images/masseffect.webp",
        thought: "Mass Effect was a huge part of I think it was my ninth grade year, it hooked me with an epic sci-fi story and awesome charcters. I didn't realize till later how much playing as Commander Sheppard really helped my confidence and showed me what it was to be a leader. "
    },
    {
        name: "Gameboy Advanced SP",
        brand: "nintendo",
        image: "images/gba.webp",
        thought: "I played so much Pokemon on this GBA. I know there are plenty of amazing games for this console but to me as a kid all that was on it was Pokemon."
    },
    {
        name: "Game Cube",
        brand: "nintendo",
        image: "images/gcn.webp",
        thought: "I did not play the Game Cube as much as other consoles we had, but I still have fond memories of playing Melee and zelda on it."
    },
    {
        name: "Super Smash Bro. Melee",
        brand: "nintendo",
        image: "images/melee.webp",
        thought: "This is easily my most played Game Cube game and it is probably not even close. I loved this game so much as a kid I remember crying when its sequel was delayed."
    },
    {
        name: "Nintendo 64",
        brand: "nintendo",
        image: "images/n64.webp",
        thought: "This was the first console I ever played and I can still remeber playing Pokemon stadium to this day, and how cool it was that you could play your Gameboy Pokemon games on your tv, that was crazy back then."
    },
    {
        name: "Nintendo DS",
        brand: "nintendo",
        image: "images/nds.webp",
        thought: "Similar to the GBA this console was primarily used for playing Pokemon games. I do remember using pictochat with my sister alot, that was really the bee's knees."
    },
    {
        name: "PlayStation 2",
        brand: "sony",
        image: "images/ps2.webp",
        thought: "I don't have pictures of the games we had, but I loved playing the Lord of the rings games and Star Wars Battlefront games on our PS2."
    },

]

createGameCard(videoGames);

const xboxLink = document.querySelector("#xbox");
xboxLink.addEventListener("click", () => {
    createGameCard(videoGames.filter(game => game.brand.includes("xbox")))
});

const nintendoLink = document.querySelector("#nintendo");
nintendoLink.addEventListener("click", () => {
    createGameCard(videoGames.filter(game => game.brand.includes("nintendo")))
});

const sonyLink = document.querySelector("#playstation");
sonyLink.addEventListener("click", () => {
    createGameCard(videoGames.filter(game => game.brand.includes("sony")))
});

const allLink = document.querySelector("#all");
allLink.addEventListener("click", () => {
    createGameCard(videoGames)
});





function createGameCard(filteredGames) {
    document.querySelector(".game").innerHTML = "";
    filteredGames.forEach(game =>{
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let img = document.createElement("img");
        let word = document.createElement("p");

        name.textContent = game.name;
        word.textContent = game.thought;

        img.setAttribute("src", game.image);
        img.setAttribute("alt", game.name);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", 350);
        img.setAttribute("height", 300);

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(word);

        document.querySelector(".game").appendChild(card);
    })
};




