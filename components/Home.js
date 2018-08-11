import React, { Component } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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

    const { images: { images } } = this.props
    const url = 'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg'

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

        {/*{ images.length &&*/}
        <FlatList
          style={styles.imagesBlock}
          data={[{key: 'a'}, {key: 'b'}]}
          // data={images}
          numColumns={2}
          renderItem={({item}) =>
            <View style={styles.columns}>
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => this.props.navigation.navigate('ImagePreview', { url: url } )}
              >
                <Image
                  style={{height: '100%'}}
                  source={{uri: url}}
                  // source={{uri: item.link}}
                  resizeMode="cover"
                />
                <View
                  style={styles.imageTitle}
                >
                  <Text numberOfLines={1}>IMAGE DESCRIPTION gsdds</Text>
                  {/*<Text numberOfLines={1}>{item.title}</Text>*/}
                </View>
              </TouchableOpacity>
            </View>
          }
          />
        {/*}*/}
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
  homeTitle: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 10
  },
  searchInput: {
    height: 40,
    width: '100%',
    backgroundColor: '#FAF6F5',
    paddingHorizontal: 20,
    marginBottom: 30
  },
  columns: {
    flex: 0.5,
    paddingHorizontal: 20,
  },
  imagesBlock: {
    flex: 1,
    paddingHorizontal: 10
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    flex: 1,
    height: 100,
    width: '100%'
  },
  imageTitle: {
    width: '100%',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  }
});