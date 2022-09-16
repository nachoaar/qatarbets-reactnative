import React from "react";
import { ViewPropTypes, StyleSheet, View, Text, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import usersIcon from '../../assets/users.png'
import betsIcon from '../../assets/bets.png'
import matchesIcon from '../../assets/matches.png'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const AppBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconsContainer}
            onPress={() => useNavigation.navigate('UserScreen')}
            >
                <Image style={styles.image} source={usersIcon}></Image>
                <Text style={styles.titles}>Usuarios</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconsContainer}>
                <Image style={styles.image} source={betsIcon}></Image>
                <Text style={styles.titles}>Apuestas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconsContainer}>
                <Image style={styles.image} source={matchesIcon}></Image>
                <Text style={styles.titles}>Partidos</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D20A46',
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    iconsContainer: {
        alignItems: "center"
    },

    image: {
        width: 40,
        height: 20,
    },

    titles: {
        color: '#ffffff',
        fontWeight: '900',
        fontSize: 15,
        paddingHorizontal: 5
    }
});

export default AppBar