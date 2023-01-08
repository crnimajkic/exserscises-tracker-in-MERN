import React from 'react'
import {Link} from 'react-router-dom'

function Exsercise(props) {
  return (
    <tr>
      <td><div className='username'>{props.exsercise.username}</div></td>
      <td>{props.exsercise.description}</td>
      <td>{props.exsercise.duration} min</td>
      <td>{props.exsercise.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.exsercise._id}><i className="fas fa-edit"></i></Link>  |  <a href='#' onClick={()=> {props.deleteExsercise(props.exsercise._id)}}><i className="fa-solid fa-trash-can"></i></a>
      </td>
    </tr>
  )
}

export default Exsercise

