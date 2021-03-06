import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import ReactDom from 'react-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardTitle, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Header from './header';
import Progress from 'react-progressbar'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';


class BackPack extends Component {


  render() {

  	console.log('check backpack', this.props.gotPokemon);

    return (
        <div>
        	<Header/>
        	<div className="row">
        	<div className="col-md-12 col-sm-12 col-xs-12">
        	{!this.props.gotPokemon || (this.props.gotPokemon && this.props.gotPokemon.length==0) &&
        			<div>
        			<img src="img/empty.png" className="center-align" height="500" width="auto" alt="bulbasaur" />
        			</div>
        	}

        		{this.props.gotPokemon && this.props.gotPokemon.length>0 &&
		        	<div className="row">
		        	<div className="col-md-12 col-sm-12 col-xs-12">
			        	<div className="col-md-3">
			        	</div>
			        	<div className="col-md-2">
			        	<img src="img/gotcha.png" className="ml-5 float-right" height="80" width="auto" alt="pokemon_image" />
			        	</div>
			        	<div className="col-md-4">
			        	<Typography utterBottom variant="headline" component="h2" style={{marginTop:"20px"}}>
			        	You Got {this.props.gotPokemon.length} Pokemon! </Typography>
			        	</div>
			        	<div className="col-md-3">
			        	</div>
		        	</div>
		        	</div>
		        }

        	    {this.props.gotPokemon && this.props.gotPokemon.length>0 && this.props.gotPokemon.map((pokemon) => {
		        	return <div>
		        	<div className="col-md-3 col-sm-6 col-xs-12 mt-20">
			       	<Card style={{maxWidth:"345px", paddingTop:"5px"}} className="homeCard">
				        <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
		      				<img src={"img/"+pokemon.name+".png"} className="center-align" height="180" width="auto" alt="pokemon_image" />
				        </CardMedia>
				        <CardContent>
				        <Typography gutterBottom variant="headline" component="h2">
				            <span className="color-primary">{pokemon.name.toUpperCase()}</span>
				            <span className="fontSize-20 color-secondary float-right">
				            {pokemon.stats[5].stat.name.toUpperCase()}: {pokemon.stats[5].base_stat}</span>
				            <img height="25" className="float-right mr-5 mt-3" src="img/open-pokeball.png" alt="compare"/>
				          </Typography>
						          <Table>
							        <TableBody>
							              <TableRow>
							                <TableCell>Weight:</TableCell>
							                <TableCell numeric>{pokemon.weight}</TableCell>
							              </TableRow>
							              <TableRow>
							                <TableCell>Height:</TableCell>
							                <TableCell numeric>{pokemon.height}</TableCell>
							              </TableRow>
							              <TableRow>
							                <TableCell>{pokemon.stats[0].stat.name.replace(/\b\w/g, l => l.toUpperCase())}:</TableCell>
							                <TableCell numeric>{pokemon.stats[0].base_stat}</TableCell>
							              </TableRow>
							              <TableRow>
							                <TableCell>{pokemon.stats[1].stat.name.replace(/\b\w/g, l => l.toUpperCase())}:</TableCell>
							                <TableCell numeric>{pokemon.stats[1].base_stat}</TableCell>
							              </TableRow>
							              <TableRow>
							                <TableCell>{pokemon.stats[2].stat.name.replace(/\b\w/g, l => l.toUpperCase())}:</TableCell>
							                <TableCell numeric>{pokemon.stats[2].base_stat}</TableCell>
							              </TableRow>
							              <TableRow>
							                <TableCell>{pokemon.stats[3].stat.name.replace(/\b\w/g, l => l.toUpperCase())}:</TableCell>
							                <TableCell numeric>{pokemon.stats[3].base_stat}</TableCell>
							              </TableRow>
							              <TableRow>
							                <TableCell>{pokemon.stats[4].stat.name.replace(/\b\w/g, l => l.toUpperCase())}:</TableCell>
							                <TableCell numeric>{pokemon.stats[4].base_stat}</TableCell>
							              </TableRow>
							        </TableBody>
							      </Table>
				        </CardContent>
					        <CardActions>
					          <Button size="small" color="primary">
					            <img className="" src="img/egg-incubator.png" alt="details"/> 
					            <span>Base Experience :</span> 
					            <span style={{marginLeft:"70px"}}>{pokemon.base_experience}</span>
					          </Button>
					        </CardActions>
				      </Card>
				      </div>
				      </div>
				     })
                 }
		      </div>
		      </div>
        </div>   
    );
}
}


function mapStateToProps(state) {
	console.log('backpack state', state);
	return { gotPokemon: state.backpackPoke.backpackPoke };
}

export default connect(mapStateToProps, actions)(BackPack);

