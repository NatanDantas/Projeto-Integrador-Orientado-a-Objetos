import React from 'react';
import { StyleSheet, Image, Text, View, ImageBackground } from 'react-native';

export default function Rectangle242() {
    return (
        <View style={styles.Rectangle242}>
            <View style={styles.Group60}>
                <Text style={styles.Txt962}>GetJobs</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Rectangle242: {
        backgroundColor: 'rgba(0,74,173,1)',
        width: 500,
        height: 138,
    },
    Group60: {
        position: 'absolute',
        top: 0,
        left: 0,
        paddingTop: 55,
        paddingBottom: 0,
        paddingLeft: 94,
        paddingRight: 84,
        backgroundColor: 'rgba(0,74,173,1)',
        width: 500,
        height: 141,
    },
    Txt962: {
        fontSize: 32,
        fontFamily: 'Inter, sans-serif',
        fontWeight: '600',
        color: 'rgba(183,207,255,1)',
        textAlign: 'center',
        justifyContent: 'center',
        width: 196,
        height: 57,
    },
});
