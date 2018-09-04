import React, {Component} from 'react';
import axios from 'axios';
import {API_URL}from '../support/api-url/apiurl';
import Carousels from './Slide';
class HomePage extends Component{
   doDelete = () =>{
    axios.delete(API_URL+'/user/1'
    ).then((scs)=>{
        console.log(scs);
        alert("dlt scs");
    }).catch((err)=>{
        console.log(err);
        alert("dlt fail");
    })
   }
   doEdit = () =>{
    axios.put(API_URL +'/user/1',{
        nama:"nama1",
        username:"username1",
        password:"123"
        }).then((scs)=>{
            console.log(scs);
            alert("success");
        }).catch((err)=>{
            console.log(err);
            alert("success");
        })
    }
    render(){
        var checkit=50;
        return(
            <div>            
            <Carousels bebas={{text:"MHW1"}} muncul={false} textnya={"jelek"}>
            {checkit}
            
            TEST
            </Carousels>
            <br/>
            <Carousels bebas={{text:"MHW1"}} muncul={true} textnya={"ganteng"}>
            {checkit}
            TEST
            </Carousels>
            <input type="button" className="btn btn-danger" value="Delete" onClick={this.doDelete}/>
            <input type="button" className="btn btn-danger" value="Edit" onClick={this.doEdit}/>
            </div>
        );
    }
}

export default HomePage;