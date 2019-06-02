import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import Layout from './SuggestionListLayout';
import EmptyList from './EmptyList';
import Separator from '../sections/VerticalSeparator';
import Suggestion from './Suggestion';

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString()

  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: { movie: item },
    });
  }

  renderEmpty = () => <EmptyList text='No hay elementos en la lista' />

  renderSeparator = () => <Separator />

  renderSuggestion = ({ item }) => (
    <Suggestion
      {...item}
      onPress={() => this.viewMovie(item)}
    />
  )

  render() {
    return (
      <Layout title='Recomendado para tí'>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderSuggestion}
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.suggestionList,
  }
};

export default connect(mapStateToProps)(SuggestionList);
