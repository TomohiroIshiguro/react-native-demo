import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import Colors from '../../constants/Colors';
import './ReaderTop.js';

window.DOMParser = require('xmldom').DOMParser;

global.access_url = '';

export default class Genre extends React.Component {

  items = [];

  static navigationOptions = {
    title: _site_items[_sel_index],
    headerStyle: { backgroundColor: Colors.tintBackground },
    headerTintColor: 'white',
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [{ title: 'wait...', link: '', pubDate: '' }],
    }
    var items = [];

    fetch(_site_links[_sel_index]).then((response)=>{
      response.text().then((txt)=>{
        const parser = new DOMParser();
        const xml = parser.parseFromString(txt);
        var maintitle = xml.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        var elements = xml.getElementsByTagName("item");
        for (var i = 0; i < elements.length; i++) {
          var item = elements[i];
          var title = item.getElementsByTagName('title')[0].childNodes[0].nodeValue;
          var link = item.getElementsByTagName('link')[0].childNodes[0].nodeValue;
          var pubDate = item.getElementsByTagName('pubDate')[0].childNodes[0].nodeValue;
          items[i] = {
            title: title,
            link: link,
            pubDate: pubDate,
          }
        }
        this.setState({ items: items });
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          { this.state.items.map((item,i)=>this.viewList(item,i)) }
        </ScrollView>
      </View>
    );
  }

  viewList = (item, i)=>(
    <TouchableOpacity key={ i } onPress={ ()=>this.goContent(i) }>
      <View style={styles.item}>
        <Text style={styles.getTitleText}>
          { item.title }
        </Text>
        <Text style={styles.getPubDateText}>
          { item.pubDate }
        </Text>
      </View>
    </TouchableOpacity>
  );

  goContent = (n)=>{
    access_url = this.state.items[n].link;
    this.props.navigation.navigate('Content');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor:'gray',
    borderTopRightRadius:7,
    borderBottomLeftRadius:10,
    backgroundColor: '#fff',
  },
  getTitleText: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 30,
    textAlign: 'center',
  },
  getPubDateText: {
    fontSize: 16,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 20,
    textAlign: 'center',
  },
});
