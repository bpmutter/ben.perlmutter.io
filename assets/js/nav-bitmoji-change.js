export default function navBitmojiChange(){
    const navBitmoji = document.querySelector(".nav-bitmoji");
    document.querySelector(".site-title").addEventListener("mouseover", ()=>{
        navBitmoji.src = '/assets/img/45-bitmoji-big-smile.png'
    });
    document.querySelector(".site-title").addEventListener("mouseout", ()=>{
        navBitmoji.src = '/assets/img/01-bitmoji-neutral.png'
    });

};
