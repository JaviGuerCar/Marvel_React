import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { AsyncCalls, Colors } from 'marvel_react/src/commons'

import CharactersCell from './CharactersCell'

// REDUX
import { connect } from 'react-redux'
import * as CharactersActions from 'marvel_react/src/redux/actions/characters'

class CharactersList extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            selected: null,
        }
    }
    
    componentWillMount(){  
        this.props.fetchCharactersList()
    }

    onSelect(character){
        console.log('character: ', character)
        this.setState({ selected: character })
    }

    renderItem(item, index){
        return (
            <CharactersCell 
                item = { item } 
                onSelect = { (character) => this.onSelect(character) }
            />
        )
    }

    render() {
        console.log('this.props.list: ', this.props.list)
        return (
            <View style={styles.container}>
                <FlatList
                    data = { this.props.list }
                    renderItem = {({item, index}) => this.renderItem(item, index)}
                    keyExtractor = { (item, index) => item.id }
                    extraData = { this.props }
                />
            </View> 
        )
    }
}

const mapStateToProps = (state) => { 
    return { 
        list: state.characters.list
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchCharactersList: () => {
            dispatch(CharactersActions.fetchCharactersList())
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
    }
});