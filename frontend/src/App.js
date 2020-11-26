import React,{useEffect, useState} from 'react'
import JobApi from './JoblyApi'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import Companies from './Companies'
import Company from './Company'
import Jobs from './Jobs'
import LogIn from './LogIn'
import HomePage from './HomePage'
import Profile from './Profile'
import {decode} from 'jsonwebtoken'
import './App.css';


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      let companies = await JobApi.getAll('companies');
      setCompanies(companies);
    }

    async function getJobs() {
      let jobs = await JobApi.getAll('jobs');
      setJobs(jobs)
      setIsLoading(false)
    }

    async function getUser(){
      if(window.localStorage.getItem('_token'))
      {
        setLoggedIn(true)
        let { username } = decode(localStorage.getItem('_token'))
        let user = await JobApi.getUser(username)
        setCurrentUser(user)
     }
      
    }
    
    async function getInfo(){
      await getUser()
      await getCompanies();
      await getJobs()
    }
    
    getInfo()
  }, [loggedIn]);

  // useEffect(()=>{

  // },[])

  
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }


  return (
    <div className="App">
    <BrowserRouter>

      <NavBar loggedIn={loggedIn} setLoggedIn = {setLoggedIn}/>
      <Switch>
        <Route exact path='/'>
          {/* home page */}
          <HomePage loggedIn={loggedIn}/>
        </Route>
        <Route exact path='/companies'>
          {/* all companies */}
          {loggedIn ? <Companies companies={companies} setCompanies={setCompanies}/> : <Redirect to= '/'/>}
        </Route>
        <Route path="/companies/:handle">
          {/* company details */}
          {loggedIn ? <Company companies={companies} jobs={jobs}/>  : <Redirect to= '/'/>}
        </Route>
        <Route exact path="/jobs">
          {/* all jobs */}
          {loggedIn ? <Jobs user={currentUser} jobs={jobs} setJobs={setJobs}/>  : <Redirect to= '/'/>}
        </Route>
        <Route exact path='/login'>
          {/* login form */}
          {!loggedIn ? <LogIn setLoggedIn={setLoggedIn} /> : <Redirect to='/'/>}  
        </Route>
        <Route exact path='/profile' >
          {/* edit profile form */}
          {loggedIn ? <Profile user={currentUser} setUser={setCurrentUser}/> : <Redirect to= '/'/>}
        </Route>
        <Route>
          {/* no route found 404 page */}
          <p>404 NOT FOUND</p>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
