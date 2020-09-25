import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function Header(){
    const navigation = useNavigation();

    return(
        <View style={styles.contiaer}>
            <Feather name="menu" style={styles.men}
                   onPress={()=>{navigation.dispatch(DrawerActions.toggleDrawer())}}
            />
            <Text>Invidia Voices</Text>
            <EvilIcons name="user" style={styles.men}
            onPress={()=>navigation.navigate("Login")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contiaer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    men: {
        color: 'white',
        fontSize: 33
    }
})