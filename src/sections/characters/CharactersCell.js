import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default class CharactersCell extends Component {

    // Props por defecto, para que la App no casque si no se las paso
    static defaultProps = {
        onSelect    : () => {},
        item        : {}
    }

    render() {
        const { item, onSelect } = this.props
        const name = item.name ? item.name : ''
        const image = item && item.thumbnail ? {  uri: item.thumbnail.path + '/landscape_large.' + item.thumbnail.extension  } : null
        image.uri = image.uri.replace("http", "https")

        return (
            <TouchableOpacity onPress={ () => onSelect(item)}>
                <Image source={ image } style={ styles.imageStyle } resizeMode={'cover'}/>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{ name } </Text> 
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle: {
       width: '100%',
       height: 200,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(100,100,100,0.5)'        
    },
    name: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
})