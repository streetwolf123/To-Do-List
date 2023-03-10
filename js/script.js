{
    let tasks = [
        {
            content: "jeść",
            done: false,
        },
        {
            content: "Spać",
            done: true,
        },
    ];

    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask,
        });
        render();
    };

    const removeTask = (tasksIndex) => {
        tasks.splice(tasksIndex, 1);
        render();

    };

    const toggleTaskDone = (tasksIndex) => {
        tasks[tasksIndex].done = !tasks[tasksIndex].done;
        render();
    };


    const render = () => {
        let taskObject = "";

        for (const task of tasks) {
            taskObject += `
            <li class="form__task form__tasks-flex ${task.done ? "form__tasks--done" : ""} "
            >
                <div class="li__buttonDone-flex li__button">
                <button class="js-done li__buttonDone">
                <i class="fa-solid fa-check button__i"></i>
                </button>
                </div>
                <div class="li__paragraph-flex">
                <p class="task-js paragraph-js"> ${task.content}</p>
                </div>
                <div class="li__buttonRemove-flex li__button">
                <button class="task-js js-remove li__buttonRemove">
                <i class="fa-sharp fa-solid fa-xmark"></i>
                </button>
                </div>
                
            </li>
            `;

        };
        
        document.querySelector(".form__list-js").innerHTML = taskObject;

        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const doneButtons = document.querySelectorAll(".js-done");
        doneButtons.forEach((donebutton, index) => {
            donebutton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });

    }




    const onFormSubmit = () => {
        const newTask = document.querySelector(".form__input-js").value.trim();

        if (newTask === "") {
            return;
        };

        for (const task of tasks) {
            if (newTask === "") {
                return;
            };

        };

        addNewTask(newTask);
    };

    const init = () => {
        render();

        const form = document.querySelector(".form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            onFormSubmit();
        });

    };

    init();

};
