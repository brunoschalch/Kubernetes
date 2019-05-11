import React from 'react';
import { Link } from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import './scss/WrongItem.scss';

class WrongItem extends React.Component {
  state = {
    open: true,
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {cause, desc} = this.props;
    return (
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{cause}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{desc}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" autoFocus component={Link} to={"/"}>
            Ir atrás
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default WrongItem;
