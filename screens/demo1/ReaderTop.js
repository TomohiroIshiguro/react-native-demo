import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import Colors from '../../constants/Colors';

const site_items = [
  '主なニュース',
  '国際ニュース',
  '国内ニュース',
  '経済関係',
  'スポーツ',
  'IT関連',
  '科学技術'
];
global._site_items = site_items;

const site_links = [
  'https://news.yahoo.co.jp/pickup/rss.xml',
  'https://news.yahoo.co.jp/pickup/world/rss.xml',
  'https://news.yahoo.co.jp/pickup/domestic/rss.xml',
  'https://news.yahoo.co.jp/pickup/economy/rss.xml',
  'https://news.yahoo.co.jp/pickup/sports/rss.xml',
  'https://news.yahoo.co.jp/pickup/computer/rss.xml',
  'https://news.yahoo.co.jp/pickup/science/rss.xml'
];
global._site_links = site_links;

global._sel_index = 0;

export default class ReaderTop extends React.Component {
  static navigationOptions = {
    title: 'Demo 1: Feed Reader',
    headerStyle: { backgroundColor: Colors.tintBackground },
    headerTintColor: 'white',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          { site_items.map((item,i)=>this.viewList(item,i)) }
        </ScrollView>
      </View>
    );
  }

  viewList = (item, i)=>(
    <TouchableOpacity key={ i } onPress={()=>this.getNews(i)}>
      <View style={styles.item}>
        <Text style={styles.getTitleText}>
          { i+1 }. { item }
        </Text>
      </View>
    </TouchableOpacity>
    );

  getNews = (n)=>{
    _sel_index = n;
    this.props.navigation.navigate('Genre');
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
});
