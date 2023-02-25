import React from 'react'
import A from './A'
import {name,type,gender} from './Context'
import { useContext } from 'react'

function B() {
    const uname= useContext(name)
    const utype= useContext(type)
    const ugender= useContext(gender)

    
  return (
    <div>
        <h1>username:{uname}</h1>
        <h1>usertype:{utype}</h1>
        <h1>usergender:{ugender}</h1>

    </div>
  )
}

export default B