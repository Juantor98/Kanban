const btnAddTask = document.getElementById("btnAddTask");
const btnCloseModal = document.getElementById("btnCloseModal");
const modalTask = document.getElementById("modalTask");

btnAddTask.addEventListener("click", () => {
    openModal(modalTask);
});

btnCloseModal.addEventListener("click", () => {
    closeModal(modalTask);
});

function openModal(modalTask) {
    modalTask.classList.add('is-active');
}

function closeModal(modalTask) {
    modalTask.classList.remove('is-active');
}