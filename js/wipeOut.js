function toggle_edu(a) {
    
    headers = document.getElementsByTagName("header");
    link_home = document.getElementById("link_home");
    
    header = headers[0];

    education = document.getElementById("education");
    link_education = document.getElementById("link_education");

    work = document.getElementById("work");
    link_work = document.getElementById("link_work");

    project = document.getElementById("projects");
    link_project = document.getElementById("link_project");

    about = document.getElementById("about");
    link_about = document.getElementById("link_about");

    switch (a) {
        case 0:
            show(header,link_home);
            hide(education,link_education);
            hide(project,link_project);
            hide(work,link_work);
            hide(about,link_about);
            break;
        case 1:
            hide(header,link_home);
            show(education,link_education);
            hide(project,link_project);
            hide(work,link_work);
            hide(about,link_about);
            break;
        case 2:
            hide(header,link_home);
            hide(education,link_education);
            hide(project,link_project);
            show(work,link_work);
            hide(about,link_about);
            break;
        case 3:
            hide(header,link_home);
            hide(education,link_education);
            show(project,link_project);
            hide(work,link_work);
            hide(about,link_about);
            break;
        case 4:
            hide(header,link_home);
            hide(education,link_education);
            hide(project,link_project);
            hide(work,link_work);
            show(about,link_about);
            break;
        default:
            // code block
    }

}

function hide(e,link) {
    e.style.display = "none";
    link.classList.remove("nav_active");
    
}

function show(e,link) {
    e.style.display = "block";
    // link.style.color = "red";
    link.classList.add("nav_active");
}