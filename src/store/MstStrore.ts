import { InputValue, TodoList } from "./models";

export const todoList = TodoList.create({
    todosList: [
        {
            done: false,
            id: 1,
            title: 'Create todo-react app'
        },
        {
            done: true,
            id: 2,
            title: 'Explore the mobx'
        },
        {
            done: false,
            id: 3,
            title: 'Create simple todo-app'
        }
    ]
})

export const inputValue = InputValue.create({
    value: ''
})