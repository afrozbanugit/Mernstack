import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import User from './components/User';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import OldBooks from './components/OldBooks';
import NewBooks from './components/NewBooks';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/user/:userId" element={<User/>}></Route>
        <Route path="/books">
               <Route path="old_books" element={<OldBooks/>}/>
               <Route path="new_books" element={<NewBooks/>}/>
        </Route>
       
        
      </Routes>
      <ul>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li> 
        <li><Link to="/user/2">User</Link></li>
      <Link to="/books/old_books">Old Books</Link>
      <li> <Link to="/books/new_books">Old Books</Link></li>      
      </ul>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
