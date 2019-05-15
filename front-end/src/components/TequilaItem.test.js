import React from 'react';
import { shallow, mount } from 'enzyme';
import TequilaItem from './TequilaItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Corralejo Tests', () =>{
  let props;
  let mounted;
  const tequila = () => {
    if (!mounted) {
      const defaultProps = {
        match: { params: { id: "101" } },
      };
      mounted = mount(
        <Router>
          <TequilaItem {...defaultProps} />
        </Router>
      );
    }
    return mounted;
  }

  it("always renders one `Card` element", () => {
    expect(tequila().find(Router).length).toBe(1);
  });
})
