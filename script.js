// function addItem(event){
//   event.preventDefault();
//   let text = document.getElementById("todo-input");
//   console.log(text.value);






// }



// function addItem(event) {
//   event.preventDefault();


//   let textInput = document.getElementById("todo-input");
  
//   console.log(textInput.value);


// }


document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const todoInput = document.querySelector('#todo-input');
  const todoContainer = document.querySelector('.second-container');

  // Function to create a new todo item
  function createTodoItem(text) {
    const todoItem = document.createElement('div');
    todoItem.className = 'new-todo';
    
    const checkDiv = document.createElement('div');
    checkDiv.className = 'check';
    const checkMarkDiv = document.createElement('div');
    checkMarkDiv.className = 'check-mark';
    checkDiv.appendChild(checkMarkDiv);
    
    const inputDiv = document.createElement('div');
    inputDiv.className = 'new-todo-input';
    const textNode = document.createTextNode(text);
    inputDiv.appendChild(textNode);

    todoItem.appendChild(checkDiv);
    todoItem.appendChild(inputDiv);
    
    todoItem.addEventListener('click', () => {
      checkMarkDiv.classList.toggle('checked');
      inputDiv.classList.toggle('completed');
    });

    return todoItem;
  }

  // Handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText) {
      const newTodoItem = createTodoItem(todoText);
      todoContainer.appendChild(newTodoItem);
      todoInput.value = '';
    }
  });
});

