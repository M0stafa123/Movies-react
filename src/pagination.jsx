import ReactPaginate from "react-paginate";
const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <footer className=" basis-full">
      <ReactPaginate
        className="flex items-center gap-2 justify-center p-4 my-4"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        pageLinkClassName="p-1 border min-w-[2.5rem] border-[#FA8C8C] text-[#AA0C23] text-center rounded-md hover:bg-[#EE575B] hover:text-white inline-block"
        breakClassName="text-[#FA8C8C]"
        nextLinkClassName="p-1 border  border-[#FA8C8C] text-[#AA0C23] text-center rounded-md hover:bg-[#EE575B] hover:text-white"
        previousLinkClassName="p-1 border border-[#FA8C8C] text-[#AA0C23] text-center rounded-md hover:bg-[#EE575B] hover:text-white"
        activeLinkClassName="!text-white !bg-[#AA0C23]"
      />
    </footer>
  );
};

export default Pagination;
