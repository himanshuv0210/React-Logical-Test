import React, { useState } from "react";

function APIget() {

const [data, setdata] = useState();

// Q4. Fertch the  data  from Api 
const fetchapi = () => {
    fetch('https://my-json-server.typicode.com/typicode/demo/posts')
    .then( (response)=> response.json())
    .then( (json) => { console.log(json); setdata(json); });

}

return (
    <div >
        <h1>Q4. Fetch API </h1>
        <button onClick={fetchapi}> Click here </button>
        <br/> 
        <h1><pre> {JSON.stringify(data, null, 2)} </pre></h1>
       <hr></hr>
        <h1>Q5. sorted dictionary object is displayed on Console</h1>
    </div>
)
}

export default APIget;