import { Link } from "react-router-dom";
import useData from "./useData";
const Header = ({ setPageCount, setMoveis }) => {
  const handleSearch = async (search) => {
    if (search === "") {
      const searchRes = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=9ca882c0d9271bac0450ebcb904575b0`
      ).then((res) => res.json());
      setMoveis(searchRes);
    } else {
      const searchRes = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=9ca882c0d9271bac0450ebcb904575b0`
      ).then((res) => res.json());
      setMoveis(searchRes);
      setPageCount(searchRes.total_pages);
    }
  };
  return (
    <header className="bg-[#D62433]">
      <nav className="flex items-center gap-5  justify-between p-5 w-4/5 mx-auto">
        <div className="flex items-center rounded-full bg-white grow overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            onChange={(e) => handleSearch(e.target.value)}
            type="search"
            className=" w-5/6 outline-none p-3 pl-0"
          />
        </div>
        <Link to={"/"} className="text-white">
          Logo
        </Link>
      </nav>
    </header>
  );
};

export default Header;
