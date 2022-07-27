const btnAddTask = document.getElementById("btnAddTask");
const btnCloseModal = document.getElementById("btnCloseModal");
const btnSaveTask = document.getElementById("btnSaveTask");
const modalTask = document.getElementById("modalTask");

let
    task = document.getElementById("task");
    description = document.getElementById("description");
    user = document.getElementById("user");
    deadline = document.getElementById("deadline");


btnAddTask.addEventListener("click", () => {
    task.value = "";
    description.value = "";
    user.value = "Seleccione";
    deadline.value = "";
    
    openModal(modalTask);
});

btnCloseModal.addEventListener("click", () => {
    closeModal(modalTask);
});

btnSaveTask.addEventListener("click", addNewTask);

function openModal(modalTask) {
    modalTask.classList.add('is-active');   
};   

function closeModal(modalTask) {
    modalTask.classList.remove('is-active');
};

function addNewTask() {
    document.getElementById("todoTasks").insertAdjacentHTML('beforeend',
        '<article class="notification" style="background-color: rgba(36, 156, 204, 0.863);">'+
            '<h3 class="has-text-left" style="height: 20px;">'+ '<strong>Tarea: </strong>'+ task.value + '</h3>'+
            '<h1 class="has-text-left" style="height: 20px;">'+ '<strong>Descripción: </strong>' + description.value + '</h1>'+
            '<br>'+
            '<h1 class="has-text-left" style="height: 20px;">'+ '<strong>Responsable: </strong>' + user.value + '</h1>'+
            '<h1 class="has-text-left" style="height: 20px;">'+ '<strong>Fecha límite: </strong>' + deadline.value + '</h1>'+
        '</article>');
        
        closeModal(modalTask);
}
