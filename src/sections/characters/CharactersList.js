import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { AsyncCalls, Colors } from 'marvel_react/src/commons'
import { fetch } from 'marvel_react/src/webservices/webservices'

export default class CharactersList extends Component {

    constructor(props){
        super(props)
        this.state = {
            list: [],
            selected: null
        }
    }

    componentWillMount(){  
        fetch('/personajes').then((response) => {
            console.log('axios get response: ', response);
            this.setState({ list: response.records })
        })
        .catch((error) => {
            console.log('axios get error: ', error);
        });
    }

    checkIsSelected(item){
        if (this.state.selected && this.state.selected.nombre == item.nombre){
            return { backgroundColor: 'purple' }
        } else {
            return { backgroundColor: 'pink' }
        }
    }

    onSelectedItem(item){
        this.setState({selected: item})
    }

    renderItem(item, index){
        const cellStyle = this.checkIsSelected(item)
        return (
            <View style={[styles.cell, cellStyle]} key={index}>
                <Text>{item.nombre}</Text>
                <Button
                    title={'Seleccionar casa'}
                    onPress={ () => this.onSelectedItem(item) }
                />
            </View>
        )
    }

    render() {
        const nombre = this.state.selected ? this.state.selected.nombre : 'Personaje'
        return (
            <View>
                <Text style={styles.title}>{ nombre }</Text>
                <FlatList
                    data = { this.state.list }
                    renderItem = {({item, index}) => this.renderItem(item, index)}
                    keyExtractor = { (item, index) => item.id }
                    extraData = { this.state }
                />
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    cell: {
        height: 100,
        backgroundColor: '#cccccc',
        marginVertical:10,
        padding: 10
    },
    title:{ 
        padding: 10, 
        textAlign: 'center', 
        fontSize: 20
    }
});