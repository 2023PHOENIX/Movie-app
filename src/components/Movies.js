import React from 'react';
import InputBox from './MoviesComponent/InputBox';
import MoviesTable from './MoviesComponent/MoviesTable';
import Pagenation from './MoviesComponent/Pagenation';

/*
    Take search value from inputBox component
    filter from movies Table.
 */
function Movies() {
    let [searchText, setSearchText] = React.useState("");
    let [noOfItem, setnoOfItem] = React.useState(9);


    const setGloabalItem = (items) => {
        console.log("no => " + items);
        setnoOfItem(items);
    }

    const setGlobalSearchText = (searchText) => {

        console.log(" movies => " + searchText);
        setSearchText(searchText);
    }


    return (<div>

            <InputBox setGlobalSearchText={setGlobalSearchText} setGlobalSearchItem = {setGloabalItem}> </InputBox>
            <MoviesTable searchText={searchText} noOfItem = {noOfItem}></MoviesTable>
            <Pagenation></Pagenation>

        </div>
    )
}

export default Movies;


// InputBox MoviesTable Pagenation