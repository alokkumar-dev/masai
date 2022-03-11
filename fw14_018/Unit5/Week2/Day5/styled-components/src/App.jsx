import { Button, Div } from "./components/buttons";

function App() {
  return (
    <div className="App">
      {/* <h1>Hi React</h1> */}
  
      <Div>
        <Button>Primary Button</Button>
        <Button>Default Button</Button>
        <Button>Dashed Button</Button>
        <Button>Text Button</Button>
        <Button>Link Button</Button>
      </Div>
      
    </div>
  );
}

export default App;
