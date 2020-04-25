export default function randomBitmoji(){
    let randomBitmojiNumber = Math.floor(Math.random() * 16 + 1);
    randomBitmojiNumber = randomBitmojiNumber < 10 ? "0" + randomBitmojiNumber : randomBitmojiNumber;
    const filePath = `/assets/img/random-bitmoji/${randomBitmojiNumber}.png`;
    if(document.querySelector(".h1-bitmoji")){
        document.querySelector(".h1-bitmoji").src = filePath;
    }

}


