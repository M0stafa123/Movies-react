import ReactPaginate from "react-paginate";
const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <footer className=" basis-full">
      <ReactPaginate
        className="flex items-center gap-1   md:gap-2 justify-center py-0 md:p-4 my-4"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageLinkClassName="p-1 border md:min-w-[2.5rem]  border-[#FA8C8C] text-[#AA0C23] text-center rounded-md hover:bg-[#EE575B] hover:text-white inline-block text-xs md:text-xl"
        breakClassName="text-[#FA8C8C]"
        nextLinkClassName="p-1 border  border-[#FA8C8C] text-[#AA0C23] text-center rounded-md hover:bg-[#EE575B] hover:text-white text-xs md:text-xl"
        previousLinkClassName="p-1 border border-[#FA8C8C] text-[#AA0C23] text-center rounded-md hover:bg-[#EE575B] hover:text-white text-xs md:text-xl"
        activeLinkClassName="!text-white !bg-[#AA0C23]"
      />
    </footer>
  );
};

export default Pagination;
