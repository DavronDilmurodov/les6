export const ErrorPage = () => {
  return (
    <div
      className="main-div bg-secondary bg-opacity-75 d-flex justify-content-center align-items-center flex-column vh-100 w-auto"
      style={{
        minWidth: "100%",
      }}
    >
      <h1
        style={{
          fontSize: "84px",
        }}
        className="pb-5 text-warning"
      >
        Oops...😢
      </h1>
      <h2
        style={{
          fontSize: "72px",
        }}
        className="pb-5 text-danger"
      >
        404
      </h2>
      <h3
        style={{
          fontSize: "50px",
        }}
        className="pb-5 text-warning"
      >
        Page Not Found
      </h3>
    </div>
  );
};
