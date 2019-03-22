import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SearchCityContainer from './searchCityForm/SearchContainer';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import InfoSection from './InfoSection'


const styles = {
  searchCityGrid: {
    width: '30%', marginTop: 100
  }
};


class Home extends Component {
  state = { weatherData: {} };

  handleSearchSent = (query) => {
    const url = 'http://localhost:5000/api/location_weather';

    axios.post(url, { city: query })
      .then(({ data }) => {
        this.setState({ weatherData: data })
      });
  };

  renderInfoSection = () => {
    const { weatherData } = this.state;

    // Object.keys(weatherData).length !== 0
    if (true) {
      return <InfoSection />
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={24}
          direction="column"
          justify="center"
          alignItems="center"
        >

          <Grid item xs={12} className={classes.searchCityGrid}>
            <SearchCityContainer onSearchSent={this.handleSearchSent} />
          </Grid>


          {this.renderInfoSection()}

        </Grid>
      </div>
    );
  }
}


export default withStyles(styles)(Home);
