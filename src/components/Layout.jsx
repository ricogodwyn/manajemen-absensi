import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import SidebarContent from "./sidebar_content";

export default function Layout({ children }) {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const location = useLocation();
  const hideSidebarPath = ["/login"];
  const hideSidebar = hideSidebarPath.includes(location.pathname);

  return (
    <>
      {!hideSidebar && <SidebarContent />}
      {children}
    </>
  );
}
