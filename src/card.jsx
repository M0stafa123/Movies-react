import { Link, useSearchParams } from "react-router-dom";
import Pagination from "./pagination";
const Card = ({ pageCount, setMoveis, Movies }) => {
  const handlePageClick = async (data) => {
    const newData = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=9ca882c0d9271bac0450ebcb904575b0&page=${
        data.selected + 1
      }`
    ).then((res) => res.json());
    setMoveis(newData);
  };

  return (
    <article className="flex flex-wrap gap-5 justify-center items-center p-5 ">
      {Movies &&
        Movies.results.map((movie) => {
          return (
            <section key={movie.id} className=" relative ">
              <div className="img">
                <img
                  className="h-[600px] w-[400px]"
                  src={"https://image.tmdb.org/t/p/w400" + movie.poster_path}
                  alt=""
                />
              </div>
              <Link
                to={`/movie/${movie.id}`}
                className="info opacity-0 absolute top-0 left-0 w-full h-full bg-slate-950 text-white text-center flex flex-col justify-center"
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
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      )}
    </article>
  );
};

export default Card;
