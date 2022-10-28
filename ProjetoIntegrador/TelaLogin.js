import React from "react"
import { SafeAreaView } from "react-native";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function LogIn() {
    return (
        <SafeAreaView style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
            <View style={styles.LogIn}>
                <View style={styles.Group947}>
                    <Image
                        style={styles.LogotipoServiOsDeFazTudoFlatDesignVioleta11}
                        source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e6dswaxv5h9-383%3A908?alt=media&token=1f88700d-8d0d-4ebd-b7e0-c51a6a89b894",
                        }}
                    />
                    <View style={styles.InputText}>
                        <Text style={styles.Txt514}>Email</Text>
                    </View>
                    <View style={styles.InputText1}>
                        <Text style={styles.Txt3310}>Senha</Text>
                        <Text style={styles.Txt1022}>Ver</Text>
                    </View>
                    <View style={styles.ButtonPrimary}>
                        <Text style={styles.Txt782}>LOGAR</Text>
                    </View>
                    <Text style={styles.Txt346}>Esqueceu sua senha?</Text>
                    <View style={styles.Group42}>
                        <View style={styles.Group41}>
                            <Text style={styles.Txt983}>CRIAR CONTA</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    LogIn: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 100,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: 375,
        height: 812,
    },
    Group947: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    /* IosStatusBarBlack: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "right",
      marginBottom: 73,
    },
    Group784: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
    },
    Txt102: {
      fontSize: 15,
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
      color: "rgba(0,0,0,1)",
      width: 37,
      height: 14,
      marginRight: 11,
    },
    Bg: {
      width: 219,
      height: 30,
    },

    RightSide: {
      width: 66.66,
      height: 11.34,
    },
   */
    LogotipoServiOsDeFazTudoFlatDesignVioleta11: {
        width: 221,
        height: 221,
        marginBottom: 38,
    },
    InputText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 15,
        paddingBottom: 13,
        paddingLeft: 15,
        paddingRight: 265,
        marginBottom: 14,
        borderRadius: 8,
        backgroundColor: "white",
        /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e6dswaxv5h9-I144%3A2475%3B144%3A620?alt=media&token=f2ccf23d-cf1a-49ec-a0e8-0a7111d3a436) */
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(232,232,232,1)",
    },
    Txt514: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        color: "rgba(189,189,189,1)",
    },

    InputText1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 15,
        paddingBottom: 13,
        paddingLeft: 15,
        paddingRight: 5,
        marginBottom: 14,
        borderRadius: 8,
        backgroundColor: "white",
        /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e6dswaxv5h9-I144%3A2476%3B144%3A620?alt=media&token=ac0ae3c3-81ae-4bc4-a3ea-2f42ecc332b9) */
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(232,232,232,1)",
    },
    Txt3310: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        color: "rgba(189,189,189,1)",
        marginRight: 236,
    },
    Txt1022: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        color: "rgba(183,207,255,1)",
        textAlign: "right",
        justifyContent: "flex-end",
    },

    ButtonPrimary: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 31,
        paddingRight: 31,
        marginBottom: 14,
        borderRadius: 100,
        backgroundColor: "rgba(0,74,173,1)",
        shadowColor: "rgba(0,0,0,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
        width: 343,
    },
    Txt782: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        color: "rgba(183,207,255,1)",
        textAlign: "center",
        justifyContent: "center",
    },

    Txt346: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        color: "rgba(0,74,173,1)",
        marginBottom: 71,
    },
    Group42: {
        paddingTop: 29,
        paddingBottom: 29,
        paddingLeft: 115,
        paddingRight: 114,
        borderRadius: 100,
        backgroundColor: "lime",
        /*  linear-gradient(0deg, rgba(59,212,65,1), rgba(59,212,65,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e6dswaxv5h9-225%3A1873?alt=media&token=0939aa4a-4752-4c20-9b82-d5465d078e3e) */
        shadowColor: "rgba(59,212,65,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
        width: 343,
        height: 81,
    },
    Group41: {
        width: 110,
        height: 19,
    },
    Txt983: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        color: "rgba(0,0,0,1)",
        textAlign: "center",
        justifyContent: "center",
    },
})
