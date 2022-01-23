import React, { Component } from 'react';
import  MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class UserDetails extends Component {
    next = e =>{
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
               <React.Fragment>
                    <AppBar title = 'Enter User Details'/>
                    <TextField
                      hintText="Enter Your Full Name"
                      floatingLabelText="Full Name"
                      onChange={handleChange('fullName')}
                      defaultValue={values.fullName}
                     />
                 <br />
            
                    <TextField
                      hintText="Enter Your Email"
                      floatingLabelText="Email"
                      onChange={handleChange('email')}
                      defaultValue={values.email}
                     />
                 <br />

                    <TextField
                      hintText="Enter Your Date of Birth"
                      input type="date" //for date fields
                     // floatingLabelText="Date of Birth"
                      onChange={handleChange('dob')}
                      defaultValue={values.dob}
                     />
                 <br />

                    <TextField
                      hintText="Enter Your Phone Number"
                      floatingLabelText="Phone Number"
                      onChange={handleChange('phone')}
                      defaultValue={values.phone}
                     />
                 <br />

            <RaisedButton
              label="Next"
              primary={true}
              style={styles.button}
              onClick={this.next}
            />

           </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin:15
    }
}

export default UserDetails
