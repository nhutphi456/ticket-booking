import { ICinemaComplex } from "../../../models/theater";
import { getTheaterClass } from "../../../util/getTheaterGlass";
import * as Styled from "./styled";
interface Props {
  data: {
    cinema: ICinemaComplex;
    maHeThongRap: string;
  };
}

const CinemaLabel = ({ data }: Props) => {
  const { cinema, maHeThongRap } = data;
  const { tenCumRap } = cinema;
  const [cinemaName, branch] = tenCumRap.split("-");

  return (
    <Styled.CinemaLabel>
      <div className="cinema-img">
        <img
          src={`${process.env.PUBLIC_URL}/images/cinema/rap-bhd-star-3-2.jpg`}
          alt=""
          width={50}
          height={50}
        />
      </div>
      <div className="cinema-info">
        <p className="cinema-detail">
          <span className={`cinema-name ${getTheaterClass(maHeThongRap)}`}>
            {cinemaName}
          </span>
          <span className="cinema-branch"> - {branch}</span>
        </p>
        <p className="cinema-address">{cinema.diaChi}</p>
      </div>
    </Styled.CinemaLabel>
  );
};

export default CinemaLabel;
