import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id,year,title,summary,poster,genres}){

return (
    <div className="movie">
    <Link 
        to={{
          pathname:"/movie-detail",
          state:{
              year,
              title,
              summary,
              poster,
              genres
          }      
    }}>
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 className ="movie__title">{title}</h3>
            <h5 className ="movie__year">{year}</h5>
            <ul className ="movie__genres">
                { genres.map( (genre, index) => (
                    <li key = {index} className ="genres__genre">{genre}</li>
                ))}
            </ul>
            <p  className ="movie__summary">{summary.slice(0,140)}...</p>
        </div>
    </Link>
    </div>
    )
}

/* 
    ** Warning: Each child in a list should have a unique "key" prop.
 -> map 에 있는 각각 item 은 Key 가 필요함 argument 값으로 item 과 index(item number)가 있음. 
    따라서 li 에 key 값을 넣어줘야함 
*/

/* 
   JavaScript 에서의 label for 는 loop 를 의미하기 때문에 -> htmlFor 라고 써주기
*/

Movie.propTypes = {
    id      : PropTypes.number.isRequired,
    year    : PropTypes.node.isRequired,
    title   : PropTypes.string.isRequired,
    genres  : PropTypes.arrayOf(PropTypes.string).isRequired,
    summary : PropTypes.string.isRequired,
    poster  : PropTypes.string.isRequired
};

export default Movie ;