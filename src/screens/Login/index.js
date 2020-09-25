import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Toast from 'react-native-simple-toast';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';

const usersCollection = firestore().collection('Users');


export default function Login({ navigation }) {

    const [email, setEmail] = useState('arbtouseef@gmail.com');
    const [password, setPassword] = useState("1998223a");
    const [loading, setLoading] = useState(false);
    const [deviceName, setDeviceName] = useState("");

    useEffect(() => {
        DeviceInfo.getDeviceName().then(d => {
            console.log(d);
            setDeviceName(d);
        });
    }, []);

    const handleLogin = () => {
        if (email && password) {
            setLoading(true)
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    usersCollection.add({
                        email,
                        password,
                        status: false,
                        deviceName
                    })
                        .then(() => {
                            Toast.show('signed in!');
                            setLoading(false);
                            navigation.navigate("Member");
                        });


                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        // Toast.show('That email address is already in use!');
                        handleRecurisive();
                    }

                    if (error.code === 'auth/invalid-email') {
                        Toast.show('That email address is invalid!');
                        setLoading(false)
                    }
                    if (error) {
                        setLoading(false)
                    }
                    console.log(error);
                });
        } else {
            Toast.show('Email and password needed.');

            setLoading(false)

        }
    };

    const handleRecurisive = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                Toast.show('signed in!');
                setLoading(false);
                navigation.navigate("Member");
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Toast.show('That email address is already in use!');
                    setLoading(false)
                }

                if (error.code === 'auth/invalid-email') {
                    Toast.show('That email address is invalid!');
                    setLoading(false)
                }
                if (error) {
                    setLoading(false)
                }

                console.log(error);
            });
    }


    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior={"position"} style={styles.sec}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />
                <Text style={styles.pr}>Proceed with your</Text>
                <Text style={styles.login}>Login</Text>
                <View style={styles.textPutCOnt}>
                    <View>
                        <Text>Email</Text>
                        <View style={styles.desing}>
                            <TextInput
                                style={styles.textInput}
                                placeholder={"Enter your email..."}
                                value={email}
                                onChangeText={e => setEmail(e)}
                            />
                            <AntDesign name="user" style={styles.textIocn} />
                        </View>
                    </View>
                </View>
                <View style={styles.textPutCOnt}>
                    <View>
                        <Text>Password</Text>
                        <View style={styles.desing}>
                            <TextInput
                                value={password}
                                onChangeText={e => setPassword(e)}
                                style={styles.textInput}
                                placeholder={"Enter your password..."}
                                secureTextEntry={true}
                            />
                            <AntDesign name="key" style={styles.textIocn} />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.fable} onPress={handleLogin}>
                    {!loading ? <Text style={styles.loginText}>Login</Text>
                        : <ActivityIndicator color="white" size={30} />}
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white'
    },
    sec: {
        width: '85%',
        alignSelf: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: '40%',
        // backgroundColor: 'red',
        height: 120,
        marginLeft: -20
    },
    pr: {
        fontSize: 19,
        marginTop: 20
    },
    login: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10
    },
    textPutCOnt: {
        // backgroundColor: 'orange',
        marginTop: 60,
    },
    textInput: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '90%'
    },
    textIocn: {
        fontSize: 20,
        color: "#59bbb2"
    },
    desing: {
        flexDirection: "row",
        alignItems: 'center'
    },
    fable: {
        marginTop: 30,
        backgroundColor: "#59bbb2",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 5
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})