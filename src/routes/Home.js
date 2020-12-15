import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie'
import "./Home.css";


class Home extends React.Component{

  /*
   state 안에 default 값들을 선언할 필요는 없지만,
   선언해두면, , 좋고 setState 에서 추가를 해도 괜찮! 자유!
  */
  state = {
      isLoading : true,
      movies : []
  }

  //비동기처리
  getMovies = async() =>{
    const { data : {
            data : { movies }
         }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); //rating 으로 정렬 (yts_API_List 의 Param 임)
    
    this.setState({movies , isLoading : false }); // movies : movies 각 다른 movies 인데 js 가 알아서 이해함;

    /*
      ES6
      movies.data.data.movies
      -> { data: { data : { movies } } }
    */  

  }

  //Component 생성되고 난 후
  componentDidMount(){

    setTimeout(()=>{
      this.setState({isLoading : false});
    }, 3000);
    
    this.getMovies();

  }

  /*
    YTS에서 만든 API 사용 (https://yts.mx/) 하단 API click
    
    * JSON VIEW 확장보기 사용하면 json 깔끔하게 볼 수 있어욤
      https://yts-proxy.now.sh/list_movies.json //노마드꺼!
      >> yts 경로가 계속 바뀌니까 그러면 에러가 나서 노마드가 에러나지말라고 만들어줌
  */


  /*
   아래는 JSX 이기 때문에 HTML 같아보이나 JSX 즉 JavaScript임
   따라서 Class라고 하면 위의 'class Home ~~' 로 인식 -> class component 때문에 혼란
   section 에서 class를 지정해야하는경우 className 라고 사용해야함
  */

  render(){
    const {isLoading , movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
          <span className="loader__text">Loading ... </span> 
          </div> 
        ) : ( 
          <div className ="movies">  
          { movies.map( movie => (
            <Movie  
              key     = {movie.id} 
              id      = {movie.id} 
              year    = {movie.year} 
              title   = {movie.title} 
              genres  = {movie.genres}
              summary = {movie.summary} 
              poster  ={movie.medium_cover_image} />
        ))
          }
          </div>
        )}       
      </section>
    );
  }

}

/*
  * Axios : fetch 위에 있는 작은 layer (多 사용)
            npm install axios 로 설치해야함!
            cf) :
                  npm install -save prop-types
                  npm i prop=types ( 노마드에서는 이렇게 설치해씀 )
*/

export default Home;

/*
  cloud 에 올리기 위해 gh-pages 를 설치 -> npm install gh-pages

  #gh-pages : 사용자의 웹사이트를 github의 github page 도메인에 나타나게해줌
              *Github 는 무료웹사이트를 제공
              static 웹사이트, HTML,CSS, JAvaScript 웹사이트는 무료로 제공

  - package.json 하단에 homepage 추가 ( gh-pages가 동작하는데 필요 ) 
    homepage : //https://{your github username}.github.io/{the name of your project in github}
  -* homepage 등록 후 'deploy' , 'predeploy' 명령어 생성
     > 'deploy' : build 폴더를 upload
  - npm run build 하면 build 폴더 생성!
    
*/


/*
  * React 추가팁! 새로운거!
  state를 갖기위해 class component 를 가질 필요는 없음 
  Why? react hook 때문! (class component가 구식은 아님!)
       -실전형 react 참고!
*/

/*
  React Router Dom : Navigation 만들어주는 package

*/