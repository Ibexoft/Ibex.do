// test function for getting data.
// function getFormData() {
//     let title = document.getElementsByClassName("title").innerHTML;
//     let description = document.getElementsByClassName("description").innerHTML;
    
//     titleEdit.value = title;
//     descriptionEdit.value = description;
// }



// Getting data from task and setting into modal.
let edits = document.getElementsByClassName('edit-task');
Array.from(edits).forEach((element) => {
    element.addEventListener("click", (e) => {
        tr = e.target.parentNode.parentNode.parentNode.parentNode;

        title = tr.getElementsByTagName("td")[1].innerText;
        description = tr.getElementsByTagName("td")[2].innerText;

        titleEdit.value = title;
        descriptionEdit.value = description;
    })
})



function completeTask(id) {
    let completeTask = document.getElementById(id);
    completeTask.remove();

}

