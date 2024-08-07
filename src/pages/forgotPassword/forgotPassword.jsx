import FooterComponent from "../../components/loginComponents/footer/footerComponent";
import LoginNavComponent from "../../components/loginComponents/loginNavComponents/loginNavComponent";
import LoginPopup from "../../components/loginComponents/loginPop-up/loginPopup";
import PageCards from "../../components/loginComponents/pageCards/pageCards";
import styles from "./forgotPassword.module.css";
import PropTypes from "prop-types";
import bg from "../../assets/images/login-images/login-bg.png";

function ForgotPassword() {
  return (
    <div className={styles.container}>
      <LoginNavComponent />
      <div className="hidden xl:flex">
        <img src={bg} alt="bg-img" className="absolute h-[980px] z-0" />
        <div className="absolute">
          <div className="2xl:ml-[304px]">
            <PageCards
              bgMarginTop={"mt-[83px]"}
              contentMarginTop={"mt-[142px]"}
              title="WWS"
              content="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl."
            />
          </div>
          <div className="absolute -right-[550px]">
            <PageCards
              bgMarginTop={"mt-[138px]"}
              contentMarginTop={"mt-[192px]"}
              title="pOOW"
              content="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl."
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="bg-[#242623] h-[100vh] min-[390px]:h-[82vh] md:h-[84vh] min-[820px]:h-[86vh] lg:h-[88vh] px-[15px] py-[30px] xl:flex justify-center xl:items-center xl:absolute xl:bg-[#434242] xl:opacity-80 xl:left-0 xl:right-0 xl:-top-28 xl:h-[1100px] xl:z-10">
          <span className="xl:hidden">
            <LoginPopup
              pageTitle="Forgot Password"
              emailLabel="Email Address"
              buttonLabel="Continue"
              mb="mb-[30px]"
              mt="mt-[82px]"
              writeUp="We`ll send you a link to reset your account on email associated with your account"
            />
          </span>
        </div>
        <div className="hidden absolute top-[420px] left-0 right-0 bottom-0 xl:flex justify-center items-center">
          <LoginPopup
            pageTitle="Forgot Password"
            emailLabel="Email Address"
            buttonLabel="Continue"
            mb="mb-[30px]"
            mt="mt-[82px] xl:mt-0"
            writeUp="We`ll send you a link to reset your account on email associated with your account"
          />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default ForgotPassword;

LoginPopup.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  emailLabel: PropTypes.string.isRequired,
  passwordLabel: PropTypes.string.isRequired,
};
