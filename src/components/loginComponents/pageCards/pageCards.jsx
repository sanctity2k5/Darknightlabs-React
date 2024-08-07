import writeUpBg from "../../../assets/images/login-images/write-up-bg.png";
import hrVector from "../../../assets/images/login-images/hr-vector.png";
import dashboardBtn from "../../../assets/images/login-images/dashboard-btn.png";
import PropTypes from 'prop-types';

function PageCards({ bgMarginTop, contentMarginTop, title, content }) {
  return (
    <div className="">
      <img
        src={writeUpBg}
        alt="write-up-bg"
        className={`${bgMarginTop} absolute w-[709px] h-[405px]`}
      />
      <div className="flex flex-col ml-[88px] gap-6">
        <div className={`${contentMarginTop} flex`}>
          <h1 className="relative text-[#F5EFDB] text-[64px] z-10 font-medieval">
            {title}
          </h1>
          <img
            src={hrVector}
            alt="write-up-bg"
            className="absolute mt-[80px]"
          />
        </div>
        <h1 className="relative z-10 text-white text-[16px] w-[577px] font-medieval">
         {content}
        </h1>
        <button>
          <img
            src={dashboardBtn}
            alt="dashboard-btn"
            className="relative z-10 w-[181px] h-[43px]"
          />
        </button>
      </div>
    </div>
  );
}

PageCards.propTypes = {
    bgMarginTop: PropTypes.string,
    contentMarginTop: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }

export default PageCards;
