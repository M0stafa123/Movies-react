import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header";
import Card from "./card";
import Preview from "./moviePreview";
import { useState } from "react";
function App() {
  const [pageCount, setPageCount] = useState(500);
  const [query, setQuery] = useState(null);
  return (
    <div className="App  ">
      <BrowserRouter>
        <Header setPageCount={setPageCount} setQuery={setQuery} />
        <Routes>
          <Route path="/" element={<Card pageCount={pageCount} query={query} />} />
          <Route path="/movie/:id" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
