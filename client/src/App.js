import React from 'react'
import {Container} from '@material-ui/core'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { BrowserRouter,Switch,Route,Redirect } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import {GoogleOAuthProvider} from '@react-oauth/google'
import PostDetails from './components/PostDetails/PostDetails'


const App=()=>{
  
    const user=JSON.parse(localStorage.getItem('profile'))
    return(
        <GoogleOAuthProvider clientId="167090584435-17cpik5gje5dld7a19cnbb1sc7m9rpq9.apps.googleusercontent.com">
        <BrowserRouter>
       <Container maxWidth="xl">
       <Navbar/>
       <Switch>
       <Route path="/" exact component={()=><Redirect to="/posts"/>}/>
       <Route path="/posts" exact component={Home}/>
       <Route path="/posts/search" exact component={Home}/>
       <Route path="/posts/:id" exact component={PostDetails}/>
       <Route path="/auth" exact component={()=>(!user?<Auth/>:<Redirect to="/posts"/>)}/>
       </Switch>
       </Container>
       </BrowserRouter>
       </GoogleOAuthProvider>

    );
}
export default App;