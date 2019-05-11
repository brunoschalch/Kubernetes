import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import './scss/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <Chip className="chips" id="des" label="Desktop" />
          <Chip className="chips" id="tab" label="Tablet" />
          <Chip className="chips" id="mob" label="Mobile" />
          <Typography className="names" variant="overline" gutterBottom>
            Ángel Cueto | Ana Sollano | Bruno Schalch
          </Typography>
      </div>
    );
  }
}

export default Footer;
