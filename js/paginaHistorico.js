const React = require('react');

const {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  TouchableWithoutFeedback,
} = require('react-native');

const { Component } = React;

import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';

import styles from '../css/appStyle';


var PaginaHistorico = React.createClass({
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.titulo}>
            Ponto Netão!
          </Text>
          <Text style={styles.instructions}>
            Clique no botão abaixo para marcar o ponto. {'\n'}
          </Text>
          <Button handlePress={() => this.toggle()}/>
          <Text style={styles.titulo}>{'Screen 2'} </Text>
          <Button onPress={Actions.PaginaInicial}>{'Pagina Inicial'}</Button>
          <Text style={styles.instructions}>{'Awesome stuffs are here'}</Text>
        </View>
    );
  }
});

module.exports = PaginaHistorico;
