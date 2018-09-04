import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Headers from './component/Header';
import HomePage from './component/Homepage';
import Albumlist from './component/Albumlist';
import Lalalist from './component/Lalalist';
import LoginPage from './component/Login';
import RegisPage from './component/Register';
import MovieManage from './component/Moviemanage';
import Book from './component/Book';
import Transaction from './component/transaction';
class App extends Component {
  state = {sudahlogin:false, uname:"yos"}
  
  fungsilogin = () =>
  {
    this.setState({sudahlogin:true, uname:"louis"})
  }
  render() {
    console.log("render jalan");
 
    return (
      <div className="App">
            <Headers logIn={this.state.sudahlogin} username={this.state.uname} />
            {/* 
            <br/><br/>
            <input type="button" className="btn btn-succes" value="login" onClick={this.fungsilogin}/>
            <Albumlist/>
            <Lalalist/> */}
            <br/><br/><br/><br/>
          <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/albumlist" component={Albumlist}/>
          <Route path="/lalalist" component={Lalalist}/>
          <Route path="/Login" component={LoginPage}/>
          <Route path="/Regis" component={RegisPage}/>
          <Route path="/MovieManage" component={MovieManage}/>
          <Route path="/Book" component={Book}/>
          <Route path="/Transaction" component={Transaction}/>
          </div>
      </div>
        
          
    );
  }
}

export default App;
