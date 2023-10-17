import {BsCheck} from 'react-icons/bs'
import styles from '../index.module.scss'

const Check = ({isCompleted}) => {
    return (
        <div className={styles.checkContainer}>
            {isCompleted && <BsCheck className={styles.bsCheck} />}   
        </div>
    )
}

export default Check
