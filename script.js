function element(id) {
    return document.getElementById(id);
};

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

github.addEventListener("mouseover", hoveredGithub)
github.addEventListener("mouseout", nonHoveredGithub)

const p1 = document.getElementById("project1");
const p1_clicked = "⯆" + p1.innerHTML.substring(1);
const p1_unclicked = "⯈" + p1_clicked.substring(1)

function showProject1() {
    if (element("project1").innerHTML[0] === "⯈") {
        element("project1").innerHTML = p1_clicked;
        element("project-description1").style.visibility = "visible";
        element("project-description1").style.height = "auto";
        element("project-description1").style.margin = "1rem 0";
    } else {
        element("project1").innerHTML = p1_unclicked;
        element("project-description1").style.visibility = "hidden";
        element("project-description1").style.height = "0";
        element("project-description1").style.margin = ".4rem";
    };
};

const p2 = document.getElementById("project2");
const p2_clicked = "⯆" + p2.innerHTML.substring(1);
const p2_unclicked = "⯈" + p2_clicked.substring(1);

function showProject2() {
    if (element("project2").innerHTML[0] === "⯈") {
        element("project2").innerHTML = p2_clicked;
        element("project-description2").style.visibility = "visible";
        element("project-description2").style.height = "auto";
        element("project-description2").style.margin = "1rem 0";
    } else {
        element("project2").innerHTML = p2_unclicked;
        element("project-description2").style.visibility = "hidden";
        element("project-description2").style.height = "0";
        element("project-description2").style.margin = ".4rem";
    };
};

const p3 = document.getElementById("project3");
const p3_clicked = "⯆" + p3.innerHTML.substring(1);
const p3_unclicked = "⯈" + p3_clicked.substring(1);

function showProject3() {
    if (element("project3").innerHTML[0] === "⯈") {
        element("project3").innerHTML = p3_clicked;
        element("project-description3").style.visibility = "visible";
        element("project-description3").style.height = "auto";
        element("project-description3").style.margin = "1rem 0";
    } else {
        element("project3").innerHTML = p3_unclicked;
        element("project-description3").style.visibility = "hidden";
        element("project-description3").style.height = "0";
        element("project-description3").style.margin = ".4rem";
    };
};

const p4 = document.getElementById("project4");
const p4_clicked = "⯆" + p4.innerHTML.substring(1);
const p4_unclicked = "⯈" + p4_clicked.substring(1);

function showProject4() {
    if (element("project4").innerHTML[0] === "⯈") {
        element("project4").innerHTML = p4_clicked;
        element("project-description4").style.visibility = "visible";
        element("project-description4").style.height = "auto";
        element("project-description4").style.margin = "1rem 0";
    } else {
        element("project4").innerHTML = p4_unclicked;
        element("project-description4").style.visibility = "hidden";
        element("project-description4").style.height = "0";
        element("project-description4").style.margin = ".4rem";
    };
};

const p5 = document.getElementById("project5");
const p5_clicked = "⯆" + p5.innerHTML.substring(1);
const p5_unclicked = "⯈" + p5_clicked.substring(1);

function showProject5() {
    if (element("project5").innerHTML[0] === "⯈") {
        element("project5").innerHTML = p5_clicked;
        element("project-description5").style.visibility = "visible";
        element("project-description5").style.height = "auto";
        element("project-description5").style.margin = "1rem 0";
    } else {
        element("project5").innerHTML = p5_unclicked;
        element("project-description5").style.visibility = "hidden";
        element("project-description5").style.height = "0";
        element("project-description5").style.margin = ".4rem";
    };
};

p1.addEventListener("click", showProject1);
p2.addEventListener("click", showProject2);
p3.addEventListener("click", showProject3);
p4.addEventListener("click", showProject4);
p5.addEventListener("click", showProject5);

