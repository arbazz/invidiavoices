import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LongBox } from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

export default function Learn({ navigation }) {

    return (
        <ScrollView>
            <View style={stlyes.header}>
                <Ionicons name="arrow-back"
                    onPress={() => navigation.goBack()}
                    style={stlyes.back} />
                <View style={stlyes.center}>
                    <Text style={stlyes.lear}>Learn a</Text>
                    <Text style={stlyes.song}>Song</Text>
                </View>
            </View>
            <View style={stlyes.maio}>
                <LongBox title="Score only"
                nav={()=>navigation.navigate("Score")}
                    icon={<AntDesign name="pdffile1" style={stlyes.icon} />}
                />
                <LongBox title="Score + Track"
                   nav={()=>navigation.navigate("ScoreT")}
                    icon={<AntDesign name="pdffile1" style={stlyes.icon} />}
                />
                <LongBox title="Score Reader"
                    icon={<AntDesign name="pdffile1" style={stlyes.icon} />}
                />
            </View>
            <View style={{height: 20}}/>
        </ScrollView>
    )
}

const stlyes = StyleSheet.create({
    header: {
        backgroundColor: "#c673e7",
        height: 200,
    },
    lear: {
        color: 'white',
        fontSize: 35
    },
    song: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold'
    },
    center: {
        height: '100%',
        marginLeft: 30,
        marginTop: 30
    },
    back: {
        marginLeft: 5,
        fontSize: 30,
        color: 'white'
    },
    icon: {
        fontSize: 50,
        color: '#be73db',
    },
    maio: {
        alignSelf: 'center',
        width: '80%',
        marginTop: -50
    }
})