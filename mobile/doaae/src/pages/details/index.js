import React, { useState } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Details = () => {
    const [data, setData] = useState();
    const defaultText = 'Tenho interesse em doar alimentos';

    const handleComposeMail = () => Linking.openURL(`mailto:${data.point.email}?subject='Doar%20alimento'`)

    const handleWhatsapp = () => Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=${defaultText}`);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.pointInfo}>
                    <Text style={styles.pointName}>DOADOR DE ORGÂOES</Text>
                    <Text style={styles.pointItems}>SIMSISMSIS</Text>
                </View>

                <View style={styles.address}>
                    <Text style={styles.addressTitle}>Travessa Ayrton Senna, 115</Text>
                    <Text style={styles.addressContent}>
                        Diadema, SP
                    </Text>
                </View>

                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={handleWhatsapp}>
                        <Icon name="vertical-align-bottom" size={20} color="#FFF" />
                        <Text style={styles.buttonText}>Whatsapp</Text>
                    </RectButton>

                    <RectButton style={styles.button} onPress={handleComposeMail}>
                        <Icon name="mail" size={20} color="#FFF" />
                        <Text style={styles.buttonText}>E-Mail</Text>
                    </RectButton>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        paddingTop: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    pointImage: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        borderRadius: 10,
        marginTop: 32,
    },

    pointInfo: {
        justifyContent: 'center',
    },

    pointName: {
        color: '#322153',
        fontSize: 28,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 24,
    },

    pointItems: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 8,
        color: '#6C6C80',
    },

    address: {
        marginTop: 32,
    },

    addressTitle: {
        color: '#322153',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    },

    addressContent: {
        fontFamily: 'Roboto_400Regular',
        lineHeight: 24,
        marginTop: 8,
        color: '#6C6C80',
    },

    footer: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#999',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        width: '48%',
        backgroundColor: '#34CB79',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        marginLeft: 8,
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
    },
})

export default Details;