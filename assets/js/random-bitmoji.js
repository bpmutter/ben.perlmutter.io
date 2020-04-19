export default function randomBitmoji(){
    const h1Wrap = document.querySelector(".h1-wrap");
    let randomBitmojiNumber = Math.floor(Math.random() * 12 + 1);
    randomBitmojiNumber = randomBitmojiNumber < 10 ? "0" + randomBitmojiNumber : randomBitmojiNumber;
    const filePath = `/assets/img/random-bitmoji/${randomBitmojiNumber}.png`;
    if(document.querySelector(".h1-bitmoji")){
        document.querySelector(".h1-bitmoji").src = filePath;
    }else{
        const img = document.createElement("img");
        img.classList.add("h1-bitmoji");
        img.src = filePath;
        img.addEventListener("click", randomBitmoji);
        h1Wrap.prepend(img);
    }
}


