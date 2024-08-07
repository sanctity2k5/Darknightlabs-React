import XIcon from "../../../assets/icons/XLogo.png";
import DiscordIcon from "../../../assets/icons/discordLogo.png";
import styles from "./footerComponent.module.css"

function FooterComponent() {
  return (
    <div className={styles.container}>
        <span className="flex gap-[10px]">
        <img src={XIcon} className={styles.icon} alt="X-icon" />
        <img src={DiscordIcon} className={styles.icon} alt="discord-icon" />
        </span>
        <h1 className={styles.reserved}>© All rights reserved to Darkknight Labs 2023</h1>
    </div>
  )
}

export default FooterComponent