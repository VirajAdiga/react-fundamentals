import { Fragment } from "react";

function ListGroup() {
  let cities = ["Delhi", "Hyderabd", "Bangalore"];
  cities = [];

  if (cities.length === 0)
    return (
      <Fragment>
        <h1>List</h1>
        <p>No itesms</p>
      </Fragment>
    );

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
