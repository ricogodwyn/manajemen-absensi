import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardContents from "./components/dashboard_contents";

import TableContent from "./components/table_content";
import Karyawan from "./components/karyawan";
import AuthNavigate from "./components/auth_navigate";

import Login from "./components/login";
import Layout from "./components/Layout";
import TableContentID from "./components/table_content_id";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/"
              element={
                <AuthNavigate>
                  <DashboardContents />
                </AuthNavigate>
              }
            ></Route>
            <Route path="/table-content" element={<TableContent />}></Route>
            <Route path="/karyawan" element={<Karyawan />}></Route>
            <Route
              path="/table-content/:userId"
              element={<TableContentID />}
            ></Route>
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
