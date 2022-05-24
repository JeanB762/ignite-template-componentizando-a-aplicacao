import { ISideBar } from "../types/Types";
import { Button } from "./Button";

export function SideBar(props: ISideBar) {
  return (
    <>
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>

        <div className="buttons-container">
          {props.genres.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.setSelectedGenreId(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
