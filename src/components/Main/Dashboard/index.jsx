//import style
import styles from './index.module.scss'
import Task from '../Task'
//import img
import bell from '../../../assets/images/icons8-bell-24.png'
import boy from '../../../assets/images/boy.png'
import group from '../../../assets/images/7450343 1.svg'
import cloud from '../../../assets/images/Group 1000000843.svg'
import checkboxes from '../../../assets/images/Group 1171275858 (1).svg'
import done from '../../../assets/images/done.png'
import progress from '../../../assets/images/work-in-progress.png'

const Dashboard = () => {
    return (
        <div className={styles.dashboardContent}>
            <div className={styles.mainDash}>
                <div>
                    <h1 className={styles.nameDashboard}>Dashboard</h1>
                    <p>Hi, welcome to task management dashboard</p>
                <div>
                    <hr className={styles.line} />
                </div>
                </div>
                <div className={styles.userInfo}>
                    <div>
                        <img src={bell} alt="bell" className={styles.bellImage} />
                    </div>
                    <div className={styles.userPosition}>
                        <div>
                            <img src={boy} alt="boy" className={styles.userImg}/>
                        </div>
                        <div className={styles.infoAboutUser}>
                            <h1>UserName</h1>
                            <p>job title</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.firstBlock}>
                <div className={styles.welcomText}>
                    <div className={styles.imagesDashboard}>
                        <img src={group} alt="group" className={styles.calendarImg} />
                        <img src={cloud} alt="cloud" className={styles.asdas} />
                    </div>
                    <div className={styles.infoText}>
                        <p>Hi, Vanshika Pandey</p>
                        <h1 className={styles.titleText}>Welcome to Management</h1>
                        <p>Project activity will be updated here. Click on the name section to set <br /> your configuration.</p>
                    </div>
                </div>
            </div>
            <div className={styles.descriptionContainer}>
                <div className={styles.todayTask}>
                    <div>
                        <h1>Today task</h1>
                    </div>
                    <div className={styles.statusTask}>
                        <p className={styles.allText}>All</p>
                        <p className={styles.statusImportant}>Important</p>
                    </div>
                    <div>
                        <hr className={styles.lineTwo} />
                    </div>
                    <div className={styles.allTask}>
                        <img src={checkboxes} alt="checkboxes" className={styles.checkboxesImg}/>
                        <p className={styles.textTask}>Create a user flow of social application design</p>
                        <p className={styles.statusAll}>Approved</p>
                    </div>
                </div>
                <div>
                    <Task 
                        images={progress}
                        number="0"
                        description="Tasks In progress"
                    />
                    <Task 
                        images={done}
                        number="0"
                        description="Completed Tasks"
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
