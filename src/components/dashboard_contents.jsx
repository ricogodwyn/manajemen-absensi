import { useEffect, useState } from "react";
import { getUserCount } from "../apiClient/apiHandler";

export default function DashboardContents() {
  const [Dept, setDept] = useState();
  const [User, setUser] = useState();

  const fetchUserCount = async () => {
    try {
      const response = await getUserCount();
      console.log(response.data);
      setDept(response.data.dept_count);
      setUser(response.data.user_count);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUserCount();
  }, []);

  return (
    <>
      <div
        id="content"
        className="p-4 sm:ml-64 h-lvh dark:bg-gray-900 dark:text-white"
      >
        <h1 className="text-xl">Data Karyawan</h1>
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className=" col-span-6 sm:col-span-3 bg-blue-200 dark:bg-gray-700 flex flex-col items-center p-3 rounded-lg shadow-md">
            <div className="mb-1">Jumlah Karyawan</div>
            <div className="text-4xl">{User}</div>
          </div>
          <div className="col-span-6 sm:col-span-3 bg-blue-200 dark:bg-gray-700 flex flex-col items-center p-3 rounded-lg shadow-md">
            <div className="mb-1">Jumlah Departemen</div>
            <div className="text-4xl">{Dept}</div>
          </div>
        </div>
      </div>
    </>
  );
}
