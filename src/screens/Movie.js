import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from './MovieLayout';
import Player from '../player/Player';
import Header from '../sections/Header';
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
      </Layout>
    );
  }
}

export default  connect()(Movie);
