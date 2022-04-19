import React from 'react'

function InputBox(props) {

    let [searchText, SetSearchText] = React.useState("");
    let [numberOfItem, SetnumberOfItem] = React.useState(9);

    const HandleSearchText = (e) => {
        SetSearchText(e.target.value);
        props.setGlobalSearchText(e.target.value);
    }
    const HandlenumberOfItem = (e) => {
        SetnumberOfItem(e.target.value);
        props.setGlobalSearchItem(e.target.value);
    }
    return (
        <>

            <input type="text" className="border rounded py-1 px-1 mx-2" value={searchText}
                   onChange={HandleSearchText}></input>
            <input type="number" className="border rounded py-1 px-1 mx-2" value={numberOfItem}
                   onChange={HandlenumberOfItem}></input>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded">
                Search
            </button>
        </>

    )
}


// function InputBox(){

//     return (

//         <>

//             <button> New </button>
//             <input type="text"></input>
//             <input type="number"></input>
//         </>

//     )
// }
export default InputBox;