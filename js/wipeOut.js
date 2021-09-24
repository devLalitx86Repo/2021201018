function toggle_edu(a) {
    headers = document.getElementsByTagName("header");
    header = headers[0];
    education = document.getElementById("education");
    work = document.getElementById("work");
    project = document.getElementById("projects");
    about = document.getElementById("about");
    switch (a) {
        case 0:
            show(header);
            hide(education);
            hide(project);
            hide(work);
            hide(about);
            break;
        case 1:
            hide(header);
            show(education);
            hide(project);
            hide(work);
            hide(about);
            break;
        case 2:
            hide(header);
            hide(education);
            hide(project);
            show(work);
            hide(about);
            break;
        case 3:
            hide(header);
            hide(education);
            show(project);
            hide(work);
            hide(about);
            break;
        case 4:
            hide(header);
            hide(education);
            hide(project);
            hide(work);
            show(about);
            break;
        default:
            // code block
    }

}

function hide(e) {
    e.style.display = "none";
}

function show(e) {
    e.style.display = "block";
}