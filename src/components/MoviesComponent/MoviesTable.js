import React, {useEffect, useState} from 'react'

function MoviesTable(props) {

    let [isLoaded, setLoaded] = React.useState(true);
    let [content, setContent] = React.useState([]);


    // TODO: IMP searching... no state change

    useEffect(() => {
        async function fetchData() {
            let response = await fetch('https://react-backend101.herokuapp.com/movies');
            response = await response.json();
            setContent(response);
            setLoaded(false);
        }

        fetchData();
    }, [])


    const deleteMovie = (movieId) => {
        let restOfMovies = content.movies.filter((movie) => {
            return movie._id !== movieId;
        });
        // use spread because maybe there are many other fields.
        let newObject = {...content,movies : restOfMovies};
        setContent(newObject)
    }

    let newFilteredContent = [];
    if (props.searchText !== "") {
        newFilteredContent = content.movies.filter((movie) => {
            return movie.title.toLowerCase().includes(props.searchText.toLowerCase());
        });
    } else {
        newFilteredContent = content.movies;
    }

    if (newFilteredContent) {
        newFilteredContent = newFilteredContent.slice(0, props.noOfItem);


    }


    if (props.cGenre !== "") {
        console.log(props.cGenre);
        newFilteredContent = newFilteredContent.filter(movie =>
        {
            return movie.genre.name.trim() === props.cGenre.trim();
        })

    }

    return <div>
        {isLoaded ? <div> Loading...!! </div> : <table>

            <thead>
            <tr>
                <th className="px-2"> #</th>
                <th className="px-2"> Title</th>
                <th className="px-2"> Genre</th>
                <th className="px-2"> Stock</th>
                <th className="px-2"> Rate</th>
            </tr>
            </thead>
            <tbody>
            {newFilteredContent.map(function (movie, index) {
                return <tr key = {movie._id}>
                    <td className="px-2 text-center">{index + 1}</td>
                    <td className="px-2 text-center">{movie.title}</td>
                    <td className="px-2 text-center">{movie.genre.name}</td>
                    <td className="px-2 text-center">{movie.numberInStock}</td>
                    <td className="px-2 text-center">{movie.dailyRentalRate}</td>
                    <td>
                        <button onClick={()=>{
                        deleteMovie(movie._id);
                        }
                        } class="bg-red-500 hover:bg-red-700 text-white font-bold py-0.5 px-1 rounded-full">
                            delete
                        </button>
                    </td>

                </tr>
            })}
            </tbody>
        </table>}
    </div>

}

export default MoviesTable


/*
 const [isLoaded,setLoaded] = React.useState(true);
  const [content,setContent] = React.useState([]);

  useEffect(()=> {
    async function fetchData(){
      let response = await fetch('https://react-backend101.herokuapp.com/movies');
      // response = await response.json();
      // console.log(JSON.stringify(response));
      setContent(response);
      setLoaded(false);
    }

    fetchData();
  },[]);

  return (
    <div>
    {isLoaded ? <div> Loading.. </div> :
     <div>
      <p>


      </p>

      </div>
    }
    </div>
  )
 */