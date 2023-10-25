import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMovieById } from "../store/actions/movieAction";

function DetailPage() {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const movieid = useSelector((state) => state.movies.movieid);
    const price = useSelector((state) => state.price.price);

    useEffect(() => {
        dispatch(getMovieById(imdbID));
    }, [dispatch, imdbID]);

    const [cartList, setcartList] = useState([]);
    const [isAdded, setisAdded] = useState(false);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart === null || cart.length === 0) {
            localStorage.setItem("cart", JSON.stringify([]));
        } else {
            setisAdded(!cart.includes(movieid));
        }
    });

    const addCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (cart === null || cart.length === 0) {
            setcartList(cart);
        }
        const cartListTemp = cartList;
        if (!cartListTemp.find((el) => el?.imdbID === movieid.imdbID)) {
            cartListTemp.push(movieid);
            localStorage.setItem("cart", JSON.stringify(cartListTemp));
            setisAdded(true);
        } 
    }

  return (
    <div
      className="p-10 h-screen"
      style={{
        backgroundImage: `url('${movieid.Poster}')`,
        objectFit: "contain",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-full bg-white">
        <div className="w-1/4 h-full flex flex-col">
        <Link to="/"
            className="justify-self-start border-2 border-[#005f69] rounded-full py-2 px-2.5"
            style={{
              position: "absolute",
              left: "55px",
              top: "70px",
              width: "fit-content",
            }}
          >
            <FontAwesomeIcon className="text-xl" icon={faBackward} color="#blue" />
          </Link>
            <h1 className="my-8 text-3xl font-bold text-center">
              Movie Detail
            </h1>
          <img
            className="justify-self-center ml-4 shadow-2xl"
            src={movieid.Poster}
            alt="poster"
          />
          <span className="mt-4 font-bold text-xl text-center">
            Price: {price}
          </span>
          <div className="flex justify-center my-4">
            <button onClick={addCart} className="bg-[#005f69] text-white px-2 py-1 rounded-lg" >
              <FontAwesomeIcon
                className="mr-2"
                icon={faCartPlus}
                color="#fff"
              />
              Add to Cart
            </button>
          </div>
        </div>
        <div className=" w-3/4 flex flex-col px-10 py-24">
          <h1 className="font-bold text-5xl text-center mb-10">
          {movieid.Title}
          </h1>
          <div className="grid grid-cols-4 gap-2">
            <div className="font-bold text-xl col-span-1">Year</div>
            <div className="col-span-3">: {movieid.Year}</div>

            <div className="font-bold text-xl col-span-1">Realeased</div>
            <div className="col-span-3">: {movieid.Released}</div>
            <div className="font-bold text-xl col-span-1">IMDB Rating</div>
            <div className="col-span-3">: {movieid.imdbRating}/10</div>
            <div className="font-bold text-xl col-span-1">Director</div>
            <div className="col-span-3">: {movieid.Director}</div>
            <div className="font-bold text-xl col-span-1">Writer</div>
            <div className="col-span-3">
              : {movieid.Writer}
            </div>
            <div className="font-bold text-xl col-span-1">Actors</div>
            <div className="col-span-3">
              : {movieid.Actors}
            </div>
            <div className="font-bold text-xl col-span-1">Genre</div>
            <div className="col-span-3">: {movieid.Genre}</div>
            <div className="font-bold text-xl col-span-1">Durasi</div>
            <div className="col-span-3">: {movieid.Runtime}</div>
            <div className="font-bold text-xl col-span-1">Synopsys</div>
            <div className="col-span-3">
              : {movieid.Plot}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
