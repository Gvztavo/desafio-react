import React from "react"
import './home.css';

function Registros () {

  const name = JSON.parse(localStorage.getItem('data'))

  function test () {
    
    const disable = JSON.parse(localStorage.getItem('disable'))
    if(disable === true){
      return <table className="alo">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Species</td>
      <td>Status</td>
    </tr>

      {name.map((item)=>
      <tr>
       <td>{item.id}</td>
       <td>{item.name}</td>
      <td>{item.species}</td>

  
    <td>{item.status}</td>
    </tr>
  
    )}
    </table> 
    }
    return <div className="record">Sem registros</div>
  }

  return (
  <div className="recordMain">
   {test()}
  </div>

  )
}

export default Registros;