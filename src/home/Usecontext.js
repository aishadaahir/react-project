import React from 'react'
import { useContext } from 'react'
import {name,type,gender} from '../Context'


function Usecontext() {
    const uname= useContext(name)
    const utype= useContext(type)
    const ugender= useContext(gender)

  return (


    <div>
    <h1 class="css-1cblbkl">UseContext</h1>
    <div class="learn">
    <p class="intro">
    “useContext” hook is used to create common data that can be accessed throughout 
    the component hierarchy without passing the props down manually to each level. 
    Context defined will be available to all the child components without involving “props”.
    </p>
    </div>

    <div class="learn">
    <h3 class="what"> Example</h3>
    <p class="intro">
    i am using usecontext to get this variables from another component with out props.
    </p>
    </div>

    <div>
        <h1>username:{uname}</h1>
        <h1>usertype:{utype}</h1>
        <h1>usergender:{ugender}</h1>
        
    </div>
    <h3 class="what"> this component</h3>
  <div class="codeblock">
    <pre class="shiki"  data-language="jsx">{`

        import React from 'react'
        import { useContext } from 'react'
        import {name,type,gender} from '../Context'

        function Usecontext() {
            const uname= useContext(name)
            const utype= useContext(type)
            const ugender= useContext(gender)
        }

        return (
            <div>
                <h1>username:{uname}</h1>
                <h1>usertype:{utype}</h1>
                <h1>usergender:{ugender}</h1>
            </div>
            
        )
                
    
        }

        export default UseContext

    `}</pre>
</div>

<h3 class="what"> the other component</h3>
  <div class="codeblock">
    <pre class="shiki"  data-language="jsx">{`

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

    `}</pre>
</div>
</div>




  )
}

export default Usecontext