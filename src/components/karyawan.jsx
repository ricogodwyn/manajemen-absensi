import { useEffect } from "react";

import { getUserCount } from "../apiClient/apiHandler";

const fetchUserCount = async () => {
  try {
    const response = await getUserCount();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
export default function Karyawan() {
  useEffect(() => {
    fetchUserCount();
  }, []);
  return (
    <>
      <div id="content" className="p-4 sm:ml-64">
        <h1 className="text-xl">Karyawan</h1>
        <div className="grid grid-cols-12 gap-3 my-5">
          <div
            id="card"
            className="col-span-6 sm:col-span-3 p-3 bg-blue-200 shadow-md rounded-md flex flex-col items-center cursor-pointer"
            onClick={() => {
              console.log("hello world");
            }}
          >
            <img
              className="h-30 w-30 rounded-full sm:mx-0 sm:shrink-0 object-cover "
              src="../src/assets/photo.jpg"
            ></img>
            <div className="mt-3 break-words w-full text-center">Patrick</div>
          </div>
        </div>
      </div>
    </>
  );
}
