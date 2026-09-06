let header = document.querySelector(".header");

// Original HTML store kar liya
let originalContent = header.innerHTML;

header.addEventListener("mouseenter", () => {
    header.style.color = "pink";
    header.style.backgroundColor = "black";
});

header.addEventListener("mouseleave", () => {
    
    // Welcome message show
    header.innerText = "Welcome Visiting";
    
    // Color and background
    header.style.color = "white";
    header.style.backgroundColor = "purple";

    // 3 seconds baad original content
    setTimeout(() => {
        header.innerHTML = originalContent;

        // Normal style
        header.style.color = "";
        header.style.backgroundColor = "";
    }, 3000);
});
let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", () => {

    // Input ki value lo
    let task = taskInput.value;

    // Naya li create karo
    let newTask = document.createElement("li");

    // Task ka text add karo
    newTask.innerText = task;

    // List me add karo
    taskList.appendChild(newTask);

    // Input empty karo
    taskInput.value = "";
});
