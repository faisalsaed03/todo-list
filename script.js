



document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const todoInput = document.querySelector('#todo-input');
  const todoContainer = document.querySelector('.second-container');
  const itemsLeftElement = document.querySelector('.item-1 p');
  const allItems = document.querySelector(".item-2 .all");
  const activeTasks = document.querySelector(".item-2 .active");
  const completedTasks = document.querySelector(".item-2 .completed");
  const deleteCompleted = document.querySelector(".item-3 p");



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

    todoItem.append(checkDiv,inputDiv);
    
    todoItem.addEventListener('click', () => {
      checkMarkDiv.classList.toggle('checked');
      inputDiv.classList.toggle('completed');
      updateItemsLeft();
    });

    return todoItem;
  }

  // Handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText) {
      const newTodoItem = createTodoItem(todoText);
      todoContainer.prepend(newTodoItem);
      todoInput.value = '';
      updateItemsLeft(); 

    }
  });

  // Update the number of items left
  function updateItemsLeft() {
    const todos = Array.from(todoContainer.getElementsByClassName('new-todo'));
    const itemsLeftCount = todos.filter(item => !item.querySelector('.check-mark').classList.contains('checked')).length;

    let itemsLeftText;
    if (itemsLeftCount === 0) {
      itemsLeftText = 'No items left';
    } else if (itemsLeftCount === 1) {
      itemsLeftText = '1 item left';
    } else {
      itemsLeftText = `${itemsLeftCount} items left`;
    }

    itemsLeftElement.textContent = itemsLeftText;
  }







// Event listener for the "Active" button
activeTasks.addEventListener("click", () => {
  toggleActiveClass(activeTasks);
  const todos = Array.from(todoContainer.getElementsByClassName("new-todo"));
  const checkedItems = []; // Initialize checkedItems array

  todos.forEach(item => {
      const checkMark = item.querySelector(".check-mark");
      if (checkMark.classList.contains("checked")) {
          item.style.display = 'none'; // Hide checked tasks
          checkedItems.push(item); // Add checked item to the array
      } else {
          item.style.display = ''; // Show unchecked tasks
      }
  });
});



// Event listener for the "All" button
allItems.addEventListener("click", () => {

  toggleActiveClass(allItems);

  const todos = Array.from(todoContainer.getElementsByClassName("new-todo"));
  todos.forEach(item => {
      item.style.display = ""; // Display all tasks
  });
});


function toggleActiveClass(activeElement){
  allItems.classList.remove("active-blue");
  activeTasks.classList.remove("active-blue");
  completedTasks.classList.remove("active-blue");

  activeElement.classList.add("active-blue");




}

completedTasks.addEventListener("click", () => {
  toggleActiveClass(completedTasks);

  const complete = Array.from(todoContainer.getElementsByClassName("new-todo"));
  complete.forEach(item => {
    const checkMark = item.querySelector(".check-mark");
    if (checkMark.classList.contains("checked")) {
      item.style.display = ""; // Show completed tasks
    } else {
      item.style.display = "none"; // Hide non-completed tasks
    }
  });
});




deleteCompleted.addEventListener("click", ()=> {
  toggleActiveClass(deleteCompleted);
  const all = Array.from(todoContainer.getElementsByClassName("new-todo"));
  all.forEach(item => {
    const checkMark = item.querySelector(".check-mark");
    if(checkMark.classList.contains("checked")){
      item.style.display = "none";
    }


  })


})








  

  // todos.forEach(item => {
  //     const checkMark = item.querySelector(".check-mark");
  //     if (checkMark.classList.contains("checked")) {
  //         item.style.display = 'none';
  //     } else {
  //         item.style.display = '';
  //     }
  // });
});










  


  










