import React from 'react'
function sub(x , y){
    return x - y;
}
function higherOrderComp(x, subReference){
    return subReference(x, 10)
}
higherOrderComp(50, sub)

function Hook() {
  return (
    <div>

    </div>
  )
}

export default Hook