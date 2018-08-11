import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

export default class ImagePreview extends Component {

  render() {

    const imageUrl = this.props.navigation.getParam('url', '')

    return (
      <View style={styles.container}>
        <ScrollView maximumZoomScale={2}>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: imageUrl}}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
});