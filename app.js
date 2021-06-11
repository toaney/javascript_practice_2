// SELECTORS
let todoInput = document.querySelector(".todo-input");
let todoForm = document.querySelector(".todo-form");
let todoList = document.querySelector(".todo-list")
let addUser = document.querySelector(".add-user-button");


// LISTENERS
todoForm.addEventListener( 'click', (e) => {
  e.preventDefault();
  addTodo();
})

addUser.addEventListener( "click", (e) => {
  addNewUser(); 
});


// FUNCTIONS
const addTodo = () => {
  console.log("hello");
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-div');

  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');
  todoItem.innerText = "todo item";

  todoDiv.appendChild(todoItem)
  todoList.appendChild(todoDiv)
}

const addNewUser = () => {
 alert("add new user");

  let fetchUser = async() => {
    let response = await fetch( 'https://randomuser.me/api/' );
    let user = await response.json();
    console.log(user);
  };

  fetchUser();

}