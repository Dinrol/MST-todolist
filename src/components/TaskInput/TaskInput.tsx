import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { todoList, inputValue } from '../../store/MstStrore'

const StyledInput = styled.div`
    border-radius: 5px;
    margin-top: 10px;
    background-color: #04395e;
    display: flex;
    padding: 5px;

    & * {
        border-radius: 5px;
    }

    input {
        width: 100%;
        border: none;
        padding: 5px;
        font-size: 18px;
        font-weight: 500;
        color: #04395e;
    }

    button {
        background-color: transparent;
        border: none;
        font-size: 18px;
        text-transform: uppercase;
        color: #ffffff;
        cursor: pointer;
        margin-left: 10px;
        padding: 5px;
    }   
`

const TaskInput = () => {
    const { addTodo } = todoList
    const {value, setValue} = inputValue

    return (
        <StyledInput>
            <input
                onKeyPress={(e) => e.key === 'Enter' ? addTodo() : {}}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button onClick={addTodo}>
                ADD
            </button>
        </StyledInput>
    )
}

export default observer(TaskInput)