import styles from './index.module.scss'
import trash from '../../assets/images/icons8-trash-64.png'

const MyTask = () => {
    return (
        <div className={styles.myTaskContainer}>
            <div>
                <h1 className={styles.paragraphTask}>My task</h1>
            </div>
            <div>
                <hr className={styles.line}  />
            </div>
            <div>
                <div className={styles.inputTodo}>
                    <input type="text" placeholder='What do you need to do?' className={styles.todoAddInput} />
                    <button className={styles.addButton}>Add</button>
                </div>
                <div className={styles.todoContainer}> 
                    <div className={styles.todoMain}>
                            <input type="checkbox" />
                            <p className={styles.personalTodo}>Personal Work No. 2</p>
                            <img src={trash} alt="trash" className={styles.todoTrash}/>
                    </div>
                    <hr className={styles.lines}  />
                </div>
            </div>
        </div>
    )
}

export default MyTask
