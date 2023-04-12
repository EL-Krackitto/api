import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'

function UserList() {
  const [value, setValue] = useState("")
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
.then(function (response) {
    setValue(response.data);
})
},[])
console.log(value);
if(value.length>0){
    return(
        <div>{value.map(x=><p>{x.name}</p>)}</div>
    )
}
}
export default UserList