const { createApp } = Vue;

createApp({
    data() {
        return {
            newToDo: {
                text: "",
                done: false,
            },
            toDos: [],

        };
    },
    methods: {
        addToDo: function () {
            this.toDos.push({ ...this.newToDo })
            this.newToDo.text = "";
            this.newToDo.done = false;
        },
        deleteToDoItem: function (clickedIndex) {
            this.toDos.splice(clickedIndex, 1);
        },
        toggleDoneUndone: function (clickedIndex) {
            this.toDos[clickedIndex].done = !this.toDos[clickedIndex].done
        }
    }
}).mount("#app");