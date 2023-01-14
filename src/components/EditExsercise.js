import React, { Component } from 'react'
import axios from "axios";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default class EditExsercise extends Component {

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
    axios.get('https://exercise-tracker-app-api.onrender.com/exsercises/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(res.data.date)
        })
      })
      .catch((err) => console.log(err))


    axios.get("https://exercise-tracker-app-api.onrender.com/users")
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            users: res.data.map(user => user.username),
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

    

    axios.post("https://exercise-tracker-app-api.onrender.com/exsercises/update/" + this.props.match.params.id, exsercise)
      .then(res => console.log(res.data))

    window.location = "/"
  }

  render() {
    return (
      <div>
        <h3>Edit Exsercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username: </label>
            <select
              required
              className='form-control'
              value={this.state.username}
              onChange={this.onChengeUsername}>
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
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChengeDescription}
            />
          </div>
          <div className='form-group'>
            <label>Duration (min): </label>
            <input type="number"
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
            <input type="submit" value="Edit Exercise Log" className="btn btn-dark btn-corr" />
          </div>

        </form>
      </div>
    )
  }
}

