import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../images/Book.png')} resizeMode='contain' style={styles.image} />
            <Text style={styles.title}>Book Collection</Text>
            <Text style={styles.paragraph}>
            Share your unspoken thoughts and feelings about the latest films and your all-time favorites. Rest assured, it's completely safe and confidential—we promise no one else will know.
            </Text>
            <View style={styles.btncontainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        padding: 20,
    },
    image: {
        width: 250,
        height: 300,
        marginBottom: 20,
        marginRight:15,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F1CCBA',
        marginBottom: 20,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        marginBottom: 15,
        lineHeight: 20,
    },
    btncontainer:{
        paddingTop:'10%'
    },
    button: {
        backgroundColor: '#23714D',
        paddingVertical: 15,
        paddingHorizontal: 50,
        width:300,
        borderRadius: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
