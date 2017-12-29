import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux'

import CharactersList from './sections/characters/CharactersList'
import * as webservices from 'marvel_react/src/webservices/webservices'

export default class App extends Component {

  componentWillMount(){
    webservices.configureAxios()
  }

  render() {

    return (
      <Router>
        <Scene key='root'>

          <Scene
            key = {'CharactersList'}
            component = { CharactersList }
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({

});
