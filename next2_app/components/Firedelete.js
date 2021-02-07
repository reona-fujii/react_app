import React, {Component} from 'react'
import firebase from "firebase";
import Router from 'next/router';
import "firebase/storage";

class Firedelete extends Component {
  style = {
    fontSize: "12pt",
    padding: "5px 10px"
  }

  constructor(props) {
    super(props);
    this.state = {
      id_str: '',
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }
  doChange(e) {
    this.setState({
      id_str: e.target.value
    })
  }
  doAction(e) {
    this.deleteFireData();
    Router.push('/fire');
  }
  deleteFireData(){
    let id = this.state.id_str;
    let db = firebase.database();
    let ref = db.ref('sample/' + id);
    ref.remove();
  }
  render(){
    return (<div>
      <table>
        <tbody>
          <tr>
            <th className="label">ID:</th>
            <td><input type="text" placeholder="delete ID:"
              onChange={this.doChange}
              value={this.state.id_str} /></td>
          </tr>
          <tr>
            <th></th>
            <button onClick={this.doAction}>Delete</button>
          </tr>
        </tbody>
      </table>
    </div>)
  }
}

export default Firedelete;