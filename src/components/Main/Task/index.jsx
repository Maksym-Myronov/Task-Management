/* eslint-disable no-unused-vars */
import styles from './index.module.scss'

const Task = (props) => {
    return (
        <div className={styles.taskContaienr}>
            <div>
                <div className={styles.numberTask}>
                    <img src={props.images} alt="images" className={styles.imagesIcon} />
                    <h1>{props.number}</h1>
                </div>
                <h1>{props.description}</h1>
            </div>
        </div>
    )
}

export default Task
