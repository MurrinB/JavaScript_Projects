//FOOTER DATE/TIME
document.getElementById("datetime").innerHTML = Date();

//GET TASK FROM INPUT
function get_todos() {
    //CREATE AN ARRAY FROM INPUT TASKS
    var todos = new Array;
    //PULLS TASK TO MEMORY
    var todos_str = localStorage.getItem('todo');
    //MAKES TASK A JAVASCRIPT OBJECT
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }   
        return todos;  
}

//ADDS INPUTS TO TODO ARRAY
function add() {
    //CREATES VARIABLE OUT OF INPUT TASK
    var task = document.getElementById('task').value;

    var todos = get_todos();
    //ADDS NEW TASK TO END OF ARRAY
    todos.push(task);
    //CONVERTS TASK INPUT TO JSON STRING
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

//DISPLAYS TASKS ON THE SCREEN
function show() {
    //SETS TASK THAT WAS RETRIEVED AS A VARIABLE
    var todos = get_todos();

    //SETS UP TASKS INTO AN UL
    var html = '<ul>';
    //DISPLAYS TASKS IN ORDER OF INPUT
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + ' ">x</button></li>';

    };
    html += '</ul>';
    //DISPLAY TASK AS LIST
    document.getElementById('todos').innerHTML = html;

}

//DISPLAYS TASK WHEN ADD ITEM IS CLICKED
document.getElementById('add').addEventListener('click', add);
//INPUTS DISPLAY PERMANANTLY
show();

//REMOVE LIST ITEM WHEN "X" CLICKED
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}


var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
};