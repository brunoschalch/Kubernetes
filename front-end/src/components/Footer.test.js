import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

describe('Footer Tests', () =>{
  let props;
  let mounted;
  const footer = () => {
    if (!mounted) {
      mounted = mount(
        <Footer />
      );
    }
    return mounted;
  }

  it("always renders three `Chip` elements", () => {
    expect(footer().find(Chip).length).toBe(3);
  });

  it("always renders three `Typography` elements", () => {
    expect(footer().find(Typography).length).toBe(1);
  });
})
