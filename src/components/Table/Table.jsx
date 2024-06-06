import React from "react";
import { data } from "../../constant/constant";

const Table = () => {
  return (
    <div className="w-full flex-col ">
      <div className="mx-auto font-bold text-[32px] leading-9 w-[78%]">
        <h3 className="">
          Complete compare <span className="text-[#FF8A00]">Feature</span>
        </h3>
      </div>
      <table className="border-6 border-solid w-fit mx-auto mt-5 border-collapse outline outline-1 outline-[#457B9D] overflow-hidden text-center rounded-lg">
        <thead className="">
          <tr className="border-b border-[#87C9CA] text-left text-3xl text-[#000624]">
            <th className="px-2 py-4 border border-[#87C9CA] ">Plan Name</th>
            <th className="px-5 text-center">
              Neev
              <span className="text-sm font-normal block">
                Automated Operations
              </span>
            </th>
            <th className="py-5 px-5 border border-[#87C9CA] text-center ">
              Pragati
              <span className="text-sm font-normal block">
                Foster Donor Relationships
              </span>
            </th>
            <th className="p-2 border border-[#87C9CA] text-center">
              Udaan
              <span className="text-sm font-normal block">
                Advanced Fundraise
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, index) => (
            <tr key={index} className="border-b border-[#87C9CA]">
              <td
                className="p-2 py-4 border border-[#87C9CA] text-left font-light text-[#000624] "
              >
                {rowData.main}
              </td>
              <td className="p-2 border border-[#87C9CA] text-center">
                {rowData.free === "✔" ? (
                  <span className="text-[#3CA4B7]">&#x2713;</span>
                ) : (
                  rowData.free
                )}
              </td>
              <td className="p-2 border border-[#87C9CA] text-center">
                {rowData.price_month === "✔" ? (
                  <span className="text-[#3CA4B7]">&#x2713;</span>
                ) : (
                  rowData.price_month
                )}
              </td>
              <td className="p-2 border border-[#87C9CA] text-center">
                {rowData.ud_price === "✔" ? (
                  <span className="text-[#3CA4B7]">&#x2713;</span>
                ) : (
                  rowData.ud_price
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;