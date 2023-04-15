import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let cities = ["Delhi", "Hyderabd", "Bangalore"];

  function handleClick(event: MouseEvent) {
    console.log(event);
  }

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
          <li className="list-group-item" key={city} onClick={handleClick}>
            {city}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
