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


    const setGlobalSearchText = (searchText) => {

        console.log(" movies => " + searchText);
        setSearchText(searchText);
    }


    return (<div>

            <InputBox setGlobalSearchText={setGlobalSearchText}> </InputBox>
            <MoviesTable searchText={searchText}></MoviesTable>
            <Pagenation></Pagenation>

        </div>
    )
}

export default Movies;


// InputBox MoviesTable Pagenation