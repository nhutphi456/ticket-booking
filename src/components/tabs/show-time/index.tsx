import React, { useEffect } from "react";
import useShowTime from "../../../hooks/useShowTime";
import { Tabs } from "antd";
import CinemaTabs from "./show-time-cinema-tab";
import * as Styled from "./styled";
import { ITheater } from "../../../models/theater";

const ShowTime = () => {
  const { theaters } = useShowTime();

  return (
    <div className="container">
      <div style={{ padding: "20px 0" }}>
        <Styled.TheaterTabs
          defaultActiveKey="1"
          items={(theaters as any).map((theater: ITheater, key: number) => {
            return {
              label: (
                <div className="logo-container">
                  <img src={theater.logo} width={50} height={50} />
                </div>
              ),
              key: key + 1,
              children: (
                <CinemaTabs
                  cumRap={theater.cumRap}
                  maHeThongRap={theater.maHeThongRap}
                  lichChieu={theater.lichChieu}
                />
              ),
            };
          })}
          tabPosition="left"
        />
      </div>
    </div>
  );
};

export default ShowTime;
