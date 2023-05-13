import { Link, useLocation } from "react-router-dom";

export const Sidebar = ({ users }) => {
  const smth = useLocation();

  return (
    <div className="border-end p-3 vh-100">
      <div className="d-flex gap-2 mb-3">
        <input
          className="form-control"
          placeholder="Add new contact"
          type="text"
        />
        <Link to={"/add"} className="btn btn-outline-success">
          New
        </Link>
      </div>
      {users.length > 0 ? (
        <ul className="list-unstyled list-group">
          {users.map((user) => (
            <li
              style={{ cursor: "pointer" }}
              className="list-group-item list-group-item-action"
              key={user.id}
            >
              <Link
                style={{
                  textDecoration: "none",
                }}
                to={`contact/${user.id}`}
                className="text-dark"
              >
                {user.fullName}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h5>Contacts Not Found</h5>
      )}
    </div>
  );
};
