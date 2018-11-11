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
import Colors from '../constants/Colors';

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
            <Text style={styles.startedText}>
              Demo Apps
            </Text>
            <Text style={styles.startedText}>
              empowered by React Native
            </Text>
          </View>

          <View style={styles.demoDescContainer}>
            <Text style={styles.demoTitle}>
              Demo 1: Feed reader
            </Text>
            <Text style={styles.demoDescText}>  
              ■ 機能
            </Text>
            <Text style={styles.demoDescText}>  
              Yahoo!ニュースのRSSから最新ニュースのリストを取得します。
            </Text>
            <Text style={styles.demoDescText}>  
              ■ 注意
            </Text>
            <Text style={styles.demoDescText}>  
              (1) フィードで提供されるURLが不完全の場合はニュースを取得できません。エラーが表示されます。
            </Text>
          </View>

          <View style={styles.demoDescContainer}>
            <Text style={styles.demoTitle}>
              Demo 2: QR code reader
            </Text>
            <Text style={styles.demoDescText}>  
              ■ 機能
            </Text>
            <Text style={styles.demoDescText}>  
              QRコードリーダーを起動し、Webサイトにアクセスします。
            </Text>
            <Text style={styles.demoDescText}>  
              ■ 注意
            </Text>
            <Text style={styles.demoDescText}>  
              (1) カメラの起動を許可してください
            </Text>
            <Text style={styles.demoDescText}>  
              (2) 読み込んだ値がURL以外の場合はエラーが表示されます。
            </Text>
          </View>

          <View style={styles.readmoreContainer}>
            <Text style={styles.readmoreText}>
              Demoは、メニューから選択してください。
            </Text>
            <TouchableOpacity onPress={this._cpsite_request} style={styles.readmoreLink}>
              <Text style={styles.readmoreLinkText}>
                read more.
              </Text>
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
    width: 250,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  startedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  demoDescContainer: {
    marginTop: 10,
    padding: 5,
    backgroundColor: Colors.tintBackground,
    marginHorizontal: 50,
  },
  demoTitle: {
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
    textAlign: 'center',
  },
  demoDescText: {
    marginTop: 5,
    fontSize: 14,
    color: 'white',
    lineHeight: 16,
    textAlign: 'left',
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
    color: Colors.tintColor,
  },
  readmoreText: {
    fontSize: 14,
    color: 'rgba(96,100,109, 1)',
  },
});
