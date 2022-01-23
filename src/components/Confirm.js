import React, { Component } from 'react';
import  MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  next = e => {
    e.preventDefault();
    // Process Form
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { fullName, email, dob, phone, company, totalExperience }
    } = this.props;     // pull values out of props which is in values.
    return (
      <MuiThemeProvider>
         <React.Fragment>
            <AppBar title="Confirm User Data" />
            <List>
                <ListItem primaryText="Full Name" secondaryText={fullName} />   
                <ListItem primaryText="Email" secondaryText={email} />
                <ListItem primaryText="Date of Birth" secondaryText={dob} />
                <ListItem primaryText="Phone" secondaryText={phone} />
                <ListItem primaryText="Company" secondaryText={company} />
                <ListItem primaryText="Total Experience" secondaryText={totalExperience} />
            </List>
            <br />

            <RaisedButton
              label="confirm & next"
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


export default Confirm;