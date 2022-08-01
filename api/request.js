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

importData();