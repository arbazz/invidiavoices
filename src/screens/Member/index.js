import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Box } from '../../components';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { primaryColor } from '../../config';

export default function Member({navigation}) {

    return (
        <ScrollView>
            <View style={styles.conrtai}>
                <Box title="Learn a song"
                    nav={() => navigation.navigate("Learn")}
                    icon={<Feather name="music" style={styles.icon} />} />
                <Box title="Vocal Exercises"
                    icon={<MaterialCommunityIcons name="tune" style={[styles.icon, { color: primaryColor }]} />} />
                <Box title="Newsletter"
                    icon={<FontAwesome name="newspaper-o" style={[styles.icon, { color: 'grey' }]} />} />
                <Box title="Calender"
                    icon={<AntDesign name="calendar" style={[styles.icon, { color: 'orange' }]} />} />
                <Box title="Refer a friend"
                    icon={<FontAwesome5 name="user-friends" style={[styles.icon, { color: '#ff6666' }]} />} />
                <Box title="Find a member"
                    icon={<AntDesign name="find" style={[styles.icon, { color: 'brown' }]} />} />
                <Box title="Choir Information"
                    icon={<AntDesign name="infocirlceo" style={[styles.icon, { color: 'blue' }]} />} />
                <Box title="My Account"
                    icon={<MaterialCommunityIcons name="account" style={[styles.icon, { color: 'grey' }]} />} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conrtai: {
        marginTop: 4,
        flexDirection: 'row',
        // alignSelf: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 50,
        color: '#be73db',
    },
})