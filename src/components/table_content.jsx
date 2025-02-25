import { useEffect, useState } from "react";
import { fetchDataTable } from "../apiClient/apiHandler";

export default function TableContent() {
  const [Posts, setPosts] = useState([]);
  const [Page, setPage] = useState(1);
  const [TotalPage, setTotalPage] = useState(1);
  const Limit = 25;
  const fetchPosts = async (Limit, Page) => {
    try {
      const response = await fetchDataTable(Limit, Page);
      console.log(response);
      setPage(response.data.page);
      setTotalPage(response.data.totalPages);
      setPosts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts(Limit, Page);
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

  return (
    <>
      <div id="content" className="p-4 sm:ml-64">
        <h1 className="text-xl">Tabel Data Absensi</h1>
        <h2>data</h2>
        <div>
          <ul>
            {Posts.map((post) => (
              <li key={post.id}>{post.country}</li>
            ))}
          </ul>
          <button
            onClick={handleNext}
            disabled={Page == TotalPage}
            className="bg-red-400"
          >
            next
          </button>
          <button
            onClick={handlePrev}
            disabled={Page == 1}
            className="bg-blue-400 ml-2"
          >
            Previous
          </button>
        </div>
      </div>
    </>
  );
}
