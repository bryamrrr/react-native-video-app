import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './screens/Home';
import Header from './sections/Header';
import Search from './sections/Search';
import SuggestionList from './videos/SuggestionList';
import CategoryList from './videos/CategoryList';
import Movie from './screens/Movie';
import API from '../utils/api';

class AppLayout extends Component {
  async componentDidMount() {
    const suggestionList = await API.getSuggestion(10);
    const categoryList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_DATA',
      payload: { suggestionList, categoryList },
    });
  }

  render() {
    if (this.props.selectedMovie) {
      return <Movie />
    }

    return (
      <Home>
        <Header />
        <Search />
        <CategoryList />
        <SuggestionList />
      </Home>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  }
};

export default connect(mapStateToProps)(AppLayout);
