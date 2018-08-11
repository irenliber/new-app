import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class ImagePreview extends Component {

  render() {

    const imageUrl = this.props.navigation.getParam('url', '')

    return (
      <View style={styles.container}>
        <Image
          style={{ height: '100%', width: '100%'}}
          source={{uri: imageUrl}}
          resizeMode="contain"
        />
        <View
          style={styles.imageTitle}
        >
          <Text numberOfLines={1}>IMAGE DESCRIPTION gsdds</Text>
          {/*<Text numberOfLines={1}>{item.title}</Text>*/}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  imageTitle: {
    width: '100%',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    color: 'white',
    height: 200
  }
});