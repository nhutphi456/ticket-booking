import { Button } from "antd";
import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import useSearch from "../../hooks/useSearch";
import { useAppSelector } from "../../redux/hooks";
import * as Styled from "./styled";

const SearchTab = () => {
  const {
    movieOptions,
    theaterOptions,
    dateOptions,
    premiereOptions,
    selectedMovieId,
    selectedTheater,
    selectedDate,
    selectedPremiere,
    handleMovieChange,
    handleTheaterChange,
    handleDateChange,
    handlePremiereChange,
  } = useSearch();

  const onFinish = (val: string) => {
    console.log(val);
  };

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
              options={movieOptions}
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              onChange={(val: any) => handleMovieChange(val)}
            />
            <div className="search-groups">
              <div className="search-group">
                <div className="thumb">
                  <img
                    src={process.env.PUBLIC_URL + "/images/toolbar-city.png"}
                    alt="city-logo"
                  />
                </div>
                <span className="title">Theater</span>
                <Styled.GroupSelect
                  placeholder="Theater"
                  options={theaterOptions}
                  value={selectedTheater}
                  onSelect={(val: any) => handleTheaterChange(val)}
                />
              </div>
              <div className="search-group">
                <div className="thumb">
                  <img
                    src={process.env.PUBLIC_URL + "/images/toolbar-date.png"}
                    alt="date-logo"
                  />
                </div>
                <span className="title">Date</span>
                <Styled.GroupSelect
                  placeholder="Date"
                  options={dateOptions}
                  value={selectedDate}
                  onChange={(val: any) => handleDateChange(val)}
                />
              </div>
              <div className="search-group">
                <div className="thumb">
                  <img
                    src={process.env.PUBLIC_URL + "/images/toolbar-cinema.png"}
                    alt="cinema-logo"
                  />
                </div>
                <span className="title">Premiere</span>
                <Styled.GroupSelect
                  placeholder="Cinema"
                  options={premiereOptions}
                  value={selectedPremiere}
                  onChange={(val: any) => handlePremiereChange(val)}
                />
              </div>
            </div>
          </div>
          <div className="btn-container">
            <Button
              disabled={!selectedPremiere}
              onClick={() => onFinish(selectedPremiere)}
            >
              Buy Ticket Now
            </Button>
          </div>
        </div>
      </div>
    </Styled.Search>
  );
};

export default SearchTab;
