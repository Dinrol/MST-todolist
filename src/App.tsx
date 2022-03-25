import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import TodoElement from './components/Task/Task'
import TaskInput from './components/TaskInput/TaskInput'
import { todoList } from './store/MstStrore'

const AppWrapper = styled.div`
  width: 500px;
  margin: auto;
  margin-top: 50px;
  color: #737775;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 15px #0000001a;
  color: #FFFFFF;
`
const Header = styled.header`
  background: #04395e;  
  padding: 10px;
  border-radius: 10px 10px 0 0;
  
`

const App = () => {
    const { activeTodos, filteredTodos } = todoList

    return (
        <AppWrapper>
            <Header>
                <h1>
                    Active task: {activeTodos}
                </h1>
            </Header>
            {filteredTodos.map(todo => (
                <TodoElement key={todo.id} todo={todo} />
            ))}
            <TaskInput />
        </AppWrapper>
    )
}

export default observer(App)