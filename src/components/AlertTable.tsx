"use client";

import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { GreenLight, RedLight } from "./Indicators";
import SortIcon from "./SortIcon";

type Props = {
  data?: any;
};


function AlertTable({data}:Props) {

  // Search bar
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [sortColumn, setSortColumn] = useState<any>(""); // Column name to sort
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc"); // Sorting direction: "asc" or "desc"

  const handleHeaderClick = (column: keyof any) => {
    // If the same column is clicked, toggle the sorting direction
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // If a new column is clicked, set it as the sort column and default sorting direction to "asc"
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchInput(inputValue);

    // Filter the data based on the search input
    const filteredData = data.filter((item: any) => {
      // Apply your filter logic based on the specific fields you want to search in
      // For example, if you want to search in the 'name' and 'email' fields:
      return item.Name.toLowerCase().includes(inputValue);
    });

    setFilteredData(filteredData);
  };

  useEffect(() => {
    // Filter the data based on the search input whenever 'data' or 'searchInput' changes
    const filteredData = data.filter((item: DeviceRowData) => {
      return item.Name.toLowerCase().includes(searchInput);
    });

    // Sort the filteredData array based on the selected column and sorting direction
    const sortedData = [...filteredData];
    sortedData.sort((a, b) => {
      const aValue = a[sortColumn] || ""; // If aValue is undefined, consider it as an empty string
      const bValue = b[sortColumn] || ""; // If bValue is undefined, consider it as an empty string

      // Use localeCompare for case-insensitive sorting of strings
      const compareResult =
        sortDirection === "asc"
          ? aValue.toString().localeCompare(bValue.toString())
          : bValue.toString().localeCompare(aValue.toString());

      return compareResult;
    });

    setFilteredData(sortedData);
  }, [data, searchInput, sortColumn, sortDirection]);

  // Pagination //
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);


  return (
    <div className="animate-appear text-sm mt-[20px] overflow-x-scroll max-w-screen-lg" >
      <div id="utility-bar" className="flex flex-col justify-between">
        <div className="flex">
          <button
            className="hover:border-t hover:border-x hover:rounded-t border-gray-300 p-2 text-blue-600"
            onClick={(e) => ""}
          >
            Registered
          </button>
          <button
            className="hover:border-t hover:border-x hover:rounded-t border-gray-300 p-2 text-blue-600"
            onClick={(e) => ""}
          >
            Unregistered
          </button>
        </div>
        <div className="bg-gray-50 border-t border-x">
          <input
            className="border border-gray-300 p-2 rounded m-1"
            placeholder="Search.."
            type="text"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
      <table className="table-auto border shadow-lg border-gray-300 bg-gray-50 mb-10">
        <thead>
          <tr className="">
            <th
                className="p-4 flex items-center justify-between"
                onClick={() => handleHeaderClick("DeviceID")}
              >
                Device Id
                <SortIcon />
              </th>        
            <th className="p-4 text-left cursor-pointer" onClick={() => handleHeaderClick("TimeStamp")}>Timestamp</th>     
            <th className="p-4 text-left cursor-pointer" onClick={() => handleHeaderClick("TimeStamp")}>IP</th>
            <th className="p-4 text-left cursor-pointer" onClick={() => handleHeaderClick("Name")}>Name</th>
            <th className="p-4 text-left cursor-pointer" onClick={() => handleHeaderClick("Location")}>Location</th>
            <th className="p-4 text-left cursor-pointer" onClick={() => handleHeaderClick("Room")}>Room</th>
            <th className="p-4 text-left cursor-pointer" onClick={() => handleHeaderClick("Status")}>Status</th>
            <th className="p-4 text-left cursor-pointer" onClick={() => handleHeaderClick("AnalyticModule")}>AnalyticModule</th>
            <th className="p-4 text-left cursor-pointer" onClick={() => handleHeaderClick("AlertMessage")}>AlertMessage</th>
          </tr>
        </thead>
        <tbody className="">
          {records.map((d: any, i: any) => {
            return (
              <tr key={i} className="border border-gray-300 hover:bg-gray-300">
                <td className="p-4 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[120px] ">
                  {d.DeviceID}
                </td>
                <td className="p-4 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[120px] ">
                  {d.TimeStamp}
                </td>
                <td className="p-4 whitespace-nowrap overflow-hidden overflow-ellipsis">
                  {d.IP}
                </td>
                <td className="p-4">{d.Name}</td>
                <td className="p-4">{d.Location}</td>
                <td className="p-4">{d.Room}</td>
                <td className="p-4">
                  <div className="flex items-center">
                    <p>{d.Status}</p>
                    <GreenLight />
                  </div>
                </td>
                <td className="p-4">{d.AnalyticModule}</td>
                <td className="p-4">{d.AlertMessage}</td>
                {/* <td className="p-4 h-4">
                  <div className="flex justify-between">
                    <button
                      onClick={(e) => ""}
                      className="text-white bg-blue-500 p-2 rounded"
                    >
                      Events
                    </button>
                    <button
                      onClick={(e) => ""}
                      className="text-white bg-blue-500 p-2 rounded"
                    >
                      Alerts
                    </button>
                  </div>
                </td> */}
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
            <button
              onClick={prePage}
              className="border rounded border-gray-300 p-2 mx-1"
            >
              {`< Prev`}
            </button>
            
            <button
              onClick={nextPage}
              className="border rounded border-gray-300 p-2"
            >
              {`Next >`}
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );

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

export default AlertTable;
