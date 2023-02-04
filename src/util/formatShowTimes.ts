import moment from "moment";
import _ from "lodash";

export const formatShowTimes = (showTimes: any) => {
    const showTimeDates = showTimes.map((s: any) =>
      moment(s.ngayChieuGioChieu).format("YYYY-MM-DD")
    );
    const uniqueShowTimeDates: string[] = [];
    showTimeDates.forEach((s: string) => {
      if (!uniqueShowTimeDates.includes(s)) {
        uniqueShowTimeDates.push(s);
      }
    });
  
    const formattedShowTimes = _.orderBy(
      uniqueShowTimeDates,
      (us: string) => {
        return moment(us).format("YYYYMMDD");
      },
      ["asc"]
    ).map((uniqueTime: string) => {
      let movieShowtimes: any[] = [];
      showTimes.forEach((s: any) => {
        const showDate = s.ngayChieuGioChieu.split("T")[0];
        if (uniqueTime === showDate) {
          movieShowtimes.push(s);
        }
      });
  
      return {
        ngayChieu: uniqueTime,
        lichChieuTheoNgay: movieShowtimes,
      };
    });
  
    return formattedShowTimes;
  };