import React, {Component} from 'react';
class LalaDetail extends Component{
    render(){
       
        const {id,lol,lal} = this.props.lalad;
        return(
       
            <div className="playout">
            <a target="blank"href={id}>
            <img className="img-responsive gbulat"src={lal} alt={lol}/>
            </a>{lol}
       
            </div> 
          
        );
    }
}

export default LalaDetail;