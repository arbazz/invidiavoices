import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

const width = Dimensions.get("window").width;

export default function ScoreCOmponent({ navigation, title, img, file }) {

    return (
        <TouchableOpacity style={styles.container}
            onPress={() => navigation.navigate("ScorePlay", {data: {title, img, file}})}>
            <Image
                source={img ? {uri: img} : require('../../../assets/music.jpg')}
                style={styles.image}
            />
            <Text style={styles.title} numberOfLines={3}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: width / 3 - 30,
        height: 220,
        elevation: 3,
        marginRight: 20
    },
    image: {
        width: width / 3 - 30,
        height: 150,
        borderRadius: 10,
    },
    title: {
        marginTop: 10,
        color: 'grey',
        fontWeight: 'bold',
        width: '98%',
        textAlign: 'center',
    }
})