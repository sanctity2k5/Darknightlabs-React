import menuIcon from "../../../assets/icons/menu-icons.png";
import styles from "./loginNavComponent.module.css";
import { Link } from "react-router-dom";
import profileImg from "../../../assets/images/profile-img.png";
import signOutIcon from "../../../assets/icons/signOut.png";

function loginNavComponent() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <div className={styles.navTitle}>Darknight Labs</div>
        <div className="flex gap-10">
        <div className="flex items-center gap-5">
          <div className={styles.navLinks}>
          <Link to="/home" className={styles.navLink}>Home</Link>
          <Link to="/" className={styles.navLink}>Service</Link>
          <Link to="/" className={styles.navLink}>Members</Link>
          <Link to="/" className={styles.navLink}>Patners</Link>
          <Link to="/" className={styles.navLink}>About</Link>
          </div>
          <button className={styles.button}>Contact us</button>
        </div>
        <div className="hidden xl:flex items-center justify-between text-[#FFFFFF] w-[198px] h-[45px]">
          <img src={profileImg} className="w-[45px] h-[45px] rounded-[100%] border border-white" alt="profile-img" />
          <h1>Name Nameson</h1>
          <img src={signOutIcon} alt="exit-icon" />
        </div>
        </div>     
        <img src={menuIcon} alt="menu" className={styles.menuIcon} />
      </div>
    </div>
  );
}

export default loginNavComponent;
