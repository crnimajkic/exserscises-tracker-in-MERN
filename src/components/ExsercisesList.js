
import React,{Component} from 'react'
import axios from "axios";
import Exsercise from './Exsercise';



export default class ExsercisesList extends Component {
  constructor(props){
    super(props)

    this.deleteExsercise = this.deleteExsercise.bind(this)
    this.exsercisesList = this.exsercisesList.bind(this)
    this.state = {exsercises: []}
  }

  componentDidMount(){
    axios.get('https://exsercise-tracker.onrender.com/exsercises')
    .then(res => {
      this.setState({exsercises: res.data})
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  deleteExsercise(id){
    axios.delete('https://exsercise-tracker.onrender.com/exsercises/'+ id)
    .then(res => {
      console.log(res.data)
      this.setState({exsercises:this.state.exsercises.filter(exsercise => exsercise._id !== id)})
    })
    .catch((err) => console.log(err))
  }

  exsercisesList(){
    return this.state.exsercises.map(currentExsercise =>{
      return <Exsercise exsercise={currentExsercise} deleteExsercise={this.deleteExsercise} key={currentExsercise._id} />
    })
  }

   render(){
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className='table'>
          <thead>
            <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              { this.exsercisesList() }
          </tbody>
        </table>
      </div>
    )
  }
}
