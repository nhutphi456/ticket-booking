import { useEffect, useState } from "react";
import _ from "lodash";

const rowCharacters = "abcdefghij";
const useSeats = (seats: any[]) => {
  const [seatList, setSeatList] = useState<any[]>([]);

  useEffect(() => {
    const dividedSeatList = _.chunk(seats, 16);
    const rows = rowCharacters.split("");
    const formattedSeatList = rows.map((row: string, index: number) => {
      return {
        rowName: row.toUpperCase(),
        rowOrder: index,
        rowSeats: dividedSeatList[index],
      };
    });
    setSeatList(formattedSeatList)

    // console.log("formattedSeatList", formattedSeatList);
  }, [seats]);

  return seatList;
};

export default useSeats;
