import { Button } from "antd";
import * as Styled from "./styled";

const SearchTab = () => {
  return (
    <Styled.Search>
      <div className="container">
        <div className="search-tab">
          <div className="search-tab-title">
            <p>WELCOME TO BOLETO</p>
            <p>WHAT ARE YOU LOOKING FOR</p>
          </div>
          <div className="search-tab-area">
            <Styled.MovieSelect
              className="search-movie"
              showSearch
              placeholder="Search for movie"
            />
            <div className="search-group">
              <div className="thumb">
                <img
                  src={process.env.PUBLIC_URL + "/images/toolbar-city.png"}
                  alt="city-logo"
                />
              </div>
              <span className="title">Theater</span>
              <Styled.GroupSelect placeholder="Theater" />
            </div>
            <div className="search-group">
              <div className="thumb">
                <img
                  src={process.env.PUBLIC_URL + "/images/toolbar-date.png"}
                  alt="date-logo"
                />
              </div>
              <span className="title">Date</span>
              <Styled.GroupSelect placeholder="Date" />
            </div>
            <div className="search-group">
              <div className="thumb">
                <img
                  src={process.env.PUBLIC_URL + "/images/toolbar-cinema.png"}
                  alt="cinema-logo"
                />
              </div>
              <span className="title">Premiere</span>
              <Styled.GroupSelect placeholder="Cinema" />
            </div>
          </div>
          <div className="btn-container">
            <Button>Buy Ticket Now</Button>
          </div>
        </div>
      </div>
    </Styled.Search>
  );
};

export default SearchTab;
