import { Fragment, useState } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let cities = ["Delhi", "Hyderabd", "Bangalore"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

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
        {cities.map((city, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => setSelectedIndex(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
