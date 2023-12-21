import { Link } from "react-router-dom";
import Pagination from "./pagination";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./reducers/Moviereducer";
import { useEffect } from "react";
const Card = ({ pageCount, query }) => {
  const { Movies, isLoading, error } = useSelector((state) => state.Movies);
  const dispatch = useDispatch();
  const handlePageClick = (data, query) => {
    const page = data.selected + 1;
    if (query) {
      dispatch(fetchMovies({ search: query, page: page }));
      console.log("there is query");
    } else {
      dispatch(fetchMovies({ page: page }));
      console.log("there is no query");
    }
    console.log(data);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  console.log(Movies);
  return (
    <article className="flex flex-wrap gap-5 justify-center items-center p-5 ">
      {isLoading && <div>Loading...</div>}
      {error && <p>Error loading movies.</p>}
      {Movies && Movies.results && Movies.results.length < 1 && <div>No Movies...</div>}
      {Movies &&
        Movies.results &&
        Movies.results.map((movie) => {
          return (
            <section key={movie.id} className=" relative ">
              <div className="img rounded-md overflow-hidden">
                <img
                  className="h-[600px] w-[400px]"
                  src={"https://image.tmdb.org/t/p/w400" + movie.poster_path}
                  alt=""
                />
              </div>
              <Link
                to={`/movie/${movie.id}`}
                className="info opacity-0 absolute top-0 left-0 w-full h-full bg-slate-950 text-white text-center flex flex-col justify-center rounded-md"
              >
                <p>Movie Name : {movie.original_title}</p>
                <p className="my-4">release Date : {movie.release_date}</p>
                <p className="mb-4">Votes : {movie.vote_count}</p>
                <p>Rate : {movie.vote_average}</p>
              </Link>
            </section>
          );
        })}
      {Movies && Movies.total_pages > 1 && (
        <Pagination
          handlePageClick={(data) => handlePageClick(data, query)}
          pageCount={pageCount}
        />
      )}
    </article>
  );
};

export default Card;
