import { Collapse } from "antd";
import moment from "moment";
import useMobile from "../../../hooks/useMobile";
import ShowTimeDetailItem from "./show-time-detail-item";
import * as Styled from "./styled";

const { Panel } = Collapse;
interface Props {
  rap: any;
}
const DateTabHeader = ({ date }: any) => {
  return (
    <div className="date-header">
      <p>{date.format("dddd")}</p>
      <p>{date.format("DD.MM.YYYY")}</p>
    </div>
  );
};
const ShowtimeDetailDateTab = ({ rap }: Props) => {
  const isMobile = useMobile();
  return (
    <>
      {!isMobile ? (
        <Styled.DateTab
          defaultActiveKey="1"
          tabPosition="top"
          items={rap.map((day: any, key: number) => {
            return {
              label: <DateTabHeader date={moment(day.ngayChieu)} />,
              key: key + 1,
              children: (
                <ShowTimeDetailItem showTimeByDate={day.lichChieuTheoNgay} />
              ),
            };
          })}
        />
      ) : (
        <Styled.DateCollapse>
          {rap.map((day: any, idx: number) => {
            return (
              <Panel
                key={idx + 1}
                header={<DateTabHeader date={moment(day.ngayChieu)} />}
              >
                <ShowTimeDetailItem showTimeByDate={day.lichChieuTheoNgay} />
              </Panel>
            );
          })}
        </Styled.DateCollapse>
      )}
    </>
  );
};

export default ShowtimeDetailDateTab;
