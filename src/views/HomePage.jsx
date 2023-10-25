import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../store/actions/movieAction";
import CardMovies from "../components/CardMovies";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  const [selectedMovie, setSelectedMovie] = useState("batman");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const handleChangeHandler = (e) => {
    setSelectedMovie(e.target.value);
  };

  useEffect(() => {
    dispatch(getAllMovies(selectedMovie));
  }, [selectedMovie]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMovies = movies.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(movies.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!movies) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="mt-4 p-3">
          <span className="ml-4 mr-8">Movie List</span>
          <input
            className="mx-2 cursor-pointer rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:border-1 focus:ring-[#005f69] focus:border-transparent"
            type="radio"
            name="radioMovie"
            id="batman"
            value="batman"
            onChange={handleChangeHandler}
            checked={selectedMovie === "batman"}
          />
          <label htmlFor="batman" className="cursor-pointer">
            Batman
          </label>
          <input
            className="mx-2 cursor-pointer rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:border-1 focus:ring-[#005f69] focus:border-transparent"
            type="radio"
            name="radioMovie"
            id="superman"
            value="superman"
            onChange={handleChangeHandler}
            checked={selectedMovie === "superman"}
          />
          <label htmlFor="superman" className="cursor-pointer">
            Superman
          </label>
          <input
            className="mx-2 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:border-1 focus:ring-[#005f69] focus:border-transparent"
            type="radio"
            name="radioMovie"
            id="tarzan"
            value="tarzan"
            onChange={handleChangeHandler}
            checked={selectedMovie === "tarzan"}
          />
          <label htmlFor="tarzan" className="cursor-pointer">
            Tarzan
          </label>
          <input
            className="mx-2 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:border-1 focus:ring-[#005f69] focus:border-transparent"
            type="radio"
            name="radioMovie"
            id="harrypotter"
            value="harry%20potter"
            onChange={handleChangeHandler}
            checked={selectedMovie === "harry%20potter"}
          />
          <label htmlFor="harrypotter" className="cursor-pointer">
            Harry Potter
          </label>
          <input
            className="mx-2 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:border-1 focus:ring-[#005f69] focus:border-transparent"
            type="radio"
            name="radioMovie"
            id="gameofthrones"
            value="game%20of%20thrones"
            onChange={handleChangeHandler}
            checked={selectedMovie === "game%20of%20thrones"}
          />
          <label htmlFor="gameofthrones" className="cursor-pointer">
            Game of Thrones
          </label>

          <Link
            to="/cart"
            className="bg-[#005f69] text-white px-2 py-1 rounded-lg justify-self-end ml-96"
          >
            <FontAwesomeIcon className="mr-2" icon={faCartPlus} color="#fff" />
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-4 justify-center">
          {currentMovies.map((item, index) => (
            <CardMovies movie={item} key={index} />
          ))}
          {/* // <CardMovies movie={currentMovies} /> */}
        </div>
        <div className="flex justify-center mt-10">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handleClick(number)}
              className={`mx-1 px-3 py-1 rounded-lg ${
                currentPage === number ? "bg-[#005f69] text-white" : "bg-white"
              }`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
