import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
                <p>Someone will be with you as soon as possible</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}



export default Success;
