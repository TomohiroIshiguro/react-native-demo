import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  WebView,
} from 'react-native';

import Colors from '../../constants/Colors';
import './Genre.js';

export default class Content extends React.Component {

  static navigationOptions = {
    title: '選択されたコンテンツ',
    headerStyle: { backgroundColor: Colors.tintBackground },
    headerTintColor: 'white',
  };

  constructor(props) {
    super(props);
    this.state = { html: '' };
    fetch(access_url).then((response)=>{
      response.text().then((txt)=>{
        var condition = /<a class="newsLink" href="([\w-?:./=]+)"/;
        var arr = txt.match(condition);
        this.setState({ html: arr[1] });
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          originWhitelist={['*']}
          source={{ uri: this.state.html }}
          javaScriptEnabled={ true }
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
});
