import React, { Component } from 'react';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            fname: '',
            lname: '',
            address: '',
            email: '',
            pnumber: ''
        }
    }

    handleInputs = (e) => {
        const { fname, lname, address, email, pnumber } = this.state;
        e.preventDefault();
        if (fname !== "" && lname !== "" && address !== "" && email !== "" && pnumber !== "") {
            this.setState({ login: true });
            Swal.fire({
                title: "Success",
                type: 'success',
                text: 'Welcome ' + fname
            })
        } else {
            this.setState({ login: false });
            Swal.fire({
                title: "Oooops...",
                type: 'error',
                text: 'Please input all the fields!'
            })
        }
    }



    render() {
        const divStyle = {
            color: 'white',padding: '5%', marginLeft: '25%', marginRight: '25%', backgroundSize: 'cover',
            borderRadius: '0.5rem' , border: '1px solid black',  background: 'black'
            
        }

        const inputStyle = {
            padding: '1%',borderRadius: '0.5rem',width: '80%', border: 'none', outline: 'none', 
            borderBottom: '2px solid white', background: 'transparent', color: 'white', fontSize: '20px' 
        }

        const { fname, lname, address, email, pnumber } = this.state;
        if (!this.state.login) {
            return (
                <center>
                    <div style={divStyle}>
                        <div><br /><input style={inputStyle} type="text" placeholder="First Name" onChange={e => this.setState({ fname: e.target.value })} /></div>
                        <div><br /><input style={inputStyle} type="text" placeholder="Last Name" onChange={e => this.setState({ lname: e.target.value })} /></div>
                        <div><br /><input style={inputStyle} type="text" placeholder="Address" onChange={e => this.setState({ address: e.target.value })} /><i><FaMapMarkerAlt /></i></div>
                        <div><br /><input style={inputStyle} type="email" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} /><i><FaEnvelope /></i></div>
                        <div><br /><input style={inputStyle} type="number" placeholder="Phone Number" onChange={e => this.setState({ pnumber: e.target.value })} /><i><FaPhoneSquare /></i></div>
                        <div><Button variant="primary" onClick={e => this.handleInputs(e)} style={{ marginTop: '2%' }}>Submit</Button></div>
                    </div>
                </center>

            );

        } else {
            return (
                <div>
                    <Dashboard fname={fname} lname={lname} address={address} email={email} pnumber={pnumber} />
                </div>
            )
        }
    }
}

export default Registration;