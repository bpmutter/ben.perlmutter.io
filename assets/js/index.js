import randomBitmoji from './random-bitmoji.js';
import navBitmojiChange from './nav-bitmoji-change.js';

//generate random bitmoji for H1 onload and on click
randomBitmoji();
if(document.querySelector('.h1-bitmoji')){
    document.querySelector('.h1-bitmoji').addEventListener("click", ()=>{
        randomBitmoji();
    })
}

navBitmojiChange();
