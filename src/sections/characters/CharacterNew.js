import React, { Component } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Colors } from 'marvel_react/src/commons'
import { Input, Button } from 'marvel_react/src/widgets'


// REDUX
import { connect } from 'react-redux'
import * as CharactersActions from 'marvel_react/src/redux/actions/characters'
 
class CharacterNew extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            name: '',
            nameError: '',
            description: '',
            descriptionError: '',
            image: null
        }
    }

    onSubmit(){

    }

    render(){
        //console.log('this.state.name: ', this.state.name)
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Input 
                        onChangeText={ (v) => this.setState({name: v})}
                        value = { this.state.name }
                        error = { this.state.nameError }
                        label = { 'Name:' }
                        placeholder = { 'Thor' }
                    />
                </View>
                
                <View style={styles.inputContainer}>
                    <Input 
                        onChangeText={ (v) => this.setState({description: v})}
                        value = { this.state.description}
                        error = { this.state.descriptionError }
                        label = { 'Description:' }
                        placeholder = { 'Description' }
                    />
                </View>
                
                <View style={styles.buttonContainer}>
                    <Button 
                        label = {'Guardar personaje'}
                        onPress = { () => this.onSubmit()}
                        isFetching = { this.props.isFetching }
                    />
                </View>
            
            </View>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.characters.isFetching
    }
}

export default connect(mapStateToProps, null)(CharacterNew)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10
    },
    inputContainer:{
        margin:10
    },
    buttonContainer: {
        margin:10,
     }
})