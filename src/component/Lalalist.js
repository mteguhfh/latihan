import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import LalaDetail from './Laladetail';
import {API_URL} from '../support/api-url/apiurl';
class Lalalist extends Component{
    state ={data:[]};

    componentWillMount(){
        axios.get(API_URL+'/lalalist')
        .then(ini=>{
            console.log(ini);
            this.setState({data:ini.data})
        });
    }
  
    renderLalalist =()=>
    {   
        return this.state.data.map(lala => <LalaDetail key={lala.id} lalad={lala}/>);  
    }
    render()
    {
        if(this.props.auth.username !== "")
        {
        return(
            <div>
            <div>LALA LIST</div>
            <div className="container-fluid ">
            {this.renderLalalist()}
            </div>
            </div>
        );
        }
        return <Redirect to="/Login" />;
        
    }
}
const mapStateToProps = (state) =>{
    const auth = state.auth;
    // return{usersAlgo:users};
    return {auth};
}
export default connect(mapStateToProps)(Lalalist);