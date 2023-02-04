import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { theaterApi } from "../services/theater";
import { formatShowTimes } from "../util/formatShowTimes";

const useSearch = () => {
  const {
    movie: { data },
  } = useAppSelector((state) => state);

  const [theaters, setTheaters] = useState([]);
  const [dates, setDates] = useState([]);
  const [premieres, setPremieres] = useState([]);

  const [selectedMovieId, setSelectedMovieId] = useState(-1);
  const [selectedTheater, setSelectedTheater] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPremiere, setSelectedPremiere] = useState("");

  useEffect(() => {
    if (selectedMovieId < 0) return;
    (async () => {
      try {
        const { data } = await theaterApi.getDetail(selectedMovieId);
        const { heThongRapChieu } = data;
        const complexes: any = [];
        heThongRapChieu.map((system: any) => {
          return system.cumRapChieu.forEach((complex: any) => {
            const formattedShowTimes = formatShowTimes(complex.lichChieuPhim);
            complexes.push({
              ...complex,
              lichChieuPhim: formattedShowTimes,
            });
          });
        });
        console.log("complexes", complexes);
        setTheaters(complexes);
        setDates([]);
        setPremieres([]);
      } catch (error) {}
    })();
  }, [selectedMovieId]);

  const movieOptions = data.map((movie) => {
    return {
      label: movie.tenPhim,
      value: movie.maPhim,
    };
  });
  const theaterOptions = useMemo(() => {
    return theaters.map((theater: any) => {
      return {
        label: theater.tenCumRap,
        value: theater.maCumRap,
      };
    });
  }, [theaters]);
  const dateOptions = useMemo(() => {
    return dates?.map((showTime: any) => {
      return {
        label: moment(showTime.ngayChieu).format("dddd, DD/MM/YYYY"),
        value: showTime.ngayChieu,
      };
    });
  }, [dates]);
  const premiereOptions = useMemo(() => {
    return premieres?.map((date: any) => {
      const showHour = date.ngayChieuGioChieu.split("T")[1];
      return {
        label: showHour.slice(0, 5),
        value: date.maLichChieu,
      };
    });
  }, [premieres]);

  const handleMovieChange = (value: string) => {
    setSelectedMovieId(+value);
    setSelectedTheater("");
    setSelectedDate("");
    setSelectedPremiere("");
  };

  const handleTheaterChange = (value: string) => {
    const chosenTheater: any =
      theaters.find((theater: any) => theater.maCumRap === value) || {};
    setSelectedTheater(value);
    setDates(chosenTheater.lichChieuPhim || []);
    setSelectedDate("");
    setSelectedPremiere("");
  };

  const handleDateChange = (value: string) => {
    const chosenDate: any = dates.find((date: any) => date.ngayChieu === value);
    setSelectedDate(value);
    setPremieres(chosenDate.lichChieuTheoNgay || []);
    setSelectedPremiere("");
  };

  const handlePremiereChange = (value: string) => {
    setSelectedPremiere(value);
  };

  return {
    movieOptions,
    theaterOptions,
    dateOptions,
    premiereOptions,
    selectedMovieId,
    selectedTheater,
    selectedDate,
    selectedPremiere,
    handleTheaterChange,
    handleDateChange,
    handleMovieChange,
    handlePremiereChange,
  };
};

export default useSearch;
