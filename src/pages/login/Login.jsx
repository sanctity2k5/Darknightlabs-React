import styles from "./login.module.css";
import LoginNavComponent from "../../components/loginComponents/loginNavComponents/loginNavComponent";
import LoginPopup from "../../components/loginComponents/loginPop-up/loginPopup";
import FooterComponent from "../../components/loginComponents/footer/footerComponent";
import bg from "../../assets/images/login-images/login-bg.png";
import PageCards from "../../components/loginComponents/pageCards/pageCards";

function Login() {
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
        <div className="bg-[#242623] h-[100%] min-[400px]:h-[82vh] md:h-[84vh] min-[820px]:h-[86vh] lg:h-[88vh] px-[15px] py-[30px] xl:flex justify-center xl:items-center xl:absolute xl:bg-[#434242] xl:opacity-80 xl:left-0 xl:right-0 xl:-top-28 xl:h-[1100px] xl:z-10">
          <span className="xl:hidden">
          <LoginPopup pageTitle="Login" emailLabel="Email Address" passwordLabel="Password" buttonLabel="Login" mb="mb-[84px]" />
          </span>
        </div>
        <div className="hidden absolute top-[420px] left-0 right-0 bottom-0 xl:flex justify-center items-center">
          <LoginPopup pageTitle="Login" emailLabel="Email Address" passwordLabel="Password" buttonLabel="Login" mb="mb-[84px]" />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default Login;
