// 1. Створити сторінку, що показує нумерований список пісень:
const playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    },
    {
        author: "OLEG MARCHENKO",
        song: "FRONT END DEVELOPER COURSE"
    }
];

const songsList = document.querySelector(".songs-container");

function createPlayList(item) {

    // Створюємо єлементи
    let songItem = document.createElement("div");
    let songAuthor = document.createElement("h3");
    let songName = document.createElement("p");

    songItem.style.padding = "10px";
    songItem.style.textAlign = "center";
    // Додаємо класи
    songItem.classList.add('song__item');
    songAuthor.classList.add('song__author');
    songName.classList.add('song__name');

    // Додаємо контент
    songAuthor.textContent = item.author;
    songName.textContent = item.song;

    // Робимо верстку
    songItem.append(songAuthor, songName);
    return songItem;
}

playList.map((i) => {
    let song = createPlayList(i);
    songsList.append(song);
})



