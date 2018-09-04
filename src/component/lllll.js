import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../supports/api-url/apiurl';


class MovieManage extends Component {
    state = { movieList: [] }

    componentWillMount() {
        this.getMovieList();
    }

    getMovieList = () => {
        axios.get(API_URL_1 + "/movies")
        .then((response) => {
            this.setState({ movieList: response.data });
        }).catch((err) => {
            console.log(err);
        })
    }

    onBtnAddClick = () => {
        axios.post(API_URL_1 + "/movies", {
            title: this.refs.inputAddTitle.value,
            description: this.refs.inputAddDesc.value,
            url: this.refs.inputAddUrl.value,
            image: this.refs.inputAddImage.value
        }).then((response) => {
            this.getMovieList();
        }).catch((err) => {
            alert("Add Error!");
            console.log(err);
        });
    }

    onBtnDeleteClick = (movieId) => {
        // var check = confirm("Are you sure to delete this?");
        // if(check == true) {
            axios.delete(API_URL_1 + "/movies/" + movieId)
            .then((response) => {
                this.getMovieList();
            }).catch((err) => {
                alert("Delete Error!");
                console.log(err);
            })
        // }    
    }

    renderMovieList = () => {
        const list = this.state.movieList.map((item) => {
            return (
                <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.url}</td>
                    <td><img style={{ height: "100px"}} className="img-responsive" src={item.image} /></td>
                    <td>
                        <input type="button" className="btn btn-success" value="Edit" />
                    </td>
                    <td>
                        <input type="button" className="btn btn-danger" value="Delete" onClick={() => this.onBtnDeleteClick(item.id)}/>
                    </td>
                </tr>
            );
        });
        return list;
    }

    render() {
        return (
            <div style={{paddingTop: "100px"}} className="container">
                <div className="row">
                    <div className="col-xs-12">
                    <div className="box">
                        <div className="box-header">
                        <h3 className="box-title">Movie List</h3>
                        </div>
                        <div className="box-body">
                        <table id="example2" className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Url</th>
                                <th>Image</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.renderMovieList()}
                            </tbody>
                            <tfoot>
                            <tr>
                                <th></th>
                                <th><input ref="inputAddTitle" type="text" className="form-control" /></th>
                                <th><textarea ref="inputAddDesc" className="form-control" /></th>
                                <th><input ref="inputAddUrl" type="text" className="form-control" /></th>
                                <th><input ref="inputAddImage" type="text" className="form-control" /></th>
                                <th><input type="button" className="btn btn-primary" value="Add" onClick={this.onBtnAddClick}/></th>
                                <th></th>
                            </tr>
                            </tfoot>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieManage;