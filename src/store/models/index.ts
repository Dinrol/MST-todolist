import { Instance, types } from "mobx-state-tree";
import { inputValue } from "../MstStrore";

export const Todo = types
    .model({
        id: types.number,
        title: types.string,
        done: types.boolean
    })
    .actions(self => ({
        toggleTodo() {
            self.done = !self.done
        }
    }))

export const TodoList = types
    .model({
        todosList: types.optional(types.array(Todo), [])
    })
    .actions(self => ({
        addTodo() {
            if (inputValue.value.trim().length > 0) {
                self.todosList.push({
                    done: false,
                    id: self.todosList.length + 1,
                    title: inputValue.value
                })
                inputValue.setValue('')
            }
        },
    }))
    .views(self => ({
        get activeTodos() {
            return self.todosList.filter(todo => !todo.done).length
        },
        get filteredTodos() {
            if (inputValue.value.length) {
                return self.todosList.filter(todo => {
                    return todo.title.toLowerCase().includes(inputValue.value.toLowerCase())
                })
            } else {
                return self.todosList
            }
        }
    }))

export const InputValue = types
    .model({
        value: types.string
    })
    .actions(self => ({
        setValue(newValue: string) {
            self.value = newValue
        }
    }))

export interface ITodo extends Instance<typeof Todo> { }
export interface ITodoList extends Instance<typeof TodoList> { }
export interface IInputValue extends Instance<typeof InputValue> { }
