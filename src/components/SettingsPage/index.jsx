import styles from './index.module.scss'
import boy from '../../assets/images/boy.png'

const SettingsPage = () => {
    return (
        <div className={styles.settingsContainer}>
            <div>
                <h1 className={styles.shippingInfo}>Personal account settings</h1>
            </div>
            <div>
                <img src={boy} alt="boy" className={styles.imagesUser} />
            </div>
            <div className={styles.genderBtn}>
                <div className={styles.btnContainer}>
                    <button className={styles.takeGenderBtn}>Male</button>
                    <button className={styles.takeGenderBtn}>Female</button>
                </div>
            </div>
            <div className={styles.formData}>
                <div className={styles.inputInfo}>
                    <p>UserName</p>
                    <input type="text" placeholder="UserName" className={styles.inputBox} />
                </div>
                <div className={styles.inputInfo}>
                    <p>Email</p>
                    <input type="text" placeholder="Email"  className={styles.inputBox}  />
                </div>
                <div className={styles.inputInfo}>
                    <p>Country</p>
                    <input type="text" placeholder="Country" className={styles.inputBox} />
                </div>
                <div className={styles.inputInfo}>
                    <p>City</p>
                    <input type="text" placeholder="City" className={styles.inputBox} />
                </div>
            </div>
            <div>
                <button className={styles.saveInfo}>Save information</button>
            </div>
        </div>
    )
}

export default SettingsPage
