import React, { Component } from 'react'
import { Paper } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../styles/table.css';


class Details extends Component {

    constructor(props) {
        super(props)
        this.state = {
            details: []
        }
    }

    id = window.location.pathname.replace('http://', '').split('/')

    componentDidMount() {

        fetch(`https://swapi.co/api/people/${this.id[2]}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    ...this.state,
                    details: data
                })
            })
            .catch(console.log)
    }

    render() {
        return (

            <div>
                <ol className="ordered_list">{Object.keys(this.state.details)[0]}: {this.state.details.name}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[1]}: {this.state.details.height}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[2]}: {this.state.details.mass}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[3]}: {this.state.details.hair_color}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[4]}: {this.state.details.skin_color}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[5]}: {this.state.details.eye_color}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[6]}: {this.state.details.birth_year}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[7]}: {this.state.details.gender}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[8]}: {this.state.details.homeworld}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[9]}: {this.state.details.films}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[10]}: {this.state.details.species}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[11]}: {this.state.details.vehicles}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[12]}: {this.state.details.starships}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[13]}: {this.state.details.created}</ol>
                <ol className="ordered_list">{Object.keys(this.state.details)[14]}: {this.state.details.edited}</ol>
            </div>
        )
    }
};

export default Details
