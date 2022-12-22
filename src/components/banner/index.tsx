import { HomeBanner } from "./styled";

const Banner = () => {
  return (
    <HomeBanner>
      <div className="banner-bg"></div>
      <div className="banner-container">
        <div className="banner-content">
          <p className="text-large">Book your</p>
          <p className="text-large">
            tickets for <span className="movie">movie</span>
          </p>
          <p className="text-small"> 
            Safe, secure, reliable ticketing.Your ticket to live entertainment!
          </p>
        </div>
      </div>
    </HomeBanner>
  );
};

export default Banner;
