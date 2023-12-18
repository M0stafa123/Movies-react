import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header";
import { useState } from "react";
import Card from "./card";
import Preview from "./moviePreview";
import useData from "./useData";
function App() {
  const [pageCount, setPageCount] = useState(500);
  const { Movies, setMoveis } = useData(
    "https://api.themoviedb.org/3/movie/popular?api_key=9ca882c0d9271bac0450ebcb904575b0"
  );
  return (
    <div className="App  ">
      <BrowserRouter>
        <Header setPageCount={setPageCount} setMoveis={setMoveis} />
        <Routes>
          <Route
            path="/"
            element={
              <Card pageCount={pageCount} Movies={Movies} setMoveis={setMoveis} />
            }
          />
          <Route path="/movie/:id" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
