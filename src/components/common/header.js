import React from 'react';
import {Text, View} from 'react-native';
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
    textStyle: {
        fontSize: 20,
        color: '#f2f2f2'
    },
    viewStyle: {
        backgroundColor: '#4A90E2',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 16,
        height: 60,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 2,
        position: 'relative'

    }
};
export {Header};
