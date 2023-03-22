import React from 'react'

export default function UserDetails({name,type}) {
  return (
    <div>
        UserDetails
        <h1 data-testid='h101'>{name && name.toUpperCase()}</h1>
        <p>Hi this is Sagar. I am a developer and technical Trainer!!</p>
    </div>
  )
}
