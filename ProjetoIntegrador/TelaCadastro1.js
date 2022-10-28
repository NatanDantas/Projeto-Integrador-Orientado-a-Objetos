import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Cadastro() {
    return (
        <View style={styles.Cadastro}>
            <View style={styles.Group59}>
                <View style={styles.Group58}>
                    <View style={styles.InputText}>
                        <Text style={styles.Txt203}>Nome</Text>
                    </View>
                    <View style={styles.InputText1}>
                        <Text style={styles.Txt203}>CPF</Text>
                    </View>
                    <View style={styles.InputText2}>
                        <Text style={styles.Txt203}>Data de Nascimento</Text>
                    </View>
                    <View style={styles.InputText3}>
                        <Text style={styles.Txt203}>Email</Text>
                    </View>
                    <View style={styles.InputText4}>
                        <Text style={styles.Txt203}>Endereço</Text>
                    </View>
                    <View style={styles.InputText5}>
                        <Text style={styles.Txt203}>Descrição</Text>
                    </View>
                    <View style={styles.InputText6}>
                        <Text style={styles.Txt203}>Digite a senha</Text>
                    </View>
                    <View style={styles.InputText7}>
                        <Text style={styles.Txt203}>Confirme a senha</Text>
                    </View>
                </View>
            </View>
            <View style={styles.Group60}>
                <Text style={styles.Txt962}>GetJobs</Text>
            </View>
            <Text style={styles.Txt914}>Cadastro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Cadastro: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: 375,
        height: 852,
    },
    Group59: {
        position: "absolute",
        top: 209,
        left: 1,
        paddingTop: 0,
        paddingBottom: 18.38,
        paddingLeft: 0,
        paddingRight: 0,
        width: 375,
        height: 837.38,
    },
    Group58: {
        display: "flex",
        flexDirection: "column",
        paddingTop: 22,
        paddingBottom: 201,
        paddingLeft: 11,
        paddingRight: 18,
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    InputText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 19,
        paddingBottom: 17.22,
        paddingLeft: 15,
        paddingRight: 279,
        marginBottom: 21,
        borderRadius: 8,
        backgroundColor: "white",

        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(232,232,232,1)",
        shadowColor: "rgba(0,0,0,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
    },
    Txt203: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        color: "rgba(189,189,189,1)",
    },
    InputText1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 19,
        paddingBottom: 17.22,
        paddingLeft: 15,
        paddingRight: 293,
        marginBottom: 19,
        borderRadius: 8,
        backgroundColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(232,232,232,1)",
        shadowColor: "rgba(0,0,0,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
    },
    Txt203: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        color: "rgba(189,189,189,1)",
    },
    InputText2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 19,
        paddingBottom: 17.22,
        paddingLeft: 15,
        paddingRight: 170,
        marginBottom: 18,
        borderRadius: 8,
        backgroundColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(232,232,232,1)",
        shadowColor: "rgba(0,0,0,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
    },
    Txt203: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        color: "rgba(189,189,189,1)",
    },
    InputText3: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 19,
        paddingBottom: 17.22,
        paddingLeft: 15,
        paddingRight: 284,
        marginBottom: 19,
        borderRadius: 8,
        backgroundColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(232,232,232,1)",
        shadowColor: "rgba(0,0,0,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
    },
    Txt203: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        color: "rgba(189,189,189,1)",
    },
    InputText4: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 19,
        paddingBottom: 17.22,
        paddingLeft: 15,
        paddingRight: 252,
        marginBottom: 18,
        borderRadius: 8,
        backgroundColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(232,232,232,1)",
        shadowColor: "rgba(0,0,0,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
    },
    Txt203: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        color: "rgba(189,189,189,1)",
    },
    InputText5: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 19,
        paddingBottom: 17.22,
        paddingLeft: 15,
        paddingRight: 248,
        marginBottom: 17,
        borderRadius: 8,
        backgroundColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(232,232,232,1)",
        shadowColor: "rgba(0,0,0,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
    },
    Txt203: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        color: "rgba(189,189,189,1)",
    },
    InputText6: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 19,
        paddingBottom: 17.22,
        paddingLeft: 15,
        paddingRight: 216,
        marginBottom: 18,
        borderRadius: 8,
        backgroundColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(232,232,232,1)",
        shadowColor: "rgba(0,0,0,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
    },
    Txt203: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        color: "rgba(189,189,189,1)",
    },
    InputText7: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 19,
        paddingBottom: 17.22,
        paddingLeft: 15,
        paddingRight: 190,
        borderRadius: 8,
        backgroundColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(232,232,232,1)",
        shadowColor: "rgba(0,0,0,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
    },
    Txt203: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        color: "rgba(189,189,189,1)",
    },
    Group60: {
        position: "absolute",
        top: 0,
        left: 0,
        paddingTop: 55,
        paddingBottom: 0,
        paddingLeft: 94,
        paddingRight: 84,
        backgroundColor: "rgba(0,74,173,1)",
        width: 500,
        height: 141,
    },
    Txt962: {
        fontSize: 32,
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        color: "rgba(183,207,255,1)",
        textAlign: "center",
        justifyContent: "center",
        width: 196,
        height: 57,
    },
    Txt914: {
        position: "absolute",
        top: 143,
        left: 82,
        fontSize: 32,
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        color: "rgba(0,0,0,1)",
        textAlign: "center",
        justifyContent: "center",
        paddingTop: 10,
        paddingLeft: 10,
        width: 208,
        height: 46,
    },
})
