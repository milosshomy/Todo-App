/* Variables */

const root = document.querySelector(":root");
const themeBtn = document.querySelector(".theme-btn");
const closeIcon = document.querySelectorAll(".close-icon");
const checkbox = document.querySelector(".create-checkbox");
const checkboxes = document.querySelectorAll(
  "input[type=checkbox]:not(.create-checkbox)"
);
const checkboxArr = Array.from(checkboxes);
const textInput = document.getElementById("text-input");
const todoList = document.querySelector(".todo-list");
const todoItems = document.querySelectorAll(".todo-item");
const itemsArr = Array.from(todoItems);
const remainingItems = document.querySelector(".remaining-items");
const sortBtn = document.querySelectorAll(".sort-btn");
const sortAllBtn = document.querySelectorAll(".sort-btn")[0];
const sortActiveBtn = document.querySelectorAll(".sort-btn")[1];
const sortCompletedBtn = document.querySelectorAll(".sort-btn")[2];
const sortAllBtnMobile = document.querySelectorAll(".sort-btn")[3];
const sortActiveBtnMobile = document.querySelectorAll(".sort-btn")[4];
const sortCompletedBtnMobile = document.querySelectorAll(".sort-btn")[5];
const clearBtn = document.querySelector(".clear-btn");
let remainingTasks = todoItems.length;

/* Switching theme */

themeBtn.addEventListener("click", () => {
  root.classList.toggle("switch-theme");
});

/* Deleting task  */

closeIcon.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const parentDiv = e.target.parentElement.parentElement;
    parentDiv.style.display = "none";
    remainingTasks -= 1;
    remainingItems.textContent = remainingTasks + " items left";
  });
});

/* Adding new task */

checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    const todoItem = document.createElement("li");
    const flexContainer = document.createElement("div");
    const imageContainer = document.createElement("div");
    const closeIconImage = document.createElement("img");
    const text = document.createElement("span");
    const checkboxInput = document.createElement("input");
    const inputValue = textInput.value;
    closeIconImage.src = "../img/icon-cross.svg";
    checkboxInput.setAttribute("type", "checkbox");
    flexContainer.classList.add("d-flex");
    flexContainer.classList.add("align-items-center");
    todoItem.classList.add("todo-item");
    text.classList.add("todo-text");
    closeIconImage.classList.add("close-icon");
    todoList.appendChild(todoItem);
    todoItem.appendChild(flexContainer);
    todoItem.appendChild(imageContainer);
    imageContainer.appendChild(closeIconImage);
    flexContainer.appendChild(checkboxInput);
    flexContainer.appendChild(text);
    text.innerHTML = inputValue;
    remainingTasks += 1;
    remainingItems.textContent = remainingTasks + " items left";
    itemsArr.push(todoItem);
    checkboxArr.push(checkboxInput);

    checkboxArr.forEach((checkbox) => {
      checkbox.addEventListener("click", (e) => {
        const parentElement = e.target.parentElement.parentElement;
        if (e.target.checked) {
          parentElement.setAttribute("data-status", "completed");
        } else {
          parentElement.removeAttribute("data-status");
        }
      });
    });

    closeIconImage.addEventListener("click", (e) => {
      const parentDiv = e.target.parentElement.parentElement;
      parentDiv.style.display = "none";
      remainingTasks -= 1;
      remainingItems.textContent = remainingTasks + " items left";
    });
  } else {
    return;
  }
});

/* Sort tasks */

/* Sort all tasks */

sortAllBtn.addEventListener("click", () => {
  const allItems = itemsArr.filter((item) => {
    return item;
  });

  allItems.map((item) => {
    todoList.appendChild(item);
  });

  const deletedItems = itemsArr.filter((item) => {
    if (item.style.display === "none") {
      return item;
    } else {
      return;
    }
  });

  remainingItems.textContent =
    allItems.length - deletedItems.length + " items left";
});

/* Sort active tasks */

sortActiveBtn.addEventListener("click", () => {
  const activeItems = itemsArr.filter((item) => {
    if (item.hasAttribute("data-status")) {
      return;
    } else {
      return item;
    }
  });

  itemsArr.forEach((item) => {
    item.remove();
  });

  activeItems.map((item) => {
    todoList.appendChild(item);
  });

  const deletedItems = itemsArr.filter((item) => {
    if (item.style.display === "none") {
      return item;
    } else {
      return;
    }
  });

  remainingItems.textContent =
    activeItems.length - deletedItems.length + " items left";
});

/* Sort completed tasks */

sortCompletedBtn.addEventListener("click", (e) => {
  const completedItems = itemsArr.filter((item) => {
    if (item.hasAttribute("data-status")) {
      return item;
    } else {
      return;
    }
  });

  itemsArr.forEach((item) => {
    item.remove();
  });

  completedItems.map((completedItem) => {
    todoList.appendChild(completedItem);
  });

  remainingItems.textContent = completedItems.length + " items left";
});

/* Clear completed tasks */

clearBtn.addEventListener("click", () => {
  const completedItems = itemsArr.filter((item) => {
    if (item.hasAttribute("data-status")) {
      return item;
    } else {
      return;
    }
  });

  completedItems.map((item) => {
    item.remove();
  });

  remainingItems.textContent =
    remainingTasks - completedItems.length + " items left";
});

/* Sort all mobile tasks */

sortAllBtnMobile.addEventListener("click", () => {
  const allItems = itemsArr.filter((item) => {
    return item;
  });

  allItems.map((item) => {
    todoList.appendChild(item);
  });

  const deletedItems = itemsArr.filter((item) => {
    if (item.style.display === "none") {
      return item;
    } else {
      return;
    }
  });

  remainingItems.textContent =
    allItems.length - deletedItems.length + " items left";
});

/* Sort active mobile tasks */

sortActiveBtnMobile.addEventListener("click", () => {
  const activeItems = itemsArr.filter((item) => {
    if (item.hasAttribute("data-status")) {
      return;
    } else {
      return item;
    }
  });

  itemsArr.forEach((item) => {
    item.remove();
  });

  activeItems.map((item) => {
    todoList.appendChild(item);
  });

  const deletedItems = itemsArr.filter((item) => {
    if (item.style.display === "none") {
      return item;
    } else {
      return;
    }
  });

  remainingItems.textContent =
    activeItems.length - deletedItems.length + " items left";
});

/* Sort completed mobile tasks */

sortCompletedBtnMobile.addEventListener("click", (e) => {
  const completedItems = itemsArr.filter((item) => {
    if (item.hasAttribute("data-status")) {
      return item;
    } else {
      return;
    }
  });

  itemsArr.forEach((item) => {
    item.remove();
  });

  completedItems.map((completedItem) => {
    todoList.appendChild(completedItem);
  });

  remainingItems.textContent = completedItems.length + " items left";
});

/* Count remaining tasks */

remainingItems.textContent = remainingTasks + " items left";

/* Setting data attribute on todo item when task is completed */

checkboxArr.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const parentElement = e.target.parentElement.parentElement;
    if (e.target.checked) {
      parentElement.setAttribute("data-status", "completed");
    } else {
      parentElement.removeAttribute("data-status");
    }
  });
});

// Change style of active sort button

sortBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    sortBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

/* Drag and drop to reorder tasks */

const sortable = new Draggable.Sortable(todoList, {
  draggable: "li",
});
