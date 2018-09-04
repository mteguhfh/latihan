import React,{Component} from 'react';
import axios from 'axios';
import {API_URL} from '../support/api-url/apiurl';
import MovieMD from './MovieMD';

class MovieManage extends Component{
  state ={data:[], selectedID:0};

  componentWillMount(){
      this.doGet();
  }
  

  doGet = ()=>{
    axios.get(API_URL+'/lalalist')
      .then(ini=>{
          console.log(ini);
          this.setState({data:ini.data,selectedID:0})
      });
  }
  doDelete(a){
    axios.delete(API_URL+'/lalalist/'+a
    ).then((scs)=>{
      this.doGet();
        console.log(scs);
        alert("dlt scs");
    }).catch((err)=>{
        console.log(err);
        alert("dlt fail");
    })
   }
   doAdd = () => {
    axios.post(API_URL + "/lalalist", {
      lol:this.refs.nama.value,
      lal:this.refs.url.value
    }).then((res) => {
      alert("Add SCS!");
      console.log(res);
        this.doGet();
    }).catch((err) => {
        alert("Add Error!");
        console.log(err);
    });
    }
    
    doSelectedID = (tempID)=>{
      this.setState({selectedID:tempID});
      console.log(this.state);
    }
    doUpdate =(id,refs)=>{
      axios.put(API_URL +'/lalalist/'+id,{
        lol:refs.lol.value,
        lal:refs.lal.value
        }).then((scs)=>{
          console.log(scs);
          alert("success");
          this.doGet();
        }).catch((err)=>{
          console.log(err);
          alert("fail");
        })     
    }
  renderLalaList =()=>
  {   
      return this.state.data.map(movieM => 
      <MovieMD 
      selectedID={this.state.selectedID}
      key={movieM.id}
      movieMD={movieM}
      doDelete={()=>this.doDelete(movieM.id)}  
      doSelectedID={()=>this.doSelectedID(movieM.id)}
      doUpdate={(ref)=>this.doUpdate(movieM.id,ref)}
      />);
  }
    render()
    {
  
        return (
        <div id="content-wrapper">

        <div className="container-fluid">

          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Tables</li>
          </ol>

          <div className="card mb-3">
            <div className="card-header">
              <i className="fas fa-table"></i>
              Data Table Example</div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama</th>
                      <th>URL</th>
                      <th>Gambar</th>
                      <th colspan="2">ACTION</th>
                    </tr>
                  </thead>
                  <tfoot>
                      <tr>
                        <td></td>
                        <td>  <textarea ref="nama" className="form-control" id="comment"></textarea></td>
                        <td>  <textarea ref="url" className="form-control" id="comment"></textarea></td>
                        <td> </td>
                        <td colSpan="2"><input type="button" className="btn btn-success"  value="Add" onClick={this.doAdd}/></td>
                      </tr>
                    </tfoot>
                     {this.renderLalaList()}  
                </table>
              </div>
            </div>
           
          </div>

          

        </div>
        

      </div>);
    }
}
export default MovieManage;