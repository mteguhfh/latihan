import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../support/img/1.jpg';
import image2 from '../support/img/2.jpg';
import image3 from '../support/img/3.jpg';
// import image berhubungan dengan src di img
class Carousels extends Component{
    kucing = ()=> {
        if(this.props.muncul)
        {
            return(<h1>{this.props.textnya}</h1>)
        }
    }
    render(){
        return(
            <div>
            <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} showIndicators={false} className="container kucing">
            <div className="merdeka">
                <img src={image1} />
                <p className="legend">{this.props.bebas.text}{this.props.children}</p> 
            </div>
            <div className="merdeka">
                <img src={image2} />
                <p className="legend">Legend 2</p>
            </div>
            <div className="merdeka">
                <img src={image3} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        {this.kucing()}
        </div>
        )
    }
}

export default Carousels;