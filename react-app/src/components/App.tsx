import ListGroup from "./ListGroup";

function App() {
  let cities = ["Delhi", "Hyderabd", "Bangalore", "Mysore"];
  let heading = "Cities";

  return (
    <div>
      <ListGroup items={cities} heading={heading}></ListGroup>
    </div>
  );
}

export default App;
