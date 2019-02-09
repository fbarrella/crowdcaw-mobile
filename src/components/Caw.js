import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../services/api';

export default class Caw extends Component {
  handleFav = async () => {
      const { _id } = this.props.caw;

      await api.post(`fav/${_id}`);
  };

  render() {
    const { caw } = this.props;

    return (
        <View style={styles.container}>
            <Text style={styles.author}>{caw.author}</Text>
            <Text style={styles.content}>{caw.desc}</Text>

            <TouchableOpacity style={styles.likeButton} onPress={this.handleFav}>
                <Icon name="heart-o" size={20} color="#999" />
                <Text style={styles.likeText}>{caw.favs}</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: "#eee"
    },

    author: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1C2022"
    },

    content: {
        fontSize: 15,
        lineHeight: 20,
        color: "#1C2022",
        marginVertical: 10
    },

    likeButton: {
        flexDirection: "row",
        alignItems: "center"
    },

    likeText: {
        color: "#999",
        marginLeft: 5
    }
});
