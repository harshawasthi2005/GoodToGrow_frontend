import styles from '../styles/Notification.module.css';
function Notification() {
    return (
        <>
            <div className={styles.notification}>
                <p>Welcome back, user 👋</p>
                <span className={styles.notification_progress}></span>
            </div>
        </>
    );
}

export default Notification;