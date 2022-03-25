import React from 'react'
import styled from 'styled-components'
import { ITodo } from '../../store/models'

const StyledTask = styled.div<{ done: boolean }>`
    display: flex;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    justify-content: space-between;
    background-color: ${props => (props.done ? '#00000027' : '')};
    color: #04395e;

    p {
        color: ${props => (props.done ? '#00000050' : 'initial')};
    }

    &:hover {
        background-color: #04395e3d;
    }
`
const ActionBtn = styled.div`
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        background-color: #04395e3d;
        border-radius: 5px;
    }
`

interface TaskProps {
    todo: ITodo
}

const TodoElement: React.FC<TaskProps> = ({ todo }) => {
    return (
        <StyledTask done={todo.done}>
            <p>{todo.title}</p>
            <ActionBtn>
                {!todo.done ? (
                    <span aria-label="done" role="img" onClick={() => todo.toggleTodo()}>
                        ✔️
                    </span>
                ) : (
                    <span aria-label="delete" role="img" onClick={() => todo.toggleTodo()}>
                        ❌
                    </span>
                )}
            </ActionBtn>
        </StyledTask>
    )
}

export default TodoElement