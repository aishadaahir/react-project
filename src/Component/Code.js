import React from 'react'
import './code.css'

function Code() {
  return (
    
    <div class="codeblock">
        <pre class="shiki"  data-language="jsx">{`
            import React from 'react'

            const uname="alia";
            const utype="student";
            const ugender="female";

            function Context(){

                return 
                    <div>
                        <name.provider value=uname> </name.provider>

                        <type.provider value=utype> </type.provider>

                        <gender.provider value=ugender> </gender.provider>
                    </div>
        
            }

            export default Context

        `}</pre>
    </div>
  )
}

export default Code