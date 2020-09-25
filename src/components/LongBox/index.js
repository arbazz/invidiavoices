import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function LongBOx({ title, icon, nav }) {

    return (
        <TouchableOpacity style={styles.contianer}
            onPress={() => nav()}
        >
            {icon}
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contianer: {
        backgroundColor: 'white',   
        alignItems: 'center',
        borderRadius: 10,
        elevation: 10,
        paddingVertical: 30,
        marginHorizontal: 10,
        marginTop: 20
    },
    title: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 22
    },
    
})