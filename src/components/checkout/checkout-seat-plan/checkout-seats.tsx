import useSeats from "../../../hooks/useSeats";
import Seat from "./checkout-seat";
import * as Styled from "./styled";

interface Props {
  seats: any[];
}

const Seats = ({ seats }: Props) => {
  const seatList = useSeats(seats);

  // useEffect(() => {
  //   console.log("seats", seatList);
  // }, [seatList]);

  return (
    <>
      <Styled.Seats>
        {seatList &&
          seatList.map((row: any, index: number) => (
            <div className="theater-row" key={index}>
              <div className="row-name">
                <span>{row.rowName}</span>
              </div>
              <div className="seat-row">
                {row.rowSeats &&
                  row.rowSeats.map((rs: any, idx: number) => (
                    <Seat
                      key={idx}
                      rowName={row.rowName}
                      rowOrder={row.rowOrder}
                      seat={rs}
                    />
                  ))}
              </div>
            </div>
          ))}
      </Styled.Seats>
    </>
  );
};

export default Seats;
