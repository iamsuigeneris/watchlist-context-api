import React,{useContext} from 'react'
import { GlobalContext } from "../context/GlobalState"

export const MovieControls = ({movie, type}) => {
    const {removeMovieFromWatchList, addMovieToWatched, moveToWatchList,removeFromWatched} = useContext(GlobalContext)
    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="crtr-btn"  onClick={() => addMovieToWatched(movie)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button onClick={() => removeMovieFromWatchList(movie.id)}
                        className="crtr-btn">
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
            {type === "watched" && (
                <>
                    <button className="crtr-btn" onClick={() => moveToWatchList(movie)}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>

                    <button className="crtr-btn" onClick={() => removeFromWatched(movie.id)}>
                    <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    )
}
