import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ErrorPage } from "../errorPage";
import { useEffect, useRef } from "react";

export const Contact = ({ users }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const foundUser = users.find((user) => user.id === id);
  const { state } = useLocation();
  const title = useRef();
  const text = useRef();
  const image = useRef();

  // console.log(state);

  if (!foundUser) {
    return <ErrorPage />;
  }

  const onEdit = () => {
    navigate("/edit", {
      state: foundUser,
    });
  };

  const onPut = () => {
    foundUser.fullName = state.fullName;
    foundUser.phoneNumber = state.phoneNumber;
    foundUser.image = state.image;
  };

  // useEffect(() => {
  //   foundUser.fullName = state.fullName;
  //   foundUser.phoneNumber = state.phoneNumber;
  //   foundUser.image = state.image;
  // }, []);

  return (
    <div className="d-flex">
      <img
        src={foundUser.image}
        alt="image"
        className="img-fluid rounded-3 me-4"
        width={400}
        height={300}
        style={{ objectFit: "cover" }}
        ref={image}
      />
      <div className="card-body d-flex flex-column">
        <h2 ref={title} className="card-title mb-3">
          {foundUser.fullName}
        </h2>
        <p ref={text} className="card-text mb-4">
          Phone Number: <span className="h6">{foundUser.phoneNumber}</span>
        </p>
        <div>
          <button onClick={onEdit} className="btn btn-outline-primary">
            Edit
          </button>
          <button className="btn btn-outline-danger ms-2">Delete</button>
          <button onClick={onPut} className="btn btn-outline-success ms-2">
            PUT
          </button>
        </div>
      </div>
    </div>
  );
};
