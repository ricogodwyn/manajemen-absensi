import { useEffect, useState } from "react";
import { fetchDataTableID } from "../apiClient/apiHandler";
import { useParams } from "react-router-dom";

// offset = (page-1) * 20

export default function TableContentID() {
  const [TotalPage, setTotalPage] = useState(0);
  const [Page, setPage] = useState(1);
  const [Datas, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  let dataCount = 0;
  const limit = 10;
  const userId = useParams();
  const fetchCheckInOutPerId = async (id, offset, search) => {
    try {
      setLoading(true);
      const response = await fetchDataTableID(id, offset, search);
      console.log(response.data);
      dataCount = parseInt(response.data.data_count, 10); // Convert to integer
      console.log(dataCount);
      setTotalPage(Math.ceil(dataCount / limit));

      setData(response.data);
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
    fetchCheckInOutPerId(userId.userId, newOffset, "", "2024-07-25");
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
  console.log(Datas.user_info);
  return (
    <>
      <div
        id="content"
        className="p-4 sm:ml-64 h-full dark:bg-gray-900 dark:text-white"
      >
        {Loading ? (
          <div>Loading</div>
        ) : (
          <>
            <h1 className="text-xl">Tabel Data Absensi</h1>
            <div className="w-full dark:bg-gray-700 mt-5 p-4 rounded-lg bg-blue-200">
              <h1>
                Nama: {Datas.user_info.Nama ? Datas.user_info.Nama : "Kosong"}{" "}
              </h1>
              <h1>
                User ID:{" "}
                {Datas.user_info.userid ? Datas.user_info.userid : "Kosong"}{" "}
              </h1>
              <h1>
                Departemen:{" "}
                {Datas.user_info.DeptName ? Datas.user_info.DeptName : "Kosong"}{" "}
              </h1>
              <h1>
                Nomor Kartu:{" "}
                {Datas.user_info.Cardnum ? Datas.user_info.Cardnum : "Kosong"}
              </h1>
            </div>
            <div className="relative overflow-x-auto mt-5 rounded-lg ">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Hour
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Datas.time.map((data) => (
                    <tr
                      key={data.CheckTime}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                    >
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
        <div className="my-9 flex justify-end mr-20 items-center dark:text-white">
          <h2>
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
