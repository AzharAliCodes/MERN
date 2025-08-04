document.getElementById('btn').addEventListener('click', () => {
    let task = document.getElementById('tasktaken')
    addtask(task.value)
    document.getElementById('tasktaken').value = ''
})

let tasks = JSON.parse(localStorage.getItem('tasks')) || []
let ul = document.getElementById('imul')


function addtask (task){
    let li = document.createElement('li')
    li.className ='task'
    li.innerHTML = `
      <input type="checkbox">
      <p>${task}</p>
      <button>Delete</button>`;
    ul.appendChild(li)
    let tn = ul.getElementsByTagName('input')
   tasks.push(task)
   localStorage.setItem('tasks', JSON.stringify(tasks))
    

    ul.addEventListener('click', (e) =>{
        if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox'){
            e.target.nextElementSibling.classList.toggle('completed');
         } 
    })
}

displaytask()

function displaytask(){
    tasks.map( (task)  => {
         let ul = document.getElementById('imul')
    let li = document.createElement('li')
    li.className ='task'
    li.innerHTML = `
      <input type="checkbox">
      <p>${task}</p>
      <button>Delete</button>`;
    ul.appendChild(li)
    })
}



 ul.addEventListener('click', (e) =>{
        if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox'){
            e.target.nextElementSibling.classList.toggle('completed');
         } else if(e.target.tagName === 'BUTTON' ){
            let li = e.target.parentElement;
            let tasdl = li.querySelector('p').textContent;
            li.remove()
            tasks = tasks.filter(task => task !== tasdl);
            localStorage.setItem('tasks',JSON.stringify(tasks))
        }
    })