import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Layout from './SuggestionListLayout';
import EmptyList from './EmptyList';
import Separator from './VerticalSeparator';
import Suggestion from './Suggestion';

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString()

  renderEmpty = () => <EmptyList text='No hay elementos en la lista' />

  renderSeparator = () => <Separator />

  renderSuggestion = ({ item }) => <Suggestion {...item} />

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

export default SuggestionList;
