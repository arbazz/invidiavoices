import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,

} from 'react-native';
import { primaryColor } from '../../config';
import { Banner, CardHome, SecondCard, HorizontalCard } from '../../components';

export default function Home({ navigation }) {

    return (
        <ScrollView style={styles.container}>
            <Banner />
            <CardHome />
            <SecondCard navigation={navigation} />
            <HorizontalCard navigation={navigation} />
            <View style={{ height: 5 }} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: primaryColor,
    },
})