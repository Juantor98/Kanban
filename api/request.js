const API_URL = "https://my-json-server.typicode.com/Juantor98/Kanban"

const importData = () => {
    axios.get(API_URL+'/task')
    .then(res => {
        // console.log(res.data);
        
        res.data.forEach(element => {
            document.querySelector('#'+element.state).insertAdjacentHTML('beforeend',
                '<article class="notification" style="background-color: rgba(36, 156, 204, 0.863);">'+
                    '<h3 class="has-text-left" style="height: 20px;">'+ '<strong>Tarea: </strong>'+ element.title + '</h3>'+
                    '<h1 class="has-text-left" style="height: 20px;">'+ '<strong>Descripción: </strong>' + element.details + '</h1>'+
                    '<br>'+
                    '<h1 class="has-text-left" style="height: 20px;">'+ '<strong>Responsable: </strong>' + element.person + '</h1>'+
                    '<h1 class="has-text-left" style="height: 20px;">'+ '<strong>Fecha límite: </strong>' + element.deadline + '</h1>'+
                '</article>');
        });
  });
};



// const showAllTasks = (data) => {
//     data.map((task) => addNewTask(task))
// }


// const addNewTask = (task) => {
//     document.getElementById("todoTasks").insertAdjacentHTML('beforeend',
//         '<article class="notification" style="background-color: rgba(36, 156, 204, 0.863);">'+
//             '<h3 class="has-text-left" style="height: 20px;">'+ '<strong>Tarea: </strong>'+ task.task.value + '</h3>'+
//             '<h1 class="has-text-left" style="height: 20px;">'+ '<strong>Descripción: </strong>' + description.value + '</h1>'+
//             '<br>'+
//             '<h1 class="has-text-left" style="height: 20px;">'+ '<strong>Responsable: </strong>' + user.value + '</h1>'+
//             '<h1 class="has-text-left" style="height: 20px;">'+ '<strong>Fecha límite: </strong>' + deadline.value + '</h1>'+
//         '</article>');
         
//         let columnToDoTask = document.getElementById("todoTasks");
//         let columnInProgress = document.getElementById("inProgress");
//         let columnDoneTask = document.getElementById("doneTask");

//         if(task.state === "todoTasks"){
//             columnToDoTask.appendChild()
//         }
// }

// showAllTasks();
importData();