

// Enter name
let userName = prompt("Enter your name:");

if (userName) {
    document.getElementById("welcomeText").textContent =
        "Welcome, " + userName + "!";
}


// Dom
document.getElementById("about").querySelector("p").textContent +=
    " and I am enrolled in IT223 Course.";



// shw tgl
document.getElementById("toggleSkills").onclick = function () {
    let skills = document.getElementById("skillsList");

    if (skills.style.display === "none") {
        skills.style.display = "block";
    } else {
        skills.style.display = "none";
    }
};



// load and display data
let projects = [
    { name: "Portfolio Website" },
    { name: "Student Management System" },
    { name: "Todo App" }
];

let projectList = document.getElementById("projectList");

projects.forEach(function(project) {
    let li = document.createElement("li");   // create element
    li.textContent = project.name;
    li.className = "project";

    projectList.appendChild(li); // append element
});



// Create and append elements 
let extraProject = document.createElement("li");
extraProject.textContent = "Interactive Resume";
extraProject.className = "project";

projectList.appendChild(extraProject);



// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("formFeedback");

    if (name === "" || email === "") {
        feedback.textContent = "Please fill in all required fields.";
    } else {
        feedback.textContent = "Message sent successfully!";
    }
});



// juqry

$(document).ready(function () {

    // click highlight
    $(".project").on("click", function () {
        $(this).toggleClass("highlight");
    });

     $(".skills").on("click", function () {
        $(this).toggleClass("highlight");
    });

    $(".educ").on("click", function () {
        $(this).toggleClass("highlight");
    });

    // search filter
    $("#searchProject").on("keyup", function () {

        let value = $(this).val().toLowerCase();

        $(".project").filter(function () {
            $(this).toggle(
                $(this).text().toLowerCase().indexOf(value) > -1
            );
        });
    });

});
