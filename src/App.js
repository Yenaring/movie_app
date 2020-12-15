import React from 'react';
import { HashRouter  , Route} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from "./components/Navigation";
import "./App.css";

function App(){
  return <HashRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie-detail" component={Detail}/>
  </HashRouter>
}

export default App;

/* 
  HashRouter 는 react-router-dom 의 한 종류
  react-router-dom 에는 여러 router가 있음 그중에 HashRouter 를 사용

  HashRouter 안에 Route 가 있고,
  Route 안에는 중요한 props가 한개 들어감 -> 렌더링할 스크린

  # BrowserRouter 는 url 에 /#/ 이게 안생김 cf)HashRouter
*/

/*
  <HashRouter>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </HashRouter>
 
→ 이렇게 쓸 경우 두개의 컴포넌트가 렌더링 되는 이유

  라우터가 path 경로 확인해서 라우팅해줌

  EX ) /Home 에 <h1>Home</h1> 
       /Home/introduction 에 <h1>Introduction</h1>

       두개의 경로가 있을 경우 라우터는 /Home 을 찾아서 Home을 렌더링해주고
       그 뒤에 introduction 도 확인해서 Introduction 도 렌더링해줌 따라서 화면에넌 HomeIntroduction 보이게됨

  따라서!
  Route 할 때 exact 를 사용해야함 
  --> 해당 경로 외에 다른 경로 찾으면 렌더링을 해주지 않아야하기 때문엥 즉, 이거아니면 렌더링안함

*/