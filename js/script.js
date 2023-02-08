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
    const render = () => {
        let taskObject = "";

        for (const task of tasks) {
            taskObject += `
            <ul>
                ${task.content}
            </ul>
            `;
           
        };
        document.querySelector(".form__list-js").innerHTML = taskObject 
    };

    const init = () => {
        render();
    };

    init();

};
