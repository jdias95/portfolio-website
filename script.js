function element(id) {
  return document.getElementById(id);
}

const linkedin = element("linkedin-img");
function hoveredLinkdin() {
  linkedin.src = "icons/hovered-linkedin.png";
}

function nonHoveredLinkdin() {
  linkedin.src = "icons/linkedin.png";
}

linkedin.addEventListener("mouseover", hoveredLinkdin);
linkedin.addEventListener("mouseout", nonHoveredLinkdin);

const github = element("github-img");
function hoveredGithub() {
  github.src = "icons/hovered-github.png";
}

function nonHoveredGithub() {
  github.src = "icons/github.png";
}

github.addEventListener("mouseover", hoveredGithub);
github.addEventListener("mouseout", nonHoveredGithub);

const projectList = [
  { id: "project1", description: "project-description1" },
  { id: "project2", description: "project-description2" },
  { id: "project3", description: "project-description3" },
  { id: "project4", description: "project-description4" },
  { id: "project5", description: "project-description5" },
  { id: "project6", description: "project-description6" },
];

const clicked = "⯆";
const unclicked = "⯈";

function showProject(project, project_description) {
  if (element(project).innerHTML.charAt(0) === unclicked) {
    element(project).innerHTML =
      clicked + element(project).innerHTML.substring(1);
    element(project_description).style.visibility = "visible";
    element(project_description).style.height = "auto";
    element(project_description).style.margin = "1rem 0";
  } else {
    element(project).innerHTML =
      unclicked + element(project).innerHTML.substring(1);
    element(project_description).style.visibility = "hidden";
    element(project_description).style.height = "0";
    element(project_description).style.margin = ".4rem";
  }
}

for (const project of projectList) {
  const element = document.getElementById(project.id);
  element.addEventListener("click", function () {
    showProject(project.id, project.description);
  });
}
