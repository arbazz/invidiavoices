import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet, KeyboardAvoidingView, ActivityIndicator
} from 'react-native';
import { ScoreComponent } from '../../components';
import firestore from '@react-native-firebase/firestore';
import { secondaryColor } from '../../config';


export default function ScoreT({ navigation }) {

    const [allScores, setAllScores] = useState([]);
    const [indScore, setIndScore] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const scores = await firestore()
            .collection('Scores')
            .get();
        // console.log(scores._docs);
        let temp = [];
        let temp2 = [];

        for (let i = 0; i < scores._docs.length; i++) {
            if (!scores._docs[i]._data.ind) {
                temp.push(scores._docs[i]);
            } else {
                temp2.push(scores._docs[i]);
            }
        }
        // console.log(temp)
        setAllScores(temp);
        setIndScore(temp2);
        setLoading(false)
    }

    if (loading) {
        return (
            <ActivityIndicator color={secondaryColor} />
        )
    }

    return (
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.title}>All Tracks</Text>
                <ScrollView contentContainerStyle={styles.row} horizontal={true}>
                    {!!allScores.length && allScores.map((e, i) => {
                        return (
                            <React.Fragment key={i}>
                                <ScoreComponent
                                    img={e._data.image}
                                    title={e._data.name}
                                    file={e._data.file}
                                    navigation={navigation} />
                            </React.Fragment>
                        )
                    })}
                </ScrollView>
                <Text style={styles.title}>Christmas Tracks</Text>
                <View style={[styles.row, { flexWrap: 'wrap' }]}>
                    {!!indScore.length && indScore.map((e, i) => {
                        return (
                            <React.Fragment key={i}>
                                <ScoreComponent
                                    img={e._data.image}
                                    title={e._data.name}
                                    file={e._data.file}
                                    navigation={navigation} />
                            </React.Fragment>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginTop: 20,
        marginLeft: '5%'
    },
    title: {
        color: 'grey',
        fontSize: 20,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row'
    }
})