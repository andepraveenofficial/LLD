import React from 'react'

const NormalComponent = () => {
  return (
    <div>
        Component
    </div>
  )
}


export const RedComponent = (Component) => {
    return () => 
        (<div style={{color:"orange", backgroundColor:"green"}}>
            <Component />
        </div>)
}

export default NormalComponent
