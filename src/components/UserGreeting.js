import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggeIn: false
              }
    }

    render() {
return (
    this.state.isLoggeIn ? 
    <div>Welcome nishatVERMA</div> :
    <div>Welcome guest</div>
)
    }
}
    export default UserGreeting
//   render() {

//   }
//     // let message
//     // if(this.state.isLoggeIn){
//     //     message = <div>Welcome Nishat</div>
//     // }
//     // else {
//     //     message = <div>Welcome guest</div>
//     // }
//     // return<div>{message}</div>
// }
//     // if(this.state.isLoggeIn) {
//     //     return (
//     //         <div>
//     //             Welcome Nishat
//     //         </div>
//     //     )
//     // }
//     // else {
//     //     return(
//     //         <div>
//     //             Welcome Guest
//     //         </div>
//     //     )
    
// //     return ( <div>
// // <div>Welcome Nishat</div>
// // <div>Welcome Guest</div>
// //     </div>
      
// //     )
  

