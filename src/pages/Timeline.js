import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../services/api';
import Caw from '../components/Caw';
import socket from 'socket.io-client';

export default class Timeline extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "CrowdCaw",
    headerRight: (
      <TouchableOpacity style={{ marginRight: 15 }} onPress={() => navigation.navigate('NewCaw')}>
        <Icon name="paper-plane-o" size={24} color="#4BB0EE" />
      </TouchableOpacity>
    )
  });

  state = {
    cawList: []
  };

  subscribeToEvents = () => {
    const io = socket('http://192.168.11.6:3003');

    io.on('caw', data => {
      this.setState({ cawList: [data, ... this.state.cawList] });
    });

    io.on('fav', data => {
      this.setState({ cawList: this.state.cawList.map( caw => caw._id === data._id ? data : caw ) });
    });
  };

  async componentDidMount() {
    this.subscribeToEvents();

    const response = await api.get('caws');

    this.setState({
      cawList: response.data
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.cawList}
          keyExtractor={caw => caw._id}
          renderItem={({ item }) => <Caw caw={item}></Caw>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
