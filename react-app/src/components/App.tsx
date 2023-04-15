import ListGroup from "./ListGroup";
import Button from "./Button";

function App() {
  let cities = ["Delhi", "Hyderabd", "Bangalore", "Mysore"];
  let heading = "Cities";

  const handleSelectItem = (item: String) => console.log(item);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading={heading}
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <br></br>
      <Button color="dark" onClick={handleClick}>
        Button
      </Button>
    </div>
  );
}

export default App;
