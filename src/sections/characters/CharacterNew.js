import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Colors } from 'marvel_react/src/commons'
import { Input, Button } from 'marvel_react/src/widgets'
import ImagePicker from 'react-native-image-picker'


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

    validateForm() {
        let valid = true
        let errors = {}

        if(!this.state.name) {
            errors.name = 'Introduce un nombre'
            valid = false
        }

        if(!this.state.description) {
            errors.description = 'Introduce una descripción'
            valid = false
        }

        this.setState({ 
            nameError: errors.name ? errors.name : '',
            descriptionError: errors.description ? errors.description : '',
        })

        return valid
    }

    onSubmit(){
        if (this.validateForm()){
            const characterData = {
                name : this.state.name,
                description: this.state.description,
                image: this.state.image ? 'data:image/jpeg;base64,' + this.state.image.data : null
            }

            this.props.postCharacter(characterData)
        }

    }

    onSelectImage(){
        const options = {
            title: 'Selecciona la imagen',
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else {
              //let source = { uri: response.uri };
          
              // You can also display the image using data:
              // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                image: response
              });
            }
          });
    }

    render(){
        //console.log('this.state.image: ', this.state.image)
        const imageUri = this.state.image ? { uri: this.state.image.uri } : null
        const imageButtonText = this.state.image ? this.state.image.fileName : 'Elige una imagen'
        return (
            <View style={styles.container}>

                <View style={styles.imageContainer}>
                    <Image source={ imageUri } style={styles.imageBackground} resizeMode={'cover'} />
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.onSelectImage()}>
                        <Text style={styles.textButton}>{ imageButtonText }</Text>
                    </TouchableOpacity>
                </View>

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

const mapDispatchToProps = (dispatch, props) => {
    return {
        postCharacter: (data) => {
            dispatch(CharactersActions.postCharacter(data))
            //Actions.CharacterList()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterNew)

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
    },
    imageContainer:{
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        height: 200,
        backgroundColor: 'grey'
    },
    imageBackground: { 
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold'
    },
    button:{
        padding: 10,
        backgroundColor: 'rgba(155, 155, 155, 0.5)',
        borderRadius: 10
    }
})