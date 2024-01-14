import { useEffect, useState } from "react";
import Auth from "./Components/Auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const movieCollectionRef = collection(db, "movies");

  const getMovieList = async () => {
    try {
      const data = await getDocs(movieCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() =>{
    getMovieList()
  }, [])

  return (
    <div>
      <Auth />
      <div>
      {movieList.map((movie) => (
        <div>
          <h1 style={{color: movie.receivedAnOscar ? 'green' : 'red'}}>{movie.title}</h1>
          <p>Date: {movie.releaseDate}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default App;
