import React, { Component } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Colors } from 'marvel_react/src/commons'

// REDUX
import { connect } from 'react-redux'

class CharacterView extends Component {
    render(){
        const { character } = this.props
        const name = character ? character.name : ''
        const description = character ? character.description : 'Sin descripción'
        const image = character && character.thumbnail ? {  uri: character.thumbnail.path + '/portrait_fantastic.' + character.thumbnail.extension  } : null
        image.uri = image.uri.replace("http", "https")

        return (
            <View style={styles.container}>
                <Image source={ image } style={ styles.imageStyle } resizeMode={'cover'}/>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{ name } </Text>
                    <Text style={styles.description}>{ description } </Text>
                </View>
            </View>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        character: state.characters.item
    }
}

const mapDispatchToProps = (dispatch, props) => {

}

export default connect(mapStateToProps, null)(CharacterView)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    imageStyle: {
        width: '100%',
        height: 252,
    },
    textContainer: {
        padding: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    description: {
        fontSize: 16,
        color: 'white',
        marginTop: 10
    },
})