import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './MovieLayout';
import Player from '../player/Player';
import Header from '../sections/Header';
import Details from '../videos/Details';
import Back from './Back';

class Movie extends Component {
  backHome = () => {
    this.props.dispatch({
      type: 'REMOVE_MOVIE',
    });
  }

  render() {
    return (
      <Layout>
        <Header>
          <Back onPress={this.backHome} />
        </Header>
        <Player />
        <Details {...this.props.movie} />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.selectedMovie,
});

export default  connect(mapStateToProps)(Movie);
