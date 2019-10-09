import React, { Component } from 'react'
import { Paper } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../styles/table.css';
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';


class Characters extends Component {

    constructor(props) {
        super(props)
        this.state = {
            attributes: [],
            details: [],
            count: 0
        }
        this.onChange = this.onChange.bind(this);

    }
    componentDidMount() {
        fetch('https://swapi.co/api/people/')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    attributes: data.results
                })
            })
            .catch(console.log)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.attributes !== this.props) {

        }
    }

    details = (id) => (
        <Link to={`${this.props.match.url}/${id}`} />
    )
    update = () => {
        this.state.attributes.forEach((attribute, index) => {
            if (attribute.favorite === true) {
                this.setState({ count: this.state.count + 1 })
            } else if (attribute.favorite === undefined) {
                this.setState({ count: this.state.count - 1 })
            }
        })
    }

    onChange = async (id) => {
        await this.setState(prevState => {
            const updatedList = prevState.attributes.map((attribute, index) => {
                if (index == id) {
                    this.state.attributes[index].favorite = !this.state.attributes[index].favorite
                    this.state.attributes[index].favorite ? this.state.count += 1 : this.state.count -= 1
                }
                return attribute
            })
            return {
                attributes: updatedList
            }
        }
        )
    }

    render() {
        const headers = ['Details', 'Name', 'Gender', 'Height', 'Color', 'Favorite']
        const label = (index) => {
            if (this.state.count <= 5) {
                return this.state.attributes[index].favorite ? <Icon>favorite</Icon> : <Icon>favorite_border</Icon>
            }
            else {
                alert("You cannot favorite more than five characters")
            }
        }

        return (

            <div>
                <Paper >
                    <Table className="table">
                        <TableHead className="table_head">
                            <TableRow className="rows">
                                {headers.map((header, index) => (
                                    <TableCell align="left" key={index}>{header}</TableCell>
                                ))
                                }
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {this.state.attributes.map((attribute, index) => (
                                <TableRow key={index} className="rows" >
                                    <TableCell><button onClick={() => window.open(`/people/${index + 1}`)}>Details</button></TableCell>
                                    <TableCell component="th" scope="row" >{attribute.name}</TableCell>
                                    <TableCell align="left" >{attribute.gender}</TableCell>
                                    <TableCell align="left" >{attribute.height}</TableCell>
                                    <TableCell className="card-title"> {attribute.hair_color}</TableCell>
                                    <TableCell><button className="btn btn-primary" onClick={() => this.onChange(`${index}`)}  >{label(index)}</button></TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
};

export default Characters
