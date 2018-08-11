import React, { Component } from 'react';
import { Button, View, TextInput, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { getImages } from "../actions/images";

@connect(
  ({ images, isLoading }) => ({ images, isLoading }),
  { getImages },
)

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      typingTimeout: 0
    };
  }

  onSearch = (text) => {
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }

    this.setState({
      text: text,
      typingTimeout: setTimeout(() => {
        console.log(text)
        // this.props.getImages()
      }, 2000)
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.homeTitle} >Image search</Text>
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => this.onSearch(text)}
          value={this.state.text}
          clearButtonMode="always"
          placeholder="Search"
        />
        <FlatList
          style={{flex: 1, paddingHorizontal: 20}}
          data={[{key: 'a'}, {key: 'b'}]}
          numColumns={2}
          renderItem={({item}) =>
            <Text style={styles.columns}>{item.key}</Text>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4EBEC',
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15
  },
  searchInput: {
    height: 40,
    width: '100%',
    backgroundColor: '#FAF6F5',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  homeTitle: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10
  },
  columns: {
    flex: 0.5,
    backgroundColor: 'powderblue'
  }
});