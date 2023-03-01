import React from 'react'

// function Greet() {
// return <h1>Hello Nishat !</h1>
// }
// ------ES 6 Arrow Function--------
const Greet = (props)=>  {
    console.log(props)
 return (
    <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
{props.children}
    </div>

 )
 
 
}
export default  Greet;