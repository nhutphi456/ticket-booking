import { useEffect, useMemo, useState } from "react";
import { IShowTimeDetail } from "../models/movie";
import { theaterApi } from "../services/theater";
import { formatShowTimes } from "../util/formatShowTimes";

const useShowTimeDetail = (showDetails: IShowTimeDetail[]) => {
  const [theaters, setTheaters] = useState([]);
  const [showTimes, setShowTimes] = useState([]);

  const fetchTheaters = async () => {
    try {
      const { data } = await theaterApi.getTheaterSystem({});
      setTheaters(data);
    } catch (error) {}
  };

  useEffect(() => {
    (async () => {
      await fetchTheaters();
    })();
  }, []);

  useEffect(() => {
    let formattedShowTimes: any = [];
    if (theaters.length) {
      formattedShowTimes = theaters.map((theater: any) => {
        const rap = showDetails.filter((show) => {
            return show.thongTinRap.maHeThongRap === theater.maHeThongRap;
        });

        const movieSchedules = formatShowTimes(rap);

        return {
          maHeThongRap: theater.maHeThongRap,
          tenHeThongRap: theater.tenHeThongRap,
          biDanh: theater.biDanh,
          logo: theater.logo,
          rap: movieSchedules,
        };
      });
    }

    setShowTimes(formattedShowTimes);
  }, [theaters, showDetails]);

  // const showTimes = useMemo(() => {
  //   if (!theaters.length) return [];
  //   return theaters.map((theater: any) => {
  //     const rap = showDetails.filter((show) => {
  //       console.log(show.thongTinRap.maHeThongRap, theater.maHeThongRap);
  //       return show.thongTinRap.maHeThongRap === theater.maHeThongRap;
  //     });

  //     const movieSchedules = formatShowTimes(rap);

  //     return {
  //       maHeThongRap: theater.maHeThongRap,
  //       tenHeThongRap: theater.tenHeThongRap,
  //       biDanh: theater.biDanh,
  //       logo: theater.logo,
  //       rap: movieSchedules,
  //     };
  //   });
  // }, [theaters]);

  return showTimes;
};

export default useShowTimeDetail;
