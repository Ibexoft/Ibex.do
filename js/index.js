let today = [{
    id: 3,
    title: "Lorem1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}, {
    id: 1,
    title: "Lorem2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}, {
    id: 4,
    title: "Lorem3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}]

let upcoming = [{
    id: 7,
    title: "Lorem1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}, {
    id: 9,
    title: "Lorem2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}, {
    id: 8,
    title: "Lorem3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}]

let project1 = [{
    id: 10,
    title: "Lorem1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}, {
    id: 12,
    title: "Lorem2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}, {
    id: 11,
    title: "Lorem3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}]

let project2 = [{
    id: 13,
    title: "Lorem1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}, {
    id: 15,
    title: "Lorem2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}, {
    id: 14,
    title: "Lorem3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}]

let project3 = [{
    id: 16,
    title: "Lorem1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}, {
    id: 18,
    title: "Lorem2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}, {
    id: 17,
    title: "Lorem3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
}]


let projectList = {
    "today": today,
    "upcoming": upcoming,
    "project1": project1,
    "project2": project2,
    "project3": project3
}

let projectList1 = {
    "project1": project1,
    "project2": project2,
    "project3": project3
}

let currentView;


function removeTask(id) {
    const index = projectList[currentView].findIndex(task => task.id === id);
    projectList[currentView].splice(index, 1);
}

function completeTask(id) {
    removeTask(id);
    showProject(currentView);
}

function editTask(id) {
    let tr = document.getElementById(id).parentNode.parentNode.parentNode;;
    title = tr.getElementsByTagName("td")[2].innerText;
    description = tr.getElementsByTagName("td")[3].innerText;

    titleEdit.value = title;
    descriptionEdit.value = description;
}

function showProject(listId) {
    currentView = listId;
    let tableData = "";
    for (let i = 0; i < projectList[currentView].length; i++) {
        tableData += "<tr>";
        tableData += "<td>" +
            "<button class='btn edit-btn' onclick='completeTask(" + projectList[currentView][i].id + ")'>" +
            "<svg xmlns='http://www.w3.org/2000/svg'width='20' height='20'" +
            "fill='currentColor' class='bi bi-check2-square' viewBox='0 0 16 16'>" +
            "<path d='M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z'/>" +
            "<path d='m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z'/>" +
            "</svg>" +
            "</button>" +
            "</td>";
        tableData += "<td class='sno'>" + projectList[currentView][i].id + "</td>";
        tableData += "<td class='title'>" + projectList[currentView][i].title + "</td>";
        tableData += "<td class='description'>" + projectList[currentView][i].description + "</td>";
        tableData += "<td>" +
            "<div>" +
            "<button type='button' id='" + projectList[currentView][i].id + "' class='btn p edit-task' onclick='editTask(id)' data-bs-toggle='modal' data-bs-target='#editModal'><i class='bi bi-pencil-square'></i></button>" +
            "<button type='button' class='btn p'><i class='bi bi-calendar'></i></button>" +
            "<button type='button' class='btn p'><i class='bi bi-chat-left-text'></i></button>" +
            "<button type='button' class='btn p' data-bs-toggle='modal' data-bs-target='#deleteTaskModal'><i class='bi bi-trash'></i></button>" +
            "</div>" +
            "</td >";
        tableData += "</tr>";
    }
    document.getElementById("box").innerHTML = tableData;

}


function showProjectList() {
    projectListArray = Object.keys(projectList1);
    let projects = "";
    for (let i = 0; i < projectListArray.length; i++) {
        projects += "<li class='list-unstyled px-3'>" +
            "<div class='d-flex justify-content-center align-items-center'>" +
            "<a href='#' class='list-group-item list-group-item-action' id='" + projectListArray[i] + "'onclick='showProject(" + 'id' + ")'>" + projectListArray[i] + "</a>" +
            "<div class='dropdown'>" +
            "<button class='btn dropdown-toggle' type='button' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'></button>" +
            "<ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>" +
            "<li>";

        projects += "<li>" +
            "<a class='dropdown-item' href='#'>" +
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-pencil-square' viewBox='0 0 16 16'>" +
            "<path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />" +
            "<path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z' />" +
            "</svg>" +
            "<span> Edit project</span>" +
            "</a>" +
            "</li>";
        projects += "<li>" +
            "<a class='dropdown-item' href='#'>" +
            "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash' viewBox='0 0 16 16'>" +
            "<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />" +
            "<path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/>" +
            "</svg>" +
            "<span> Delete project</span>" +
            "</a>" +
            "</li>";
        projects += "</ul>" +
            "</div>" +
            "</div>" +
            "</li>";
    }
    document.getElementById("projects").innerHTML = projects;
}







