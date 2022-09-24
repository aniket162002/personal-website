
import {useState} from "react";
function Form(){
    const [name,setName]=useState("")
    const [tnc ,settnc]=useState(false)
    const [interest ,setinterest]=useState("")
    function getFormdata(e){
        console.warn(name,tnc,interest)
e.preventDefault()

    }
    return(
<div>
    <form onSubmit={getFormdata}>
        <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/> <br /> <br />
        <select  onChange={(e)=>setinterest(e.target.value)}>
            <option >Select option</option>
            <option >Marvel</option>
            <option >DC</option>
        </select><br /><br />
        <input type="checkbox"  onChange={(e)=>settnc(e.target.checked)}/><span>Accept terms and conditions</span>
        <br /><br />
        <button type="submit">submit</button>
    </form>
</div>
    );
}
export default Form