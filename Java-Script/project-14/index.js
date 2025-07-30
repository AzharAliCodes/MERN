

document.getElementById('btn').addEventListener('click', () => {
    let task = document.getElementById('tasktaken')
    addtask(task.value)
    document.getElementById('tasktaken').value = ''
})


function addtask (task){
    localStorage.setItem('task',task)
    const li = document.createElement('li');
    li.setAttribute('class','task')
    li.textContent = task;
    document.getElementById('imul').appendChild(li)
}