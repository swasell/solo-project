import './App.css';
import Dashboard from './components/Dashboard';
import Details from './components/Details'
import EditList from './components/EditList'
import ExerciseForm from './components/ExerciseForm'
import Main from './components/Main'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <div className="App">
        <Routes>
          <Route path="/" element= {< Main />} />
          <Route path="/dashboard" element= {< Dashboard />} />
          <Route path="/exercise/:id" element= {< Details/>} />
          <Route path="/exercise/edit/:id" element= {< EditList />} />
          <Route path="/exercise/new" element= {< ExerciseForm />} />
        </Routes>
        
      </div>

    </BrowserRouter>
  );

}

export default App;
