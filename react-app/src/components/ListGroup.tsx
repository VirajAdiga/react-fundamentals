import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface ListGroupProps {
  items: String[];
  heading: String;
  onSelectItem: (item: String) => void;
}

function ListGroup(props: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function handleClick(event: MouseEvent) {
    console.log(event);
  }

  if (props.items.length === 0)
    return (
      <Fragment>
        <h1>{props.heading}</h1>
        <p>No itesms</p>
      </Fragment>
    );

  return (
    <Fragment>
      <h1>{props.heading}</h1>
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
