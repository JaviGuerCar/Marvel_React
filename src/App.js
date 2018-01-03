import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux'
import { Colors } from 'marvel_react/src/commons'
import * as webservices from 'marvel_react/src/webservices/webservices'

// COMPONENTS //
import CharactersList from './sections/characters/CharactersList'
import CharacterView from './sections/characters/CharacterView'
import CharacterNew from './sections/characters/CharacterNew'

// REDUX //
import { createStore, applyMiddleware, combineReducers  } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

// Importamos los reducers
import * as reducers from './redux/reducers'

// Combinamos los reducers
const reducer = combineReducers(reducers)
const store = createStore (
  reducer,
  applyMiddleware(thunk)
)

export default class App extends Component {

  componentWillMount(){
    webservices.configureAxios()
    StatusBar.setBarStyle('light-content')
  }

  renderAddCharacterButton(){ 
    return (
      <TouchableOpacity style={styles.addButton} onPress={ () => Actions.CharacterNew() }>
        <Text style={styles.addButtonText}>{'Añadir'}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    console.disableYellowBox = true;
    
    return (
      <Provider store={store}>
        <Router>
          <Scene key='root'>

            <Scene
              key = {'CharactersList'}
              component = { CharactersList }
              title = {'Personajes Marvel'}
              navigationBarStyle = {styles.navBar}
              navBarButtonColor = {'white'}
              renderRightButton = { this.renderAddCharacterButton() }
            />

            <Scene
              key = {'CharacterView'}
              component = { CharacterView }
              navigationBarStyle = {styles.navBar}
              navBarButtonColor = {'white'}
            />

            <Scene
              key = {'CharacterNew'}
              component = { CharacterNew }
              navigationBarStyle = {styles.navBar}
              navBarButtonColor = {'white'}
              title = {'Añadir Personaje'}
            />

          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: Colors.navBar
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
  addButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
