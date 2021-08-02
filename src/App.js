import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Contacts from './components/Contacts/Contacts';
import Introduce from './components/Introduce/Introduce';
import MyMethod from './components/MyMethod/MyMethod';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Redirect } from 'react-router';

function App() {
  return (
    <BrowserRouter>
{    <link href="https://fonts.googleapis.com/css2?family=Cardo:ital@1&family=Open+Sans:wght@400;700&family=Raleway:wght@300;400;600;700&display=swap" rel="stylesheet"></link>}
{<link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet"></link>}
{<script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>}

    <div className="App">
      
      <Header />
      <Redirect exact from="/" to="/main" />
      <Route path='/main' component={MainPage}></Route>
      <Route path='/contacts' component={Contacts}></Route>
      <Route path='/introduce' component={Introduce}></Route>
      <Route path='/mymethod' component={MyMethod}></Route>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
