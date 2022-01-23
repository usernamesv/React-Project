import React, { Component } from 'react';
import  MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class PersonalDetails extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Enter Personal Details" />
            <TextField
              hintText="Enter Your Company"
              floatingLabelText="Company"
              onChange={handleChange('company')}
              defaultValue={values.company}

  //             <label for="company">Choose your company</label>
  // <select name="company" id="company">
  
  	
  //   <option value="tcs">TCS</option>
  //   <option value="amazon">Amazon</option>
  //   <option value="wipro">Wipro</option>
  //   <option value="infosys">Infosys</option>
  // </select>


              />
            <br />
            <TextField
              hintText="Enter Your Total Experience"
              floatingLabelText="Total Experience"
              onChange={handleChange('totalExperience')}
              defaultValue={values.totalExperience}
            />
            <br />
            
            <RaisedButton
              label="next"
              primary={true}
              style={styles.button}
              onClick={this.next}
            />

            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
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


export default PersonalDetails;