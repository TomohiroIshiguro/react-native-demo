import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={ require('../assets/images/logo.png') }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Demo 1: Feed reader
            </Text>
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Demo 2: QR code reader
            </Text>
          </View>

          <View style={styles.readmoreContainer}>
            <TouchableOpacity onPress={this._cpsite_request} style={styles.readmoreLink}>
              <Text style={styles.readmoreLinkText}>read more.</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    );
  }

  _cpsite_request = () => {
    WebBrowser.openBrowserAsync( 'https://www.caerux.co.jp' );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  readmoreContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  readmoreLink: {
    paddingVertical: 15,
  },
  readmoreLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
