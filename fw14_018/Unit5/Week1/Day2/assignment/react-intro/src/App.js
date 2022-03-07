import './App.css';

function App() {

  let title1 = "Mobile Operating System"
  let title2 = "Mobile manufacturer"
  let arr1 = ["Android","Blackberry","Iphone","Window Phone"]
  let arr2 = ["Samsung","HTC","Micromax","Apple"]

  return (
    <div className="App">
    <ListCreator title={title1} arr={arr1}/>
    <ListCreator title={title2} arr={arr2}/>
    </div>
  );
}

function ListCreator({title,arr}) {
  return (
    <div>
      <h2> {title} </h2>
      <ul>
        
      {arr.map((item)=> <li> {item}</li> )}
      </ul>
    </div>
  )
}

export default App;