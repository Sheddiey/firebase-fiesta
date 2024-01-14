import { useEffect, useState } from "react";
import Auth from "./Components/Auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config/firebase";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  // New movie states
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState("");
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);

  // Update Title State
  const [updatedTitle, setUpdatedTitle] = useState("");

  const movieCollectionRef = collection(db, "movies");

  const getMovieList = async () => {
    try {
      const data = await getDocs(movieCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMovie = async (id) => {
    try {
      const movieDoc = doc(db, "movies", id);
      await deleteDoc(movieDoc);
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };

  

  const onSubmitMovie = async () => {
    try {
      await addDoc(movieCollectionRef, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        receivedAnOscar: isNewMovieOscar,
      });
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };

  const updateMovietitle = async (id) => {
    try {
      const movieDoc = doc(db, "movies", id);
      await updateDoc(movieDoc, {
        title: updatedTitle
      });
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div>
      <Auth />

      <div>
        <input
          type="text"
          placeholder="Movie title..."
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Release date..."
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={isNewMovieOscar}
          onChange={(e) => setIsNewMovieOscar(e.target.checked)}
        />
        <label htmlFor="">Received an Oscar</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>

      <div>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p>Date: {movie.releaseDate}</p>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>

            <input
              type="text"
              placeholder="new title..."
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <button onClick={() => updateMovietitle(movie.id)}>Update Title</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
