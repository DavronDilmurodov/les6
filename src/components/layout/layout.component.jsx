import { Sidebar } from "./sidebar";

export const Layout = ({ children, users }) => {
  return (
    <div className="d-flex">
      <Sidebar users={users} />
      <div className="p-3">{children}</div>
    </div>
  );
};
