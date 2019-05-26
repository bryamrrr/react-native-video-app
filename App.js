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
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
  };

  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    this.setState({ suggestionList: movies });
  }

  render() {
    return (
      <Home>
        <Header>
          <Text>Prueba de texto</Text>
        </Header>
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
