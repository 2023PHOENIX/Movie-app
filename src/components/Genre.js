import React, {useEffect, useState} from 'react'

function Genre(props) {
    let [isLoaded, setLoaded] = useState(true);
    let [content, setContent] = useState([]);

    const changeGenre = (e) => {
        let x = e.target.innerText;
        props.setGlobalGenre(x);
    }
    useEffect(() => {
        async function fetchGenre() {
            let response = await fetch('https://react-backend101.herokuapp.com/genres');
            response = await response.json();
            setContent(response);
            setLoaded(false);
        }

        fetchGenre();
    }, []);


    return (


        <div className="Genre">

            {isLoaded ? <div>Loading...!!!</div> : <div>


                <div className="mr-6 border-2 w-40 text-center h-10 border-t-0">All Genre</div>


                {content.genres.map(function (cat) {
                    return <div key = {cat._id} className="mr-6 border-2 w-40 text-center h-10 align-top"
                                onClick={changeGenre}> {cat.name} </div>
                })
                }

            </div>
            }
        </div>
    )
}

export default Genre


/*
  TODO: Find the genre of all the movies from the backend.
  https://react-backend101.herokuapp.com/genres
 */