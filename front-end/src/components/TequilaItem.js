import React from 'react';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './scss/TequilaItem.scss';
import WrongItem from './WrongItem';
var TequilaStore = require('../stores/TequilaStore');
var TequilaActions = require('../actions/TequilaActions');

class TequilaItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      id: '',
      list: TequilaStore.getList()
    };
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    TequilaStore.addChangeListener(this._onChange.bind(this));
    const tequila = this.props.match.params.id;
    console.log("The id from url is: " + tequila);
    if (tequila) {
      this.search(tequila);
    }
  }

  componentWillMount() {
		TequilaStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		TequilaStore.removeChangeListener(this._onChange);
	}

  _onChange(){
    this.setState({
      list: TequilaStore.getList()
    });
  }

  search(number){
    console.log("Server called with: " + number);
    TequilaActions.getTequila(number);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    var idBotella = '';
    var botella = [];
    var carac = [];
    var foto = '../assets/logo.png';

    if (this.props.match.params.id) {
      idBotella = this.props.match.params.id;
    }

    if (this.state.list.list[0]){
      botella = this.state.list.list[0];
      botella.carac.map(function(item, index) {
        carac.push(
          <Typography paragraph key={index} index={index} item={item}>•{item}</Typography>
        );
      });
      foto = botella.foto;
    }
    else {
      return <WrongItem cause="No se encontró el tequila"
      desc="El tequila es falso, no está registrado o la información no es correcta"/>
    }

    return (
      <Card className="card">
        <CardActionArea>
          <CardMedia
            className="media"
            image={foto}
            title="tequila-pic"
          />
          <CardContent>
            <Typography variant="h5">{botella.marca}</Typography>
            <Typography variant="h6"color="textSecondary">
              {botella.submarca}, SKU: {idBotella}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="actions" disableActionSpacing>
          <Button size="small" color="primary" onClick={this.handleExpandClick}>
            Más
          </Button>
          <Button size="small" color="primary" component={Link} to={"/fabricante/"+botella.marca}>
            Ver fabricante
          </Button>
          <Button size="small" color="primary" component={Link} to={"/usuario/"+localStorage.getItem("name")}>
            Perfil
          </Button>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{botella.desc}</Typography>
            {carac}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default TequilaItem;
