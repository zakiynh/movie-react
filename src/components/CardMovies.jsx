import { useDispatch } from "react-redux";
import { setPrice } from "../store/actions/movieAction";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CardMovies({ movie }) {
  const dispatch = useDispatch();
  const [price, setPrices] = useState(0);
  const handlePrice = () => {
    const result = (
      (Math.floor(Math.random() * 10) + 1) *
      100000
    ).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    setPrices(result);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setPrice(price));
    navigate("/" + movie.imdbID);
  };

  useEffect(() => {
    handlePrice();
  }, [dispatch]);
  return (
    <div
      onClick={() => handleClick()}
      className="max-w-sm cursor-pointer justify-self-center overflow-hidden shadow-2xl my-10 mx-8 flex flex-col-reverse rounded-lg"
      style={{
        backgroundImage: `url('${movie.Poster}')`,
        objectFit: "contain",
        width: "300px",
        height: "450px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0))",
        }}
      >
        <div className="px-6 py-4" style={{ opacity: "100%" }}>
          <div className="font-bold text-2xl mb-2 text-white">
            {movie.Title}
          </div>
          <p className="text-base text-white">{movie.Year}</p>
          <p className="text-base text-white">{movie.Genre}</p>
          <p className="text-base text-white">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default CardMovies;
