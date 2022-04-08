
import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddMovieForm.module.css";


const AddMovieForm = (props) => {
  const { movies, setMovies } = props;

  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [genre, setGenre] = useState("Drama");
  const [date, setDate] = useState("");
  

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handlePoster = (e) => {
    setPoster(e.target.value);
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: genre,
      poster: poster,
    };

    setMovies([...movies, movie]);
  };

  return (
    <div className={styles.container}>
      <section className={styles.addmovieform}>
        <div className={styles.addmovieform__left}>
          <img className={styles.addmovieform__image} src={poster} alt="" />
        </div>

        <div className={styles.addmovieform__right}>
          <div>
            <form
              onSubmit={handleSubmit}
              className={styles.addmovieform__form}
              action=""
            >
              <div className={styles.addmovieform__formControl}>
                <label htmlFor="title" className={styles.addmovieform__label}>
                  Add Title
                </label>
                <input
                  onChange={handleTitle}
                  type="text"
                  className={styles.addmovieform__input}
                  value={title}
                />
              </div>
              <div className={styles.addmovieform__formControl}>
                <label htmlFor="year" className={styles.addmovieform__label}>
                  Add Year
                </label>
                <input
                  onChange={handleDate}
                  type="text"
                  value={date}
                  className={styles.addmovieform__input}
                />
              </div>
              <div className={styles.addmovieform__formControl}>
                <label htmlFor="type" className={styles.addmovieform__label}>
                  Pilih Genre
                </label>
                <select
                  name="type"
                  id="type"
                  value={genre}
                  onChange={handleGenre}
                  className={styles.addmovieform__selectType}
                >
                  <option value="Thriller">Thriller</option>
                  <option value="Drama">Drama</option>
                  <option value="Survival">Survival</option>
                </select>
              </div>
              <div className={styles.addmovieform__formControl}>
                <label htmlFor="poster" className={styles.addmovieform__label}>
                  Add Poster
                </label>
                <input
                  onChange={handlePoster}
                  type="text"
                  value={poster}
                  className={styles.addmovieform__input}
                />
              </div>
              <div className={styles.addmovieform__formButton}>
                <button className={styles.addmovieform__button}>Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
