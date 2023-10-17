import styles from './index.module.scss'
// import trash from '../../assets/images/icons8-trash-64.png'
import { useState } from 'react'
import Todoitem from '../Home/item/Todoitem'
import CreateTodoField from '../Home/CreateTodoField'

const MyTask = () => {

    const data = [
        {
            _id: '',
            title: '',
            isCompleted: false
        }
    ]

    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => {
        setTodos([...todos].filter(t => t._id !== id))
    }


    return (
        <div className={styles.myTaskContainer}>
            <div>
                <h1 className={styles.paragraphTask}>My task</h1>
            </div>
            <div>
                <hr className={styles.line}  />
            </div>
            <div>
                <CreateTodoField 
                    setTodos={setTodos}
                />
                <div className={styles.todoContainer}> 
                
                <div className={styles.todoMain}>
                    {todos.map(todo => (
                    <Todoitem 
                        key={todo._id} 
                        todo={todo} 
                        changeTodo={changeTodo} 
                        removeTodo={removeTodo} 
                    />
                    ))}
                </div>
                    
                    {/* <hr className={styles.lines}  /> */}
                </div>
            </div>
        </div>
    )
}

export default MyTask
