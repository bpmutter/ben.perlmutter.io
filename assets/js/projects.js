let activeDemo = null;

document.getElementById('projects').addEventListener( 'click', e =>{
    activeDemoId = e.target.id
    activeDemo = activeDemoId.slice(0, activeDemoId.length-4);
    const myPopUp = document.querySelector('.pop-up-content');
    myPopUp.style.backgroundImage = `url(/assets/img/${activeDemo}-demo-full.gif)`;
    popUp();
});

document.addEventListener('click', e=>{
    if(activeDemo && !e.target.classList.contains('project__img')){
        closePopUp()
        activeDemo = null;
    }
})

const popUp = function () {
  // Get the modal
  const modal = document.getElementById("my-pop-up");
  modal.style.display = "block";

};
const closePopUp = function () {
  const modal = document.getElementById("my-pop-up");
  modal.style.display = "none";

};
