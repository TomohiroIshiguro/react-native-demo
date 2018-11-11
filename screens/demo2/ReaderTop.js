import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  WebView,
  View,
  Button,
  Text,
} from 'react-native';
import {
  constants,
  BarCodeScanner,
  Permissions,
} from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

export default class ReaderTop extends React.Component {

  static navigationOptions = {
    title: 'Demo 2: QR code Reader',
    headerStyle: { backgroundColor: Colors.tintBackground },
    headerTintColor: 'white',
  };

  constructor(props) {
    super(props);
    this.state = { permission: false };
  }

  componentDidMount() {
    this.setPermission();
  }

  setPermission = ()=>{
    const p = Permissions.askAsync(Permissions.CAMERA).then((value)=>{
      this.setState({
        permission: p.status == 'granted',
        visible: false,
      });
    });
  };

  doAction = ()=>{
    this.setState({
      visible: true,
    })
  }

  onQRCode = (qr)=>{
    this.setState({
      visible: false,
      uri: qr.data,
    });
  };

  render() {
    return (
      <View style={styles.container}>

        { !this.state.visible ? 
          <TouchableOpacity onPress={ this.doAction }>
            <View style={styles.camera}>
              <Text>
                <Ionicons
                  name='md-camera'
                  size={64}
                  color="white"
                />
              </Text>
              <Text style={{ fontSize: 24, color: 'white' }}>
                Touch here to run a camera.
              </Text>
            </View>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={()=>{
            this.setState({ visible: false })
          }} style={styles.camera}>
            <BarCodeScanner
              torchMode="off"
              onBarCodeRead={ this.onQRCode }
              style={styles.scanner}
            />
          </TouchableOpacity>
        }

        <WebView
          originWhitelist={['*']}
          source={{ uri: this.state.uri }}
          javaScriptEnabled={ true }
          style={styles.webview}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  scanner: {
    width: 200,
    height: 150,
  },
  webview: {
    margin: 2,
    backgroundColor: 'white',
  },
});
