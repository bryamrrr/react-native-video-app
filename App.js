/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text } from 'react-native';
import Home from './src/screens/Home';
import Header from './src/sections/Header';
import SuggestionList from './src/videos/SuggestionList';
import CategoryList from './src/videos/CategoryList';
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
  };

  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    });
  }

  render() {
    return (
      <Home>
        <Header>
          <Text>Prueba de texto</Text>
        </Header>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
