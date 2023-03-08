import useMobile from "../../../hooks/useMobile";
import useShowTime from "../../../hooks/useShowTime";
import { ITheater } from "../../../models/theater";
import { CustomTabs } from "../styled";
import CinemaTabs from "./show-time-cinema-tab";

const ShowTime = () => {
  const { theaters, loading } = useShowTime();
  const isMobile = useMobile();

  if (loading) return <div>Loading...</div>;
  return (
    <div className="container">
      <div style={{ padding: "20px 0" }}>
        <CustomTabs
          defaultActiveKey="1"
          items={(theaters as any).map((theater: ITheater, key: number) => {
            return {
              label: (
                <div className="logo-container">
                  <img src={theater.logo} width={50} height={50} alt={`theater-${key}`}/>
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
          tabPosition={!isMobile ? "left" : "top"}
        />
      </div>
    </div>
  );
};

export default ShowTime;
