import Check from "./Check";
import styles from '../index.module.scss';
import { BsTrash } from 'react-icons/bs';

const Todoitem = ({ todo, changeTodo, removeTodo }) => {



    if (!todo.title) {
        return null;
    }

    return (
        <div className={styles.buttonContainer}>
            <span className={styles.checkedBlock} onClick={() => changeTodo(todo._id)}>
                <Check isCompleted={todo.isCompleted} />
                {todo.title}
            </span>
            <button onClick={() => removeTodo(todo._id)} className={styles.trashBtn}>
                <BsTrash />
            </button>
        </div>
    );
};

export default Todoitem;

