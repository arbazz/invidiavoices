import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity, ActivityIndicator
} from 'react-native';
import { secondaryColor } from '../../config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RNFetchBlob from 'rn-fetch-blob'
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';


export default function ScorePLay({ route, navigation }) {
    console.log(route.params.data);
    const data = route.params.data;

    const [downloading, setDownloading] = useState(false);
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = async () => {
        setDownloading(true);
        RNFetchBlob
            .config({
                // add this option that makes response data to be stored as a file,
                // this is much more performant.
                fileCache: true,
            })
            .fetch('GET', data.file, {
                //some headers ..
            })
            .then(async (res) => {
                // the temp file path
                // console.log('The file saved to ', res);
                AsyncStorage.setItem(data.title, res.path());
                await checkIsDownload();
                setDownloading(false);
                Toast.show('File downloaded.', Toast.LONG);
            })
    };

    useEffect(() => {
        checkIsDownload();
    }, [])

    const checkIsDownload = async () => {
        const res = await AsyncStorage.getItem(data.title);
        if (res !== null) {
            setDownloaded(res);
            // console.log(res)
        }
    }

    return (
        <View style={styles.contianer}>
            <View style={styles.header}>
                <Image
                    source={data.img ? { uri: data.img } : require('../../../assets/music.jpg')}
                    style={styles.img}
                />
                <Text style={styles.ayrhin}>{data.title}</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.back}
                    onPress={() => navigation.navigate("Pdf", { data: data.file })}
                >
                    <FontAwesome5 name="book-reader" style={styles.icon} />
                </TouchableOpacity>
                {!downloaded ? <TouchableOpacity
                    style={styles.back} onPress={handleDownload}>
                    {!downloading ? <AntDesign name="download" style={styles.icon} />
                        : <ActivityIndicator color="white" />}
                </TouchableOpacity> :
                    <TouchableOpacity style={styles.back}
                        onPress={() => navigation.navigate("Pdf", { data: downloaded, file: true })}
                    >
                        <AntDesign name="checkcircleo" style={styles.icon} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1
    },
    header: {
        backgroundColor: secondaryColor,
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: '50%',
        height: '65%',
        borderRadius: 10
    },
    ayrhin: {
        marginTop: 20,
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    },
    iconContainer: {
        justifyContent: 'space-around',
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        alignSelf: 'center'
    },
    icon: {
        fontSize: 35,
        color: 'white'
    },
    back: {
        backgroundColor: secondaryColor,
        padding: 15,
        borderRadius: 180
    }
})