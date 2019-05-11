import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import './scss/Formulario.scss';

class Formulario extends Component {
  constructor(props) {
		super(props);
		this.state = {
      user: '',
      password: '',
      serial: '',
      error: '',
      errorDesc: '',
      showPassword: false,
		};
	}

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  _onClick = () => {
    const number = this.state.serial;
    const user = this.state.user;
    const password = this.state.password;
    if (number.length >= 3 && user && password) {
      console.log(number);
      this.props.history.push('/tequila/'+number);
      window.location.reload();
    }
  }

  render(){
    return(
      <div className="container">
        <div className="title">
          <Typography className="typo" variant="h3" gutterBottom>
            Verifica tu botella de tequila
          </Typography>
        </div>
        <form className="form">
          <TextField
            required
            fullWidth
            className="user"
            label="Usuario"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('user')}
            value={this.state.user}
          />
          <TextField
            fullWidth
            required
            type={this.state.showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            className="password"
            label="Contraseña"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('password')}
            value={this.state.password}
            InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),}}
          />
          <TextField
            required
            fullWidth
            className="serial"
            label="Número de Serie"
            minLength="8"
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('serial')}
            value={this.state.serial}
          />
          <Button
      			className="button"
      			variant="contained"
						onClick={ ()=> {this._onClick()} }
      			color="primary">
      		  Buscar
      	   </Button>
        </form>
      </div>
    );
  }
}

export default Formulario;
