import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TextInput
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { primaryColor } from '../../config';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SecondCard({ navigation }) {

    const [post, setpost] = useState('');


    const handleSendPost = () => {
        if (post) {
            navigation.navigate("Web", { url: `https://www.invidiavoices.co.uk/?s=&postcode=${post}` })
        }
    }

    return (
        <LinearGradient colors={['#f0dbfe', '#a88ff3', '#aa7ce9', '#c8e5ff',]}>
            <View style={[styles.card, { marginTop: 10 }]}>
                <ImageBackground
                    style={styles.imagePIc1}
                    source={require("../../../assets/slide1.jpg")} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Web", { url: "https://www.invidiavoices.co.uk/groups/" })}
                        style={styles.bann}>
                        <Text style={styles.text}>I WANT TO JOIN INVIDIA VOICES! SIGN ME UP!</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={[styles.card, { marginTop: 10 }]}>
                <ImageBackground
                    style={styles.imagePIc1}
                    source={require("../../../assets/slide1.jpg")} >
                    <TextInput
                        style={styles.input}
                        onChangeText={e=>setpost(e)}
                        value={post}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Web", { url: "https://www.invidiavoices.co.uk/groups/" })}
                        style={[styles.bann, { backgroundColor: "#e3af3f" }]}>
                        <Text style={styles.text}>FIND THE CLOSEST GROUP TO YOU</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={[styles.card, { marginTop: 10 }]}>
                <ImageBackground
                    style={styles.imagePIc1}
                    source={require("../../../assets/slide1.jpg")} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Web", { url: "https://www.invidiavoices.co.uk/groups/" })}
                        style={[styles.bann, {backgroundColor: "#2b919d"}]}>
                        <Text style={styles.text}>BOOK YOUR FIRST FREE TASTER SESSION NOW</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </LinearGradient>

    )
}



const styles = StyleSheet.create({
    imageLog: {
        resizeMode: 'contain',
        width: '80%',
        height: 300,
        alignSelf: 'center'
    },
    card: {
        marginTop: -50,
        width: '80%',
        alignSelf: 'center',
        padding: 15,
        elevation: 10,
        backgroundColor: 'white',
        borderRadius: 4,
        backgroundColor: 'transparent'
    },
    imagePIc1: {
        resizeMode: 'contain',
        width: '100%',
        height: 199,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bann: {
        backgroundColor: '#9c42bf',
        padding: 10,
        width: '90%',
        borderRadius: 10,
        elevation: 10,
        marginBottom: -20
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        backgroundColor: 'white',
        height: 35,
        width: '80%',
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 10
    }
})