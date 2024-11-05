import "./App.css";
import Card from "./cards";
import bugatti from "./images/bugatti.jpg";
import koenigsegg from "./images/koenigsegg.jpg";
import porsche from "./images/porsche.jpg";

function App() {
  return (
    <>
      <div className="card-wrapper">
        <Card image={bugatti} title="Bugatti" description="This is a f*cking bugatti"/>
        <Card image={koenigsegg} title="Koenigsegg" description="This is a f*cking koenigsegg"/>
        <Card image={porsche} title="Porsche" description="This is a f*cking porsche"/>
      </div>
    </>
  );
}

export default App;
