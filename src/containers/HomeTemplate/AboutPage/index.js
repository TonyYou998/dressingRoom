import React, { useState, useEffect } from "react";
import Axios from "axios";
import Movie from "../../../components/Movie";
import Loader from "components/Loader";
export default function AboutPage() {
  const [state, setState] = useState({ listMovie: [], isLoading: false });
  //do du lieu tu setListMovie vao listMovie
  useEffect(() => {
    setState({
      ...state,
      isLoading: true,
    });
    Axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((result) => {
        // setListMovie(result.data);
        setState({
          ...state,
          listMovie: result.data,
          isLoading: false,
        });
      })
      .catch((err) => {});
  }, []);
  const renderHTML = () => {
    const { listMovie } = state;
    if (state.isLoading) return <Loader />;

    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie) => {
        return (
          <div key={movie.maPhim} className="col-md-3">
            <Movie movie={movie} />
          </div>
        );
      });
    }
  };
  return (
    <div className="container">
      <h3>listmoviepage</h3>
      <div className="row">{renderHTML()}</div>
    </div>
  );
}
