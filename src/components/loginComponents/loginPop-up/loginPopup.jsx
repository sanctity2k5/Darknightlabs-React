import closeIcon from "../../../assets/icons/close-icon.png";
import styles from "./loginPopup.module.css";
import facebookIcon from "../../../assets/icons/facebookLogo.png";
import instagramIcon from "../../../assets/icons/instagramLogo.png";
import googleIcon from "../../../assets/icons/googleLogo.png";
import XIcon from "../../../assets/icons/XLogo.png";
import shadowFrameTop from "../../../assets/images/shadow-frame-top.png";
import shadowFrameBottom from "../../../assets/images/shadow-frame-bottom.png";
import divider from "../../../assets/images/login-images/divider.png";
import PropTypes from "prop-types";

function LoginPopup({
  pageTitle,
  emailLabel,
  passwordLabel,
  buttonLabel,
  mb,
  mt,
  writeUp,
}) {
  return (
    <div className={`${styles.loginPopupContainer} ${mt} custom-bg`}>
      <img
        src={shadowFrameTop}
        className={styles.shadowFrameTop}
        alt="top-frame-img"
      />
      <div className={styles.header}>
        <h1 className={styles.title}>{pageTitle}</h1>
        <img src={closeIcon} alt="close-icon" />
      </div>
      {writeUp ? (
        <h1 className="text-[#F5EFDB] mt-8 font-medieval font-medium w-[328px] md:w-full">
          {writeUp}
        </h1>
      ) : (
        ""
      )}
      <form className={styles.form}>
        {/* Email Address Field */}
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            {emailLabel}
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className={styles.input}
          />
        </div>

        {/* Password Field */}
        {passwordLabel ? (
          <div className={`${styles.field} mt-4`}>
            <label htmlFor="password" className={styles.label}>
              {passwordLabel}
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className={styles.input}
            />
          </div>
        ) : (
          ""
        )}

        {/* Remember Me Checkbox */}
        {passwordLabel ? (
          <div className={styles.rememberMe}>
            <span className={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="remember"
                className={styles.checkbox}
              />
              <label htmlFor="remember">Remember Me</label>
            </span>
            <a href="" className={styles.forgotPassword}>
              Forgot password?
            </a>
          </div>
        ) : (
          ""
        )}

        {/* Submit Button */}
        <button type="submit" className={styles.loginButton}>
          {buttonLabel}
        </button>
      </form>
      <div>
        <div className={styles.iconsContainer}>
          <img
            src={facebookIcon}
            className={styles.icons}
            alt="facebook-icon"
          />
          <img
            src={instagramIcon}
            className={styles.icons}
            alt="instagram-icon"
          />
          <img src={googleIcon} className={styles.icons} alt="google-icon" />
          <img src={XIcon} className={styles.icons} alt="X-icon" />
        </div>
        <span className="flex justify-center w-full h-[3px] mt-[12px]">
          <img src={divider} alt="divider" className="w-[331px] h-[4px]" />
        </span>
        <div className="flex flex-col items-center w-full mt-3">
          <h1 className={styles.cta}>New here?</h1>
          <h1
            className={`${styles.cta} ${mb} !text-[#FFDF76] text-[18px] leading-[20px] mt-3 xl:mt-0`}
          >
            Sign up for new account
          </h1>
        </div>
      </div>
      <img
        src={shadowFrameBottom}
        className="absolute w-[217px] h-[158px] xl:w-[381px] xl:h-[319px] right-2 bottom-2"
        alt="top-frame-img"
      />
    </div>
  );
}

export default LoginPopup;

LoginPopup.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  emailLabel: PropTypes.string.isRequired,
  passwordLabel: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  mb: PropTypes.string.isRequired,
  mt: PropTypes.string.isRequired,
  writeUp: PropTypes.string.isRequired,
};
