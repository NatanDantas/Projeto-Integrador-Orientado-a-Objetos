import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Concluido() {
    return (
        <View style={styles.Concluido}>
            <View style={styles.Group391}>
                <View style={styles.Popup}>
                    <View style={styles.Text}>
                        <Text style={styles.Txt899}>Bora Trampa </Text>
                        <View style={styles.IosStatusBarBlack}>
                            <Text style={styles.Txt473}>Conta Cadastrada com sucesso</Text>
                        </View>
                    </View>
                    <View style={styles.ButtonPrimary}>
                        <Text style={styles.Txt144}>OK</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Concluido: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 200,
        paddingBottom: 224,
        paddingLeft: 25,
        paddingRight: 0,
        backgroundColor: "rgba(0,74,173,1)",
        width: 500,
        height: 850,
    },
    Group391: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    IosStatusBarBlack: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    Popup: {
        display: "flex",
        flexDirection: "column",
        paddingTop: 31,
        paddingBottom: 68,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "white",
        shadowColor: "rgba(38,36,131,0.25)",
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
    },
    Text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 39,
    },
    Txt899: {
        fontSize: 24,
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        color: "rgba(0,0,0,1)",
        textAlign: "center",
        justifyContent: "center",
        marginBottom: 22,
    },
    IosStatusBarBlack: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    Txt473: {
        fontSize: 20.21,
        fontFamily: "Inter, sans-serif",
        fontWeight: "500",
        color: "rgba(102,102,102,1)",
        textAlign: "center",
        justifyContent: "center",
        width: 311,
        height: 121,
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
        borderRadius: 100,
        backgroundColor: "rgba(59,212,65,1)",
        width: 311,
    },
    Txt144: {
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: "600",
        color: "rgba(183,207,255,1)",
        textAlign: "center",
        justifyContent: "center",
    },
})
