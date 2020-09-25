import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const width = Dimensions.get('window').width;

const data = [
    { image: require('../../../assets/slide1.jpg') },
    { image: require('../../../assets/slide2.jpg') },
    { image: require('../../../assets/slide3.jpg') }
]


const _renderItem = (e) => {
    // console.log(e.index)
    return (
        <View key={e.index} style={{backgroundColor: 'red'}}>
            <Image
                source={e.item.image}
                style={styles.image}

            />
        </View>
    );
}


export default function Banenr() {

    return (
        <Carousel
            data={data}
            renderItem={_renderItem}
            sliderWidth={width}
            itemWidth={width}
            autoplayInterval={3000}
            autoplay
            loop
            containerCustomStyle={{height: 230}}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: width,
        height: 230,
        backgroundColor: 'red'
    }
})