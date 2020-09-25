import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

export default function Hore() {

    return (
        <>
            <View style={styles.back}>
                <Text style={styles.textC}>CURRENT INVIDIA VOICES GROUPS</Text>
                <ScrollView contentContainerStyle={styles.hore} horizontal={true}>
                    <View style={styles.secondCard}>
                        <Text style={styles.titleDilon}> Diss – St Henry Morse Church Group </Text>
                        <Text style={styles.quo}>Tuesday Evenings,</Text>
                        <Text style={styles.quo}>7.30 - 9.00 PM.</Text>
                        <Text style={styles.quo}>St Henry Morse Church</Text>
                        <Text style={styles.quo}>Shelfanger Road</Text>
                        <Text style={styles.quo}>Diss</Text>
                        <Text style={styles.quo}>IP22 4DX</Text>
                    </View>
                    <View style={styles.secondCard}>
                        <Text style={styles.titleDilon}> Diss – St Henry Morse Church Group </Text>
                        <Text style={styles.quo}>Tuesday Evenings,</Text>
                        <Text style={styles.quo}>7.30 - 9.00 PM.</Text>
                        <Text style={styles.quo}>St Henry Morse Church</Text>
                        <Text style={styles.quo}>Shelfanger Road</Text>
                        <Text style={styles.quo}>Diss</Text>
                        <Text style={styles.quo}>IP22 4DX</Text>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    hore: {
        flexDirection: 'row'
    },
    imagePIc1: {
        resizeMode: 'contain',
        width: '90%',
        height: 199,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondCard: {
        marginTop: 20,
        backgroundColor: 'white',
        elevation: 8,
        width: 220,
        padding: 10,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 7,
        paddingHorizontal: 10,
        paddingVertical: 30,
        elevation: 10
    },
    imageProf: {
        resizeMode: 'cover',
        width: 200,
        height: 150
    },
    titleDilon: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
    quo: {
        color: 'grey',
        // fontStyle: 'italic',
        textAlign: 'center'
    },
    textC: {
        marginTop: 20,
        marginLeft: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    back: {
        backgroundColor: '#b965db',
        paddingBottom: 50
    }
})