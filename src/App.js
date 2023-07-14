import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Suspense, lazy, useState } from 'react';
import List from './List';
import User from './User';
import './style.css';

const AddUser = lazy(()=>import("./addUser"))
const Todolist = lazy(()=> import("./List"))

function App() {

  const [values, setValues] = useState([]);

  const handleSubmit = (value) => {
    setValues([...values, value]);
  };
  return (
  <Router>
     <Switch>

     <Route path='/'>
      {""} 
         <menu className="menu">
         <Link to="/list">Todolist</Link> <Link to="/user">User</Link> <Link to="/addUser">AddUser</Link>  
         
         </menu>{""}

         <Route path='/list'>
       <Suspense fallback={<h2>Loading......</h2>}>
        <List/>
      </Suspense>

       </Route>    

     <Route path='/user'>

      <User values={values}/>
    
       </Route>

       <Route path='/addUser'>
       <Suspense fallback={<h2>Loading......</h2>}>

        <AddUser onAddValue={handleSubmit}/>
        </Suspense>

       </Route>
     </Route>
     </Switch>
   </Router>
    
  );
}

export default App;
