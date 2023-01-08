import React, { Component } from 'react'
import axios from "axios";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default class CreateExsercise extends Component {

  constructor(props) {
    super(props)

    this.onChengeUsername = this.onChengeUsername.bind(this);
    this.onChengeDuration = this.onChengeDuration.bind(this);
    this.onChengeDescription = this.onChengeDescription.bind(this);
    this.onChengeDate = this.onChengeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {

    axios.get("http://localhost:5000/users")
    .then(res => {
      if(res.data.length>0){
        this.setState({
      users: res.data.map(user =>user.username),
      // username: res.data[0].username
    })
      }
    })


    
  }

  onChengeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChengeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChengeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }
  onChengeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    
    e.preventDefault()

    const exsercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    }
    
    console.log(exsercise)

    axios.post("http://localhost:5000/exsercises/add",exsercise)
    .then(res => console.log(res.data))

    window.location = '/'
  }

  render() {
    return (
      <div>
        <h3>Create New Exsercise</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            
            <select
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChengeUsername}
              >
              <option  value= '' disabled default>Select active user:</option>
              {
                this.state.users.map((user) => {
                  return <option
                    key={user}
                    value={user}>
                      {user}
                  </option>
                })
              }
            </select>
          </div>
          <div className='form-group'>
            <label>Description: </label>
            <input type="text"
              placeholder='What exsercise?'
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChengeDescription}
            />
          </div>
          <div className='form-group'>
            <label>Duration (min): </label>
            <input type="number"
            min='1'
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChengeDuration}
            />
          </div>
          <div className='form-group'>
            <label>Date:</label>
            <div>
              
              <DatePicker
                selected={this.state.date}
                onChange={this.onChengeDate}
                
              />
            </div>
          </div>
          <div className='form group'>
            <input type="submit" value="Create Exercise Log" className="btn btn-dark btn-corr" />
          </div>

        </form>
      </div>
    )
  }
}

