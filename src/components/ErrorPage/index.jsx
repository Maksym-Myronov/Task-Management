import styles from './index.module.scss'
import images from '../../assets/images/Image.svg'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className={styles.ErrorContainer}>
            <div className={styles.errorText}>
                <p>Error 404</p>
                <h1 className={styles.errorNotification}>Hey Buddy</h1>
                <p>We can’t seem to find the page <br /> you are looking for.</p>
                <Link to="/"><button className={styles.goBackBtn}>Go home</button></Link>
            </div>
            <div>
                <img src={images} alt="images" />
            </div>
        </div>
    )
}

export default ErrorPage
