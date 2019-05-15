import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

describe('Header Tests', () =>{
  let props;
  let mounted;
  const header = () => {
    if (!mounted) {
      mounted = mount(
        <Header />
      );
    }
    return mounted;
  }

  it("always renders three `AppBar` elements", () => {
    expect(header().find(AppBar).length).toBe(1);
  });

  it("always renders three `Toolbar` elements", () => {
    expect(header().find(Toolbar).length).toBe(1);
  });
})
