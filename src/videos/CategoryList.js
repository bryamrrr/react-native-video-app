import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import EmptyList from './EmptyList';
import Separator from '../sections/HorizontalSeparator';
import Category from './Category';
import Layout from './CategoryListLayout';

class CategoryList extends Component {
  keyExtractor = item => item.id.toString()

  renderEmpty = () => <EmptyList text='No hay elementos en la lista' />

  renderSeparator = () => <Separator />

  renderCategory = ({ item }) => <Category {...item} />

  render() {
    return (
      <Layout title="Categorías">
        <View>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.props.list}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={this.renderCategory}
            horizontal
          />
        </View>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.categoryList,
  }
};

export default connect(mapStateToProps)(CategoryList);
