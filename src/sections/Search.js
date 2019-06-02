import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, StyleSheet } from 'react-native';
import API from '../../utils/api';

class Search extends Component {
  state = { text: '' }

  handleSubmit = async () => {
    const movies = await API.searchMovie(this.state.text);
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: { movie: movies[0] },
    })
  }

  handleChange = (text) => {
    this.setState({ text });
  }

  render() {
    return (
      <TextInput
        placeholder='Search your favorite movie'
        autoCorrect={false}
        autoCapitalize='none'
        underlineColorAndroid='transparent'
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChange}
        style={styles.input}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  }
});

export default connect()(Search);
