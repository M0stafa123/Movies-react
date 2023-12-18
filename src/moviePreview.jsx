import { Link } from "react-router-dom";
import useData from "./useData";
import { useParams } from "react-router";
const Preview = () => {
  const { id } = useParams();
  const { Movies } = useData(`
https://api.themoviedb.org/3/movie/${id}?api_key=9ca882c0d9271bac0450ebcb904575b0`);
  return (
    <main className="md:w-4/5 w-full  mx-auto p-5 mt-5">
      {Movies && (
        <article>
          <div className="md:flex-row flex-col gap-5  flex justify-around items-center bg-[#FEC0C0] rounded-lg p-3">
            <section className="data text-center">
              <p>Movie Name : {Movies.original_title}</p>
              <p className="my-4">release Date : {Movies.release_date}</p>
              <p className="mb-4">Votes : {Movies.vote_count}</p>
              <p>Rate : {Movies.vote_average}</p>
            </section>
            <img
              className="rounded-md"
              src={"https://image.tmdb.org/t/p/w200" + Movies.poster_path}
              alt=""
            />
          </div>
          <section className="Story items-center bg-[#FEC0C0] rounded-lg p-4 mt-10">
            <h1 className=" text-3xl my-3">Overview:</h1>
            <p>{Movies.overview}</p>
          </section>
          <div className="flex justify-around p-3 mt-4">
            <Link
              className="rounded-md text-sm w-20 md:text-xl md:w-40 text-center text-white active:bg-[#FEC0C0] hover:bg-[#AA0C23] active:text-black p-1 bg-[#D62433] "
              to={Movies.homepage}
            >
              See Movie
            </Link>
            <Link
              className="rounded-md text-sm w-20 md:text-xl md:w-40 text-center text-white active:bg-[#FEC0C0] hover:bg-[#AA0C23] active:text-black p-1 bg-[#D62433]"
              to={"/"}
            >
              Home
            </Link>
          </div>
        </article>
      )}
    </main>
  );
};

export default Preview;
