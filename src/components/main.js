import React, {useState} from 'react'
import Genre from './Genre';
import Movies from './Movies';
function main() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [cGenre, setGenre] = React.useState("");

  const setGlobalGenre = (nGenre) => {
    setGenre(nGenre);
    console.log(cGenre);
  }

  return (
  <>

    {/*<div>main</div>*/}


    <div className="flex">

    <Genre setGlobalGenre = {setGlobalGenre}></Genre>
    <Movies cGenre = {cGenre}></Movies>

    </div>

  </>
  )
}

export default main


