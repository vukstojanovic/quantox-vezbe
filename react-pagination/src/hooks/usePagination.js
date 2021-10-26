  import { useState } from 'react'

  export default function usePagination(itemsPerPage) {

    const [currentPage, setCurrentPage] = useState(0);

    function paginate(arr) {
      let limit = itemsPerPage;
      let pages = Math.ceil(arr.length / limit);
      let listOfLists = [];
      let start = 0;
      let end = limit;
      for (let i = 0; i < pages; i++) {
          let temporary = arr.slice(start, end);
          listOfLists.push(temporary);
          start = end;
          end = end + limit;
      }
      return listOfLists;
    }

    function goToNext(arr) {
      if (currentPage === arr.length - 1) {
        setCurrentPage(0);
      } else {
        setCurrentPage(prev => prev + 1);
      }
    }

    function goToPrev(arr) {
      if (currentPage === 0) {
        setCurrentPage(arr.length - 1);
      } else {
        setCurrentPage(prev => prev - 1);
      }
    }

    return {
      currentPage,
      setCurrentPage,
      goToNext,
      goToPrev,
      paginate
    };
}

