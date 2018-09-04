import React, {Component} from 'react';
class MovieMD extends Component{
   

    

    render(){
        const {id,lol,lal} = this.props.movieMD;
        
        if(this.props.selectedID!==id)
        {    
            return(
            <tbody>
            <tr>
                <td>{id}</td>
                <td>{lol}</td>
                <td>url:<a target="blank" href={lal}>{lal}</a></td>
                <td><img className="img-responsive" style={{height:"40px",width:"40px"}}src={lal} alt={lol}/></td>
                <td>  
                    <input type="button" className="btn btn-primary" value="Edit" onClick={this.props.doSelectedID}/>
                </td>
                <td>
                    <input type="button" className="btn btn-danger" value="Delete" onClick={this.props.doDelete}/>
                </td>
            </tr>
            </tbody>
          
            );
        }//if
        return(
        <tbody>
        <tr>
            <td>{id}</td>
            <td><input ref="lol" type="text" defaultValue={lol}  className="form-control"/></td>
            <td><input ref="lal" type="text" defaultValue={lal}  className="form-control"/></td>
            <td><img className="img-responsive" style={{height:"40px",width:"40px"}}src={lal} alt={lol}/></td>
            <td colSpan="2">  <input type="button" className="btn btn-success" value="Save" onClick={()=>this.props.doUpdate(this.refs)}/>
            </td>
        </tr>
        </tbody>);
    }
}

export default MovieMD;