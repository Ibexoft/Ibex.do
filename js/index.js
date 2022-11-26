//test function for getting data.
// function getFormData() {
//     let title = document.getElementById("title").innerHTML;
//     let description = document.getElementById("description").innerHTML;

//     titleEdit.value = title;
//     descriptionEdit.value = description;
// }



// Getting data from task and setting into modal.
edits = document.getElementsByClassName('edit-task');
Array.from(edits).forEach((element) => {
    element.addEventListener("click", (e) => {
        tr = e.target.parentNode.parentNode.parentNode.parentNode;

        title = tr.getElementsByTagName("td")[0].innerText;
        description = tr.getElementsByTagName("td")[1].innerText;

        titleEdit.value = title;
        descriptionEdit.value = description;
    })
})
