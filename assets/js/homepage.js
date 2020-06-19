let displayingProject = false;
document.querySelector('.projects__container').addEventListener("click", (e)=>{
    const allProjectDescriptions = document.querySelectorAll(
      ".projects__project-description"
    );
    if (
      (e.target.classList.contains("projects__project-container")) &&
      !displayingProject
    ) {
      const projectDescription = e.target.childNodes[1];
      projectDescription.classList.add(
        "projects__project-description--external-expand"
      );
      console.log("AFTER CLICK ON BOX::", projectDescription);
      displayingProject = true;
    } 
    //WORK IN PROGRESS!
    // else if((e.target.classList.contains("projects__project-title")) &&
    //     !displayingProject
    //   ){
    //         const projectDescription = e.target.parentElement;
    //         console.log("CLICK ON TITLE::", projectDescription)
    //         projectDescription.classList.add('projects__project-description--external-expand')
    //         console.log('AFTER CLICK ON TITLE::', projectDescription)
    //         displayingProject = true;
        
    // } 
    else if (
      e.target.classList.contains("projects__project-container") &&
      displayingProject
    ) {
      const projectDescription = e.target.childNodes[1];
      if (
        projectDescription.classList.contains(
          "projects__project-description--external-expand"
        )
      ) {
        projectDescription.classList.remove(
          "projects__project-description--external-expand"
        );
        displayingProject = false;
      } else {
        allProjectDescriptions.forEach((project) =>
          project.classList.remove(
            "projects__project-description--external-expand"
          )
        );
        projectDescription.classList.add(
          "projects__project-description--external-expand"
        );
        displayingProject = true;
      }
    }
})

document.querySelector(".technologies").addEventListener("click",(e)=>{
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

//clear styles on click away
document.querySelector("body").addEventListener("click", e =>{
    //for projects 
        if (!(e.target.classList.contains("projects__project-container")
            || e.target.classList.contains("projects__project-description")
        )){
          const allProjectDescriptions = document.querySelectorAll(
            ".projects__project-description"
          );  
          allProjectDescriptions.forEach((description) =>
            description.classList.remove(
              "projects__project-description--external-expand"
            )
          );
          displayingProject = false;
        }
        if (
            !(
            e.target.classList.contains("technologies__img") ||
            e.target.classList.contains("technologies__description") ||
            e.target.classList.contains("technologies__header") ||
            e.target.classList.contains("technologies__description-content") ||
            e.target.parentElement.classList.contains(
                "technologies__description-content"
            )
            )
        ) {
            //for technologies
            document.querySelectorAll(".technologies__img").forEach((img) => {
            img.classList.remove("technologies__img--inactive");
            });
            document
            .querySelectorAll(".technologies__description")
            .forEach((technology) => {
                technology.classList.remove("technologies__description--active");
            });
        }
})