import React from "react";
import useMobile from "../../../hooks/useMobile";
import { IShowTimeDetail } from "../../../models/movie";
import { CustomTabs } from "../styled";
import ShowtimeDetailDateTab from "./show-time-detail-date-tab";

interface Props {
  showTimes: any;
}
const ShowTimeDetailTab = ({ showTimes }: Props) => {
  const isMobile = useMobile();
  return (
    <CustomTabs
      defaultActiveKey="1"
      tabPosition={!isMobile ? "left" : "top"}
      items={showTimes.map((st: any, key: number) => {
        if (!st.rap.length) return;
        return {
          label: (
            <div className="logo-container">
              <img src={st.logo} width={50} height={50} />
            </div>
          ),
          key: key + 1,
          children: <ShowtimeDetailDateTab rap={st.rap} />,
        };
      })}
    />
  );
};

export default ShowTimeDetailTab;
