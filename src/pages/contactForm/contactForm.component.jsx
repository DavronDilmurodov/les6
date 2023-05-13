import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const ContactForm = ({ setUsers }) => {
  const navigate = useNavigate();
  const fullName = useRef();
  const phoneNumber = useRef();
  const image = useRef();
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      fullName.current.value = state.fullName;
      phoneNumber.current.value = state.phoneNumber;
      image.current.value = state.image;
      state.fullName = fullName.current.value;
      state.phoneNumber = phoneNumber.current.value;
      state.image = image.current.value;
    }
  }, []);

  const onEdit = () => {
    state.fullName = fullName.current.value;
    state.phoneNumber = phoneNumber.current.value;
    state.image = image.current.value;

    const editedContact = {
      id: state.id,
      fullName: state.fullName,
      phoneNumber: state.phoneNumber,
      image: state.image,
    };

    navigate(`/contact/${state.id}`, {
      state: editedContact,
    });
    // console.log(state);
  };

  const onAdd = (event) => {
    event.preventDefault();

    const newContact = {
      id: uuid(),
      fullName: fullName.current.value.trim(),
      phoneNumber: phoneNumber.current.value.trim(),
      image: image.current.value,
    };

    setUsers((prev) => [...prev, newContact]);
    navigate(`/contact/${newContact.id}`);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <button onClick={() => navigate(-1)} className="btn btn-primary">
          Back
        </button>
        <h2>New Contact</h2>
      </div>
      <form onSubmit={onAdd}>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-4 col-form-label">
            FullName
          </label>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              placeholder="Full Name..."
              ref={fullName}
              required
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-4 col-form-label">
            Phone
          </label>
          <div className="col-8">
            <input
              type="number"
              className="form-control"
              id="inputPassword"
              placeholder="Phone Number..."
              ref={phoneNumber}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-4 col-form-label">
            Image Url
          </label>
          <div className="col-8">
            <input
              type="url"
              className="form-control"
              id="inputPassword"
              placeholder="URL..."
              ref={image}
            />
          </div>
        </div>
        <button className="btn btn-success float-start">Add</button>
        <button
          onClick={onEdit}
          type="button"
          className="btn btn-primary float-end"
        >
          Edit
        </button>
      </form>
    </div>
  );
};
