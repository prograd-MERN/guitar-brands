import React,{useState} from 'react'
const GuitarComponents = () => {

    const [guitar,setGuitar]=useState({
        Brand :'yamaha',
        Model :'electra'})

  return (
    <React.Fragment>
            <div id='whole-container'><span>If you want to change the guitar model click here --- </span>
            <button onClick={  ()=>setGuitar({...guitar,Model:'stanminos'})}>ChangeModel</button>
  <p>{guitar.Brand}</p>
  <p>{guitar.Model}</p>
  </div>
    </React.Fragment>
  )
}

export default GuitarComponents