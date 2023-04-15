import { Fragment } from "react";

function ListGroup() {
  const cities = ["Delhi", "Hyderabd", "Bangalore"];

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
