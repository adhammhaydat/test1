let formList= document.getElementById('formList')
let toDo= document.getElementById('toDo')
let submitForm= document.getElementById('submitForm')
let viewList=document.getElementById('viewList');
let tabel=document.getElementById('viewToDoList');

function ToDo(list){
this.list=list;
ToDo.all.push(this);
}
ToDo.all=[];

function render(){
  let data=JSON.parse(localStorage.getItem('userTasks'));
  if(data){
    
   ToDo.all=data;
   for (let i = 0; i <ToDo.all.length; i++) {
     
    let tr = document.createElement('tr');
    tr.setAttribute('id', i)
    tabel.appendChild(tr);
    let td = document.createElement('td')
    td.textContent = 'X'
    td.setAttribute('class', 'remove')
    tr.appendChild(td);
    let td2=document.createElement('td');
    tr.appendChild(td2);
    td2.textContent=data[i].list;
    console.log(data[i].list)
   }
  }
}
render();

function clear() {
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
}

function remove(e){
  if(e.target.textContent==='x'){
    ToDo.removeItem(e.target.parentElement.id);
    localStorage.removeItem('userTasks');
    localStorage.setItem('userTasks',JSON.stringify(ToDo));
    
  }
  render();
}




function getList(e){
  e.preventDefault();
  let task=e.target.toDo.value;
  
    
    let tr = document.createElement('tr');
    tr.setAttribute('id', i)
    tabel.appendChild(tr);
    let td = document.createElement('td')
    td.textContent = 'X'
    td.setAttribute('class', 'remove')
    tr.appendChild(td);
    let td2=document.createElement('td');
    tr.appendChild(td2);
    td2.textContent=task;
    
  new ToDo(task);
  localStorage.setItem('userTasks',JSON.stringify(ToDo.all));
 
}
formList.addEventListener('submit',getList);