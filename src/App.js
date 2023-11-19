
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Navbar/Nav';
import { Route,Routes } from 'react-router-dom';
import TodoList from './Components/TodoList'
import Calculatore from './Components/Calculatore'
import SliderMain from './Components/SliderMain'
import Api from './Components/Api'
import ThemeContextProvider from './Components/ThemeContext';
import notFound from './Components/icon/notFound.jpg'






function App() {

  

  return (

    
    <>
    
    <ThemeContextProvider>
      <Nav />
      
      <Routes>
        <Route path='/' element = {<Home/>}/>
        < Route path='/calculatore' element = {<Calculatore />} />
        < Route path='/slider' element = {<SliderMain />} />
        < Route path='/todolist' element = {<TodoList />} />
        < Route path='/api' element = {<Api />} />
        < Route path='*' element = {<img src={notFound}/>} />
        
      </Routes>
      </ThemeContextProvider>
      
    </>
  );
}

export default App;
