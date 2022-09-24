// import logo from './logo.svg';
import './App.css';
// import User from './User';
import React,{useState} from 'react'
function App() {
  const [data,setData]=useState(null)//example of states
  const [print,setPrint]=useState(false)//example of states
  // // let data = "ANiket shinde"
  // function apple(){
  //   setData(data+1)
  // }
//     function getData(val){
// // console.warn(val.target.value)
// setData(val.target.value)
//   }
  return (
    <div className="App">
      {
        print?
        <h1>Hello {data}</h1>
          :null
      }
     {/* <User name={data}/>  //example of props */}

     {/* <button onClick={apple}>Update me</button> */}
     {/* <button onClick={()=>{setData("shinde")}}> update name</button> */}
     {/* <input type="text"  onChange={getData}/>
     <button onClick={()=>setPrint(true)}>data</button> */}




    </div>
  );
}

export default App;
