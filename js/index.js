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



let projectList = {
    "today": today,
    "upcoming": upcoming,
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







