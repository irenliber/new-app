import React, { Component } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default class ImagePreview extends Component {
  constructor(props) {
    super();
    this.state = {
      loading: false
    };
  }

  render() {
    const image = this.props.navigation.getParam('image', {})

    return (
      <View style={styles.container}>
        { this.state.loading &&
          <ActivityIndicator size="large" color="#707070" style={ styles.loading }/>
        }
        <ImageZoom
          cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={Dimensions.get('window').width}
          imageHeight={Dimensions.get('window').height}
          maxScale={2}
          minScale={1}
        >
          <Image
            style={{width: '100%', height: '100%'}}
            source={{uri: image.link}}
            resizeMode="contain"
            onLoadStart={(e) => this.setState({loading: true})}
            onLoadEnd={(e) => this.setState({loading: false})}
          />
        </ImageZoom>

        <View
          style={styles.imageTitle}
        >
          <Text style={{ fontSize: 20, marginBottom: 20 }} numberOfLines={1}>{image.title}</Text>
          <Text numberOfLines={1}>{image.snippet}</Text>
          <TouchableOpacity
            style={styles.contextLink}
            onPress={() => Linking.openURL(image.image.contextLink)}
          >
            <Text numberOfLines={1} style={{color: 'white'}} >{image.displayLink}</Text>
          </TouchableOpacity>
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
  loading: {
    position: 'absolute',
    zIndex: 10,
    marginTop: 20
  },
  imageTitle: {
    width: '100%',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: 160,
  },
  contextLink: {
    backgroundColor: 'black',
    maxWidth: 150,
    padding: 10,
    alignSelf: 'flex-end',
    marginTop: 10
  }
});