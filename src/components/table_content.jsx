import { useEffect, useState } from "react";
import { fetchDataTable } from "../apiClient/apiHandler";
import { useNavigate } from "react-router-dom";

// offset = (page-1) * 20

export default function TableContent() {
  const [TotalPage, setTotalPage] = useState(0);
  const [Page, setPage] = useState(1);
  const [Datas, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  let dataCount = 0;
  const limit = 10;
  const navigate = useNavigate();
  const fetchCheckInOut = async (offset, search, date) => {
    try {
      setLoading(true);
      const response = await fetchDataTable(offset, search, date);
      console.log(response);
      dataCount = parseInt(response.data.data_count, 10); // Convert to integer
      console.log(dataCount);
      setTotalPage(Math.ceil(dataCount / limit));

      setData(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const formatDateTimeToDate = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateTimeString).toLocaleDateString("en-US", options);
  };
  const formatDateTimeToHour = (dateTimeString) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return new Date(dateTimeString).toLocaleTimeString("en-US", options);
  };
  useEffect(() => {
    let newOffset = (Page - 1) * limit;
    fetchCheckInOut(newOffset, "", "2024-07-25");
  }, [Page]);

  const handleNext = () => {
    console.log("clicked next");
    if (Page < TotalPage) {
      console.log("next");
      setPage((prev) => prev + 1);
    } else {
      console.log("condition failed");
    }
  };
  const handlePrev = () => {
    if (Page > 1) {
      setPage((prev) => prev - 1);
      console.log("prev");
    }
  };
  const handleToTableId = (id) => {
    navigate(`/table-content/${id}`);
  };

  return (
    <>
      <div id="content" className="p-4 sm:ml-64 dark:bg-gray-900 h-lvh">
        {Loading ? (
          <div className="dark:text-white">Loading</div>
        ) : (
          <>
            <h1 className="text-xl dark:text-white">Tabel Data Absensi</h1>
            <div className="relative overflow-x-auto mt-5 rounded-lg ">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      User ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Hour
                    </th>
                    <th scope="col" className="px-6 py-3">
                      In/out
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Datas.map((data) => (
                    <tr
                      key={data.ID}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                    >
                      <th
                        scope="row"
                        className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap cursor-pointer hover:opacity-60 ${
                          data.Name ? "dark:text-white" : "text-red-400"
                        }`}
                        onClick={() => {
                          handleToTableId(data.userid);
                        }}
                      >
                        {data.Name ? data.Name : "Nama Kosong"}
                      </th>
                      <td className="px-6 py-4">{data.userid}</td>
                      <td className="px-6 py-4">
                        {formatDateTimeToDate(data.CheckTime)}
                      </td>
                      <td className="px-6 py-4">
                        {formatDateTimeToHour(data.CheckTime)}
                      </td>
                      <td className="px-6 py-4">
                        {data.CheckType == 0 ? "Masuk" : "Keluar"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
        <div className="mt-9 flex justify-end mr-20 items-center dark:text-white">
          <h2 className="">
            showing page {Page} of {TotalPage}
          </h2>
          <button
            onClick={handlePrev}
            disabled={Page == 1}
            className="bg-blue-400 mx-3 p-2 rounded-lg"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={Page == TotalPage}
            className="bg-red-400 p-2 rounded-lg"
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}
