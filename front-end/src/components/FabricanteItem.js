import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import './scss/Fabricante.scss';
import 'typeface-roboto';
var FabricanteStore = require('../stores/FabricanteStore');
var TequilaActions = require('../actions/TequilaActions');

class TequilaItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      marca: '',
      list: FabricanteStore.getList()
    };
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    FabricanteStore.addChangeListener(this._onChange.bind(this));
    const fabricante = this.props.match.params.marca;
    console.log("The id from url is: " + fabricante);
    if (fabricante) {
      this.search(fabricante);
    }
  }

  componentWillMount() {
		FabricanteStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		FabricanteStore.removeChangeListener(this._onChange);
	}

  _onChange(){
    this.setState({
      list: FabricanteStore.getList()
    });
  }

  search(marca){
    console.log("Server called with: " + marca);
    TequilaActions.getFabricante(marca);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    var marca = '';
    var fabricante = [];
    var foto = '../assets/logo.png';

    if (this.props.match.params.marca) {
      marca = this.props.match.params.marca;
    }

    if (this.state.list.list[0]) {
      fabricante = this.state.list.list[0];
      foto = fabricante.foto;
    }

    return (
      <div className="container">
        <Paper className="paper">
          <Grid container spacing={16}>
            <Grid item>
              <ButtonBase className="image">
                <img className="img" alt="complex" src={foto} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography className="text" gutterBottom variant="h6">{marca}</Typography>
                  <Typography className="text" gutterBottom>{fabricante.desc}</Typography>
                  <Typography className="text" paragraph>{fabricante.carac}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default TequilaItem;
