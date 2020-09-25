import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { primaryColor } from '../../config';
import LinearGradient from 'react-native-linear-gradient';

export default function CardHome() {

    return (
        <LinearGradient colors={[primaryColor, '#4db4f9', '#bce3ff', '#f0dbfe']} style={styles.contianer}>
            <View style={styles.card}>
                <Text style={styles.text}>"There are a lot of people out there who love singing, but they don't get the chance to do it. Invidia Voices is a Rock and Soul Choir that gives them the opportunity to sing and perform as much as they like in a supportive environment. They love the singing - but they actually get so much more!"</Text>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>Matt Emmerson - Invidia Founder</Text>
            </View>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    contianer: {
        flexGrow: 1,
        backgroundColor: primaryColor,
        paddingVertical: 50,
        paddingHorizontal: 10,
        marginTop: -20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: "#58bdb7",
        width: '90%',
        alignSelf: 'center'
    },
    text: {
        color: 'white',
        fontWeight: '800',
        textAlign: 'center',
        lineHeight: 25
    }
})