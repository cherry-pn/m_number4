import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';
import user from './user.png';
import background from './background.jpg';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const style = {
             backgroundImage : "url(" + background  + ")",marginLeft : "20%", marginRight : '20%',
            backgroundSize : 'cover',  color: 'white'
        }

        const imgStyle = {
            width: 200, height: 200, borderRadius: 200 / 2
        }

        const textStyle = {
            color: 'white', fontSize: '20px'
        }
        return (
            <Jumbotron style={style}>
                <center>
                    <img src={user} style={imgStyle} ></img>
                    <div><h1 style={{color: 'white'}}>{this.props.fname} {this.props.lname}</h1></div>
                </center><br></br>
                <div><p style={textStyle}><i><FaMapMarkerAlt /></i>{this.props.address}</p></div>
                <div><p style={textStyle}><i><FaEnvelope /></i>{this.props.email}</p></div>
                <div><p style={textStyle}><i><FaPhoneSquare /></i>{this.props.pnumber}</p></div>
            </Jumbotron>
        )
    }
}

export default Dashboard;