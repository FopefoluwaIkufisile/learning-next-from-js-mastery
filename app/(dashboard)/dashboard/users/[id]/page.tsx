import React from 'react'

const page = ({params} : {params :{id : string}}) => {

    const {id} = params
  return (
    <h1>User Details : {id}</h1>
  )
}

export default page