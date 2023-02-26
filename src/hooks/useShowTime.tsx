import { AxiosResponse } from "axios";
import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  getTheaterSystemStart,
  getTheaterSystemSuccess,
} from "../redux/theaterSlice";
import { theaterApi } from "../services/theater";

const useShowTime = () => {
  const dispatch = useAppDispatch();
  const {
    theater: { theaters, loading },
  } = useAppSelector((state) => state);

  const getTheater = useCallback(() => {
    let theaters: any[] = [];

    dispatch(getTheaterSystemStart());
    theaterApi
      .getTheaterSystem({})
      .then((res: AxiosResponse) => {
        theaters = res.data;
      })
      .then(() => {
        let cinemaComplexPromiseArray = [];

        for (let theater of theaters) {
          const promise = theaterApi
            .getCinemaComplex({
              maHeThongRap: theater.maHeThongRap,
            })
            .then((res: AxiosResponse) => {
              theater.cumRap = res.data;
            });

          cinemaComplexPromiseArray.push(promise);
        }

        Promise.all(cinemaComplexPromiseArray).then(() => {
          let showTimePromiseArray = [];

          for (let theater of theaters) {
            const promise = theaterApi
              .getShowtime({
                maHeThongRap: theater.maHeThongRap,
                maNhom: "GP09",
              })
              .then((res: AxiosResponse) => {
                theater.lichChieu = res.data;
              });
            showTimePromiseArray.push(promise);
          }

          Promise.all(showTimePromiseArray).then(() => {
            return dispatch(getTheaterSystemSuccess(theaters));
          });
        });
      });
  }, []);

  useEffect(() => {
    getTheater();
  }, []);

  return { theaters, loading };
};

export default useShowTime;
