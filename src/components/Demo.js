import React, { Component } from 'react'
class Demo extends Component {

    constructor(props) {
        super(props) 

        this.state = {
        message : 'Hello Nishat Verma !'
        }
    }

    changeMessage(){
        this.setState ({
            message: 'Please Log in to continue'
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Click Here</button>
            </div>
        )
    }
}
export default Demo