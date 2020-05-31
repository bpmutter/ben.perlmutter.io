document.getElementsByClassName("technologies")[0].addEventListener("click",
    (e)=>{
        if (e.target.classList.contains("technologies__img")){

            e.target.classList.remove("technologies__img--inactive");
            const id = e.target.id;
            document.querySelectorAll(".technologies__img").forEach(img =>{
                if (img.id !== id){
                    img.classList.add("technologies__img--inactive");
                }
            })
            const type = id.split("__")[1];
            document.querySelectorAll(".technologies__description").forEach(technology =>{
                technology.classList.remove("technologies__description--active");
            })
            document.getElementById(`${type}-description`).classList.add("technologies__description--active");
            
        }
    });