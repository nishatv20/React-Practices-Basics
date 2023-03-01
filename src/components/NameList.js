import React from 'react'

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
id: 1,
name:'Bruce',
age: 30,
skill: 'React'
    },
    {
        id: 2,
        name:'Clark',
        age: 30,
        skill:'Angular'
    },
    {
        id:3,
        name:'Diana',
        age: 31,
        skill: 'Vue'
    }
]
    const personList =persons.map(person=> <h2>{ "ID number" + person.id + " is " + person.name + " aged " + person.age + " and knows " + person.skill}</h2>)
  return (
    <div>{personList}</div>
  )
}

export default NameList