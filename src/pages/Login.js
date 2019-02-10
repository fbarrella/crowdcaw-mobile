import React, { Component } from 'react';
import { AsyncStorage, View, StyleSheet, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, Image } from 'react-native';

export default class Login extends Component {
    state = {
        username: ''
    };

    async componentDidMount() {
        const username = await AsyncStorage.getItem('@CrowdCaw:username');

        if(username){
            this.props.navigation.navigate('App');
        }
    };

    handleInputChange = data => {
        this.setState({
            username: data
        });
    };

    handleSubmit = async () => {
        const { username } = this.state;

        if (!username.length) return;

        await AsyncStorage.setItem('@CrowdCaw:username', username);

        this.props.navigation.navigate('App');
    };

  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleBlock}>
                    <Image style={{width: 100, height: 100}} source={require('../image/crowdcaw.png')} />
                    <Text style={styles.mainTitle}>crowdcaw</Text>
                </View>

                <TextInput 
                    style={styles.input}
                    placeholder="Nome de usuário"
                    value={this.state.username}
                    onChangeText={this.handleInputChange}
                    returnKeyType="go"
                    onSubmitEditing={this.handleSubmit}
                />

                <TouchableOpacity onPress={() => {this.handleSubmit}} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#e4d9eb"
    },

    titleBlock: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center"
    },

    mainTitle: {
      fontSize: 35,
      fontFamily: 'Fredoka One',
      color: '#5f3479'
    },
  
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 30
    },
  
    input: {
      borderWidth: 1,
      borderColor: "#DDD",
      borderRadius: 5,
      height: 44,
      paddingHorizontal: 15,
      alignSelf: "stretch",
      marginTop: 30,
      backgroundColor: '#FFF'
    },
  
    button: {
      height: 44,
      alignSelf: "stretch",
      marginTop: 10,
      backgroundColor: "#5f3479",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center"
    },
  
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold"
    }
  });
  