import React, { Component } from 'react'

export default class person extends Component {
    state={
        fullName:'',
        bio:'',
        imgSrc:'',
        profession:'',
      }
    render() {
        return (
            <div>
                <label for='name'>fullName:</label><input id='fullName' name='fullName' type='text' onChange={this.handleChange}></input>
        <label for='bio'>bio:</label><input id='bio' name='bio' type='text' onChange={this.handleChange}></input>
        <label for=' imgSrc'> imgSrc:</label><input  id='imgSrc' name='imgSrc' type='text' onChange={this.handleChange}></input>
        <label for='profession'>profession:</label><input id='profession' name='profession' type='text' onChange={this.handleChange}></input>
        <div>
          <p>{this.state.fullName}</p>
          <p>{this.state.bio}</p>
          <p>{this.state.imgSrc}</p>
          <p>{this.state.profession}</p>
         
        </div>
            </div>
        )
    }
}
