import React, { Component } from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../services/api';

export default class NewCaw extends Component {
  static navigationOptions = {
      header: null
  };

  state = {
      caw: ''
  };

  goBack = () => {
      this.props.navigation.pop();
  };

  handleCaw = async () => {
      const author = await AsyncStorage.getItem('@CrowdCaw:username');
      const desc = this.state.caw;

      await api.post('caws', {
          author: author,
          desc: desc
      });

      this.goBack();
  };

  handleInputChange = data => {
      this.setState({ caw: data });
  };

  render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={this.goBack}>
                    <Icon name="close" size={24} color="#4BB0EE" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={this.handleCaw}>
                    <Text style={styles.buttonText}>Cawmee!</Text>
                </TouchableOpacity>
            </View>

            <TextInput 
                style={styles.input} 
                multiline
                placeholder="O que você está pensando?"
                placeholderTextColor="#999"
                value={this.state.caw}
                onChangeText={this.handleInputChange}
                returnKeyType="go"
                onSubmitEditing={this.handleCaw}
            />
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },

    header: {
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    button: {
        height: 32,
        paddingHorizontal: 20,
        borderRadius: 16,
        backgroundColor: "#4BB0EE",
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold"
    },

    input: {
        margin: 20,
        fontSize: 16,
        color: "#333"
    }
});  
