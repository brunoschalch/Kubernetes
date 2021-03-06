import React from 'react';
import { shallow, mount } from 'enzyme';
import Formulario from './Formulario';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

describe('Formulario Tests', () =>{
  let props;
  let mounted;
  const formulario = () => {
    if (!mounted) {
      mounted = mount(
        <Formulario {...props} />
      );
    }
    return mounted;
  }

  it('renders title', () => {
    const wrapper = shallow(<Formulario />);
    const title = <Typography className="typo" variant="h3" gutterBottom>Verifica tu botella de tequila</Typography>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('click', () => {
    const mockCallBack = jest.fn();
    formulario().setState({ user: 'joe' });
    formulario().setState({ password: 'password' });
    formulario().setState({ serial: '101' });
    formulario().find(Button).simulate('click');
    expect(formulario().state('serial')).toBe('101')
  });

  it("always renders three `TextField` elements", () => {
    expect(formulario().find(TextField).length).toBe(3);
  });

  it("always renders a Button element", () => {
    expect(formulario().find(Button).length).toBe(1);
  });

  it("always renders nine divs", () => {
    expect(formulario().find("div").length).toBe(9);
  });

  it("always renders one form", () => {
    expect(formulario().find("form").length).toBe(1);
  });
})
