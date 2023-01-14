import React,{Component} from 'react'
import axios from "axios";

export default class CreateUser extends Component {

  constructor(props) {
    super(props)

    this.onChengeUsername = this.onChengeUsername.bind(this);
  
    this.onSubmit = this.onSubmit.bind(this)

    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this)

    this.state = {
      username: '',
    }
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  onChengeUsername(e) {
    this.setState({
      username: this.capitalizeFirstLetter(e.target.value.trim())
    })
  }



  onSubmit(e) {
    
    e.preventDefault()

    const user = {
      username: this.state.username,
    }
    
  

    axios.post("https://exercise-tracker-app-api.onrender.com/users/add",user)
    .then(res => console.log(res.data))

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Username:  </label>
            <input type='text' 
            className='form-control'
            required
            value={this.state.username}
            onChange={this.onChengeUsername}
            />
          <div className='form group'>
            <input type="submit" value="Create" className="btn btn-dark btn-corr" />
          </div>
          </div>
          
        </form>
      </div>
    )
  }
}
