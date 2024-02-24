import { clearForm } from "./dialog";
export const projects = {
    project1:[]
};
function createProjectTab(projectName){
    const project = document.createElement("p");
    project.classList.add("nest", "projects-toggle");
    project.setAttribute("data-project-name", projectName);
    project.textContent = projectName;
    return project;
}
function createProjectContainer(projectName){
    const projectContianer = document.createElement("div");
    projectContianer.classList.add("project");
    projectContianer.setAttribute(`data-project-name`, projectName);
    return projectContianer;
}
const projectsBtn = document.querySelector(".projects-btn");
projectsBtn.addEventListener("click", () =>{
    const projectDialog = document.querySelector(".projects-dialog");
    projectDialog.showModal()
});

const submitProject = document.querySelector(".submit-project");
submitProject.addEventListener("click", () => {
    const projectName = document.getElementById("projectName").value;
    const createdProjectTab = createProjectTab(projectName);
    const projectsContainer = document.querySelector(".projects-toggle-container");
    projectsContainer.append(createdProjectTab);
    const projectDiv = createProjectContainer(projectName);
    const content = document.querySelector(".content");
    content.appendChild(projectDiv);


    clearForm("form-project");
    const projectDialog = document.querySelector(".projects-dialog");
    projectDialog.close();

    createdProjectTab.addEventListener("click", () => {
        const allProjectTabs = document.querySelectorAll("[data-project-name]");
        allProjectTabs.forEach(project =>{
            project.classList.remove("active")
        })
        const activeProjects = document.querySelectorAll(`[data-project-name=${projectName}]`);
        activeProjects.forEach(project => {
            project.classList.add("active");
        })

    })
})

