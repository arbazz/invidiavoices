import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { primaryColor } from '../../config';


export default function Web({ route }) {

    const [loading, setLaoding] = useState(true);
    console.log(route.params.url);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setLaoding(false)
    //     },7000)1
    // },[])

    const handleLoad = () => {
        console.log("onLoad")
        if (route.params.url) {
            setLaoding(false)
        }
    }

    return (
        <>
            {loading && <ActivityIndicator color={primaryColor} size={45} style={{ flex: 1, }} />}
            <WebView
                source={{ uri: route.params.url }}
                style={{ flex: 1 }}
                onLoadEnd={(syntheticEvent) => {
                    // update component to be aware of loading status
                    const { nativeEvent } = syntheticEvent;
                    console.log(nativeEvent)
                    handleLoad()
                }}
            />
        </>
    )
}
