import React from 'react';
import { shallow, mount } from 'enzyme';
import FabricanteItem from './FabricanteItem';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

describe('Corralejo Tests', () =>{
  let props;
  let mounted;
  const fabricante = () => {
    if (!mounted) {
      const defaultProps = {
        match: { params: { marca: "Corralejo" } },
      };
      mounted = mount(
        <FabricanteItem {...defaultProps} />
      );
    }
    return mounted;
  }

  it("always renders one `Paper` element", () => {
    expect(fabricante().find(Paper).length).toBe(1);
  });

  it("always renders five `Grid` elements", () => {
    expect(fabricante().find(Grid).length).toBe(5);
  });

  it("always renders one `Button Base` element", () => {
    expect(fabricante().find(ButtonBase).length).toBe(1);
  });

  it("always renders three `Typography` elements", () => {
    expect(fabricante().find(Typography).length).toBe(3);
  });
})

describe('Cazadores Tests', () =>{
  let props;
  let mounted;
  const fabricante = () => {
    if (!mounted) {
      const defaultProps = {
        match: { params: { marca: "Cazadores" } },
      };
      mounted = mount(
        <FabricanteItem {...defaultProps} />
      );
    }
    return mounted;
  }

  it("always renders one `Paper` element", () => {
    expect(fabricante().find(Paper).length).toBe(1);
  });

  it("always renders five `Grid` elements", () => {
    expect(fabricante().find(Grid).length).toBe(5);
  });

  it("always renders one `Button Base` element", () => {
    expect(fabricante().find(ButtonBase).length).toBe(1);
  });

  it("always renders three `Typography` elements", () => {
    expect(fabricante().find(Typography).length).toBe(3);
  });
})

describe('Cazadores Tests', () =>{
  let props;
  let mounted;
  const fabricante = () => {
    if (!mounted) {
      const defaultProps = {
        match: { params: { marca: "Don Julio" } },
      };
      mounted = mount(
        <FabricanteItem {...defaultProps} />
      );
    }
    return mounted;
  }

  it("always renders one `Paper` element", () => {
    expect(fabricante().find(Paper).length).toBe(1);
  });

  it("always renders five `Grid` elements", () => {
    expect(fabricante().find(Grid).length).toBe(5);
  });

  it("always renders one `Button Base` element", () => {
    expect(fabricante().find(ButtonBase).length).toBe(1);
  });

  it("always renders three `Typography` elements", () => {
    expect(fabricante().find(Typography).length).toBe(3);
  });
})
