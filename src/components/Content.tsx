import { MovieProps } from "../types/Types";
import { MovieCard } from "./MovieCard";

export function Content(props: { movies: MovieProps[] }) {
  return (
    <>
      <div className="container">
        <main>
          <div className="movies-list">
            {props.movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
