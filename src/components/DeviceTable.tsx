import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'

function DeviceTable() {

    const data:any =  useMemo(() => {
        return []
      }, []);

   // Search bar
   const [searchInput, setSearchInput] = useState("");
   const [filteredData, setFilteredData] = useState(data);
 
   const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
     const inputValue = event.target.value.toLowerCase();
     setSearchInput(inputValue);
 
     // Filter the data based on the search input
     const filteredData = data.filter((item:any) => {
       // Apply your filter logic based on the specific fields you want to search in
       // For example, if you want to search in the 'name' and 'email' fields:
       return (
         item.id.toLowerCase().includes(inputValue) ||
         item.groupName.toLowerCase().includes(inputValue) ||
         item.organization.toLowerCase().includes(inputValue)
       );
     });
 
     setFilteredData(filteredData);
   };
    
   useEffect(() => {
     // Filter the data based on the search input whenever 'data' changes
     const filteredData = data.filter((item:any) => {
       return (
         item.id.includes(searchInput) ||
         item.groupName.toLowerCase().includes(searchInput) ||
         item.organization.toLowerCase().includes(searchInput)
       );
     });
   
     setFilteredData(filteredData);
   }, [data, searchInput]);
 
   // Pagination //
   const [currentPage, setCurrentPage] = useState(1);
   const recordsPerPage = 10;
   const lastIndex = currentPage * recordsPerPage;
   const firstIndex = lastIndex - recordsPerPage;
   const records = filteredData.slice(firstIndex, lastIndex);
   const npage = Math.ceil(filteredData.length / recordsPerPage);
   const numbers = [...Array(npage + 1).keys()].slice(1);

   
  return (
    <div className="animate-appear text-sm mt-[20px] overflow-y-auto">
      <div id="utility-bar" className="flex justify-between bg-gray-600">
        <input
          className="border border-gray-300 p-2 rounded m-1"
          placeholder="Search.."
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button
          className="border rounded border-gray-300 p-2 hover:bg-blue-500 hover:text-white"
          onClick={(e) => ""}
        >
          Registered
        </button>
      </div>
      <table className="table-auto border shadow-lg border-gray-300 bg-gray-50 my-2 min-w-[600px]">
        <thead>
          <tr>
            {/* <th className="p-4 text-left">ID</th> */}
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Organization</th>
            <th className="p-4 text-left">Year</th>
            <th className="p-4 text-left"> </th>
          </tr>
        </thead>
        <tbody className="">
          {records.map((d:any, i:any) => {
            return (
              <tr key={i} className="border border-gray-300 hover:bg-gray-300">
                {/* <td className="p-4">{d.id}</td> */}
                <td className="p-4 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[90px] ">
                  {d.groupName}
                </td>
                <td className="p-4 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[90px] ">
                  {d.organization}
                </td>
                <td className="p-4">{d.year}</td>
                <td className="p-4 h-4">
                  <div className="">
                    <button
                      onClick={(e) => ""}
                      className="text-gray-600 hover:text-blue-700"
                    >
                      
                    </button>
                    
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav id="pagination" className="flex justify-between">
        <div className="flex justify-center items-center">
          Page {currentPage} of {npage}
        </div>
        <div>
          <ul className="flex">
            <button onClick={prePage} className="border rounded border-gray-300 p-2 mx-1">
                {`< Prev`}
            </button>
            {/* {numbers.map((n, i) => (
            <li key={i}>
              <a
                href="#"
                className={` ${currentPage === n ? "active" : ""}`}
                onClick={(e) => changePage(n)}
              >
                {n}
              </a>
            </li>
          ))} */}
            <button  onClick={nextPage} className="border rounded border-gray-300 p-2">
                {`Next >`}
            </button>
          </ul>
        </div>
      </nav>
    </div>
  )

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(n: number) {
    setCurrentPage(n);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function firstPage() {
    setCurrentPage(1);
  }

  function lastPage() {
    setCurrentPage(npage);
  }
}

export default DeviceTable