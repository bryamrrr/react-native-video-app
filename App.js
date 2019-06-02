/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './src/screens/Home';
import Header from './src/sections/Header';
import SuggestionList from './src/videos/SuggestionList';
import CategoryList from './src/videos/CategoryList';
import API from './utils/api';
import Player from './src/player/Player';
import { store, persistor } from './store';

type Props = {};
export default class App extends Component<Props> {
  async componentDidMount() {
    const suggestionList = await API.getSuggestion(10);
    const categoryList = await API.getMovies();
    store.dispatch({
      type: 'SET_DATA',
      payload: { suggestionList, categoryList },
    });
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home>
            <Header>
              <Text>Video App</Text>
            </Header>
            <Player />
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider>
    );
  }
}
