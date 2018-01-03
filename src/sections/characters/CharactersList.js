import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button, ActivityIndicator } from 'react-native';
import { AsyncCalls, Colors } from 'marvel_react/src/commons'
import { Actions } from 'react-native-router-flux'

import CharactersCell from './CharactersCell'

// REDUX
import { connect } from 'react-redux'
import * as CharactersActions from 'marvel_react/src/redux/actions/characters'

class CharactersList extends Component {
    
    componentWillMount(){  
        this.props.fetchCharactersList()
    }

    onSelect(character){
        //console.log('character: ', character)
        this.props.updateSelected(character)
    }

    renderItem(item, index){
        return (
            <CharactersCell 
                item = { item } 
                onSelect = { (character) => this.onSelect(character) }
            />
        )
    }

    renderFooter(){
        return <ActivityIndicator amimating={this.props.isFetching} size='large' style={styles.spinner}/>
    }

    render() {
        console.log('this.props.character: ', this.props.character)
        return (
            <View style={styles.container}>
                <FlatList
                    data = { this.props.list }
                    renderItem = {({item, index}) => this.renderItem(item, index)}
                    keyExtractor = { (item, index) => item.id }
                    extraData = { this.props }
                    ListFooterComponent={() => this.renderFooter()}
                />
            </View> 
        )
    }
}

const mapStateToProps = (state) => { 
    return { 
        list: state.characters.list,
        character: state.characters.item
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchCharactersList: () => {
            dispatch(CharactersActions.fetchCharactersList())
        },

        updateSelected: (character) => {
            dispatch(CharactersActions.updateCharacterSelected(character))
            Actions.CharacterView({ title: character.name })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList)

const styles = StyleSheet.create({
    contaniner: {
        flex:1,
        backgroundColor: Colors.background,
        paddingVertical: 20
    },
    cell: {
        height: 100,
        backgroundColor: '#cccccc',
        marginVertical: 10,
        padding: 10
    },
    title:{ 
        padding: 10, 
        textAlign: 'center', 
        fontSize: 20
    },
    spinner: {
        marginTop: 250,
        color: 'grey'
    }
});