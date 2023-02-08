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
            <ol 
            ${task.done ? "style =\"text-decoration: line-through\"" : ""}
            >
                
                <button class="js-done">Zrobione</button>
                <button class="js-remove">Usuń</button>
                
                ${task.content}
            </ol>
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
