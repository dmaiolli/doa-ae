import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput } from 'react-native';
import { View, TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Icon } from 'react-native-elements';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

const Home = (props) => {
    const { navigate } = props.navigation;
    const [uf, setUf] = useState('');
    const [city, setCity] = useState('');

    const handleNavigateToList = () => navigate("listAll", { uf, city });

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
            <ScrollView>
                <View style={styles.container}>


                    <View style={styles.main}>
                        <View>
                            <Text style={styles.title}>Seu aplicativo de doação de alimentos.</Text>
                            <Text style={styles.description}>Juntos podemos mudar o mundo!</Text>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a UF"
                            value={uf}
                            onChangeText={setUf}
                            autoCapitalize="characters"
                            maxLength={2}
                            autoCorrect={false}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a cidade"
                            value={city}
                            onChangeText={setCity}
                            autoCorrect={false}
                        />

                        <TouchableOpacity style={styles.button} onPress={handleNavigateToList}>
                            <View style={styles.buttonIcon}>
                                <Icon name="arrow-right" color="#FFF" size={24} />
                            </View>
                            <Text style={styles.buttonText}>Pesquisar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigate("newOng")}>
                            <View style={styles.buttonIcon}>
                                <Icon name="arrow-right" color="#FFF" size={24} />
                            </View>
                            <Text style={styles.buttonText}>Cadastrar nova ONG</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },

    main: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64,
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
    },

    footer: {},

    select: {},

    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 24,
        fontSize: 16,
    },

    button: {
        flex: 1,
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 16,
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    },
})


export default Home;