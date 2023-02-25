import React from 'react'



const uname="alia";
const utype="student";
const ugender="female";

export const name =React.createContext(uname);
export const type =React.createContext(utype);
export const gender =React.createContext(ugender);
function Context() {

  return (
    <div>
        <name.provider value={uname}></name.provider>
        
        <type.provider value={utype}></type.provider>

        <gender.provider value={ugender}></gender.provider>

        
    </div>
  )
}

export default Context