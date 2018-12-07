import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Paper from '@material-ui/core/Paper';


export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };


  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
        
          <AppBar title="Enter User Detail" className="appBar"/>
          <Paper className="paper">
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter Your First Email"
            floatingLabelText="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
           <br />
          <RaisedButton
            color="primary"
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
            </Paper>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  },
};

export default FormUserDetails;