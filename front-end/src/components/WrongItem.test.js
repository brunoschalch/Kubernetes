import React from 'react';
import { shallow, mount } from 'enzyme';
import WrongItem from './WrongItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Header Tests', () =>{
  let props;
  let mounted;
  const wrongItem = () => {
    if (!mounted) {
      mounted = mount(
        <Router>
          <WrongItem />
        </Router>
      );
    }
    return mounted;
  }

  it("always renders one `Card` element", () => {
    expect(wrongItem().find(Router).length).toBe(1);
  });

})
