import styles from './index.module.scss'
import logo from '../../assets/images/simple-icons_task.svg'
import category from '../../assets/images/Category.svg'
import char from '../../assets/images/Chart.svg'
import edit from '../../assets/images/Edit Square.svg'
import calendar from '../../assets/images/Calendar.svg'
import email from '../../assets/images/Message.svg'
import settings from '../../assets/images/Setting.svg'
import rocket from '../../assets/images/MicrosoftTeams-image (46) 1.svg'
import cloudOne from '../../assets/images/7450343 2.svg'
import cloudTwo from '../../assets/images/7450343 3.svg'
import logout from '../../assets/images/Logout.svg'

const Main = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainBlock}>
                <div className={styles.mainTop}>
                    <div className={styles.headerLogo}>
                        <img src={logo} alt="logo" />
                        <h1>Management</h1>
                    </div>
                    <nav>
                        <ul>
                            <li className={styles.ulList}><img src={category} alt="category" />Dashboard</li>
                            <li className={styles.ulList}><img src={edit} alt="edit" />Project</li>
                            <li className={styles.ulList}><img src={char} alt="char" />My Task</li>
                            <li className={styles.ulList}><img src={calendar} alt="calendar" />Calender</li>
                            <li className={styles.ulList}><img src={email} alt="email" />Emails</li>
                            <li className={styles.ulList}><img src={settings} alt="settings" />Setting</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <hr className={styles.verticalLine} />
                </div>
            </div>
            <div className={styles.upgradeBlock}>
                <div className={styles.imagesCloud}>
                    <img src={cloudOne} alt="cloudOne" className={styles.firstCloud}/>
                    <img src={rocket} alt="rocket" />
                    <img src={cloudTwo} alt="cloudTwo" className={styles.secondCloud}/>
                </div>
                <div className={styles.upgradeText}>
                    <h1 className={styles.upgradeSubscribeText}>Want to upgrade</h1>
                    <button className={styles.upgradeButton}>Upgrade now</button>
                </div>
            </div>
            <hr className={styles.line}/>
            <div>
                <div className={styles.logoutContainer}>
                    <img src={logout} alt="logout" className={styles.logoutImages}/>
                    <h1>Logout</h1>
                </div>
            </div>
        </div>
    ) 
}

export default Main
