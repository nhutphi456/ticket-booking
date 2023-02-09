import moment from "moment";
import ShowTimeDetailItem from "./show-time-detail-item";
import * as Styled from "./styled";

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
  return (
    <Styled.DateTab
      defaultActiveKey="1"
      tabPosition="top"
      items={rap.map((day: any, key: number) => {
        return {
          label: <DateTabHeader date={moment(day.ngayChieu)} />,
          key: key + 1,
            children: <ShowTimeDetailItem showTimeByDate={day.lichChieuTheoNgay}/>,
        };
      })}
    />
  );
};

export default ShowtimeDetailDateTab;
