import React from 'react';
import { shallow, mount } from 'enzyme';
import UsuarioItem from './UsuarioItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

describe('Header Tests', () =>{
  let props;
  let mounted;
  const wrongItem = () => {
    if (!mounted) {
      const defaultProps = {
        match: { params: { nombre: "joe" } },
      };
      mounted = mount(
          <UsuarioItem {...defaultProps}/>
      );
    }
    return mounted;
  }

  it("always renders one `Card` element", () => {
    expect(wrongItem().find(Table).length).toBe(1);
  });

  it("always renders one `Card` element", () => {
    expect(wrongItem().find(TableBody).length).toBe(1);
  });

  it("always renders one `Card` element", () => {
    expect(wrongItem().find(TableRow).length).toBe(2);
  });

  it("always renders one `Card` element", () => {
    expect(wrongItem().find(Paper).length).toBe(1);
  });

})
