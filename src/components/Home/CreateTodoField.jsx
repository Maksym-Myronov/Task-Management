import { useState } from 'react'
import styles from '../MyTask/index.module.scss'

const CreateTodoField = ({setTodos}) => {

    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prev => [ {
            _id: new Date(),
            title,
            isCompleted: false,
            
        }, 
            ...prev
        ])
        setTitle('')
    }

    return (
        <div>
            <div className={styles.inputTodo} >
                <input 
                    type="text" 
                    placeholder='What do you need to do?' 
                    className={styles.todoAddInput} 
                    onChange={e => setTitle(e.target.value)} 
                    value={title}
                    onKeyUp={e => e.key === 'Enter' && title.trim() !== '' ? addTodo(title) : null }   
                />
                <button className={styles.addButton} onClick={() => title.trim() !== '' ? addTodo(title) : null }>Add</button>
            </div>
        </div>
    )
}

export default CreateTodoField
