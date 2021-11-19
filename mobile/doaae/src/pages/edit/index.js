import React, { useEffect, useState } from "react";
import { Button, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { update } from "../../services/OngService";
import { validar } from "../util/ONG";

const Edit = (props) => {
    const { cdOng, city, cnpj, description, email, name, number, street, uf, whatsapp } = props.route.params;

    const [newName, setEntityName] = useState(name);
    const [newEmail, setEmail] = useState(email);
    const [newDescription, setDescription] = useState(description);
    const [newWhatsapp, setWhatsapp] = useState(whatsapp);
    const [newCnpj, setCpnj] = useState(cnpj);
    const [newNumber, setNumber] = useState(number);
    const [newStreet, setStreet] = useState(street);
    const [newCity, setCity] = useState(city);
    const [newUf, setUf] = useState(uf);

    const handleUpdateOng = () => {
        if (validar(newName, newDescription, newEmail, newWhatsapp, newCnpj, newUf, newCity, newNumber, newStreet)) {
            update(cdOng, newName, newDescription, newEmail, newWhatsapp, newCnpj, newUf, newCity, newNumber, newStreet)
                .then(props.navigation.navigate("home"));
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <Text style={styles.title}>Dados</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome da entidade"
                            value={newName}
                            onChangeText={setEntityName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={newEmail}
                            onChangeText={setEmail}
                        />
                        <View style={styles.splitTwoItens}>
                            <TextInput
                                style={styles.input50}
                                placeholder="Whatsapp"
                                value={newWhatsapp}
                                onChangeText={setWhatsapp}
                            />
                            <TextInput
                                style={styles.input50}
                                placeholder="CNPJ"
                                value={newCnpj}
                                onChangeText={setCpnj}
                            />
                        </View>
                        <TextInput
                            style={[styles.input, styles.multiline]}
                            placeholder="Descrição"
                            value={newDescription}
                            onChangeText={setDescription}
                            multiline={true}
                            numberOfLines={5}
                        />
                        <Text style={styles.title}>Endereço</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Estado UF ex. 'SP'"
                            value={newUf}
                            autoCapitalize="characters"
                            onChangeText={setUf}
                            maxLength={2}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Cidade"
                            value={newCity}
                            onChangeText={setCity}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Número"
                            value={newNumber}
                            onChangeText={setNumber}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Rua/Avenida"
                            value={newStreet}
                            onChangeText={setStreet}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleUpdateOng}>
                            <Icon name="mail" size={20} color="#FFF" />
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
    form: {
        backgroundColor: "#FFF",
        borderRadius: 8,
        marginTop: 15,
        padding: 16
    },
    input: {
        height: 35,
        backgroundColor: '#F0F0F5',
        borderRadius: 4,
        marginBottom: 12,
        paddingHorizontal: 12,
        fontSize: 12,
    },
    multiline: {
        height: 80,
        textAlignVertical: "top"
    },
    splitTwoItens: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input50: {
        flex: 0.49,
        backgroundColor: '#F0F0F5',
        borderRadius: 4,
        marginBottom: 12,
        paddingHorizontal: 12,
        fontSize: 12,
        height: 35
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

export default Edit;