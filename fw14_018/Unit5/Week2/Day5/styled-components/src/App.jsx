import { Button, Div } from "./components/buttons";

function App() {
  return (
    <div>
  
      <Div>
        <Button type="primary" >Primary Button</Button>
        <Button type="default">Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      
      </Div>
    </div>
  );
}

export default App;
