import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserForm extends Component {
    state = {
        step:1,
        fullName: '',
        email: '',
        dob: '',
        phone: '',
        company: '',
        totalExperience: '',
    }

    //proceed to next step and destructuring

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //Go back to prev step and destructuring

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle fields change 

    handleChange = input => e =>{
        this.setState({[input]: e.target.value});   //event parameter
    
    }

    render() {
        const { step } = this.state;
        const{ fullName, email, dob, phone, company, totalExperience} = this.state;
        const values = { fullName, email, dob, phone, company, totalExperience } //passing value into each component and render into input
        
        switch(step) {
            case 1:
        return (
            <UserDetails 
                nextStep = {this.nextStep}      //add props
                handleChange = {this.handleChange}
                values = {values}
            />
        );
        case 2:
            return (
                <PersonalDetails
                    nextStep = {this.nextStep}      //add props
                    prevStep = {this.prevStep} 
                    handleChange = {this.handleChange}
                    values = {values}
                />
            );
        case 3:
            return (
                <Confirm 
                    nextStep = {this.nextStep}      //add props
                    prevStep = {this.prevStep} 
                    //handleChange = {this.handleChange}   // there is no any input, so not handleChange
                    values = {values}
                />
            );
        case 4:
            return <Success />;
            
        }
    }
}

export default UserForm
