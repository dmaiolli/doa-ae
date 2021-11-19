import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { ScrollView } from "react-native-gesture-handler";
import { create } from "../../services/OngService";
import { validar } from "../util/ONG";

const NewOng = (props) => {
    const { navigate } = props.navigation;

    const [entityName, setEntityName] = useState();
    const [email, setEmail] = useState();
    const [description, setDescription] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [cnpj, setCpnj] = useState();
    const [number, setNumber] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [uf, setUf] = useState();

    const handleNewOng = () => {
        if (validar(entityName, description, email, whatsapp, cnpj, uf, city, number, street)) {
            create(entityName, description, email, whatsapp, cnpj, uf, city, number, street)
                .then(navigate("home"))
                .catch((erro) => console.error(erro))
        }
    }

    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <Text style={styles.title}>Dados</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nome da entidade"
                            value={entityName}
                            onChangeText={setEntityName}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <View style={styles.splitTwoItens}>
                            <TextInput
                                style={styles.input50}
                                placeholder="Whatsapp"
                                value={whatsapp}
                                onChangeText={setWhatsapp}
                            />
                            <TextInput
                                style={styles.input50}
                                placeholder="CNPJ"
                                value={cnpj}
                                onChangeText={setCpnj}
                            />
                        </View>
                        <TextInput
                            style={[styles.input, styles.multiline]}
                            placeholder="Descrição"
                            value={description}
                            onChangeText={setDescription}
                            multiline={true}
                            numberOfLines={5}
                        />
                        <Text style={styles.title}>Endereço</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Estado UF ex. 'SP'"
                            value={uf}
                            onChangeText={setUf}
                            autoCapitalize="characters"
                            maxLength={2}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Cidade"
                            value={city}
                            onChangeText={setCity}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Número"
                            value={number}
                            onChangeText={setNumber}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Rua/Avenida"
                            value={street}
                            onChangeText={setStreet}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleNewOng}>
                            <Icon name="add" size={20} color="#FFF" />
                            <Text style={styles.buttonText}>Criar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 32,
    },
    form: {
        backgroundColor: "#FFF",
        borderRadius: 8,
        marginTop: 15,
        padding: 16
    },
    title: {
        fontSize: 18,
        color: "#322153",
        fontWeight: 'bold',
        marginBottom: 6,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F5'
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
        flex: 1,
        backgroundColor: '#34CB79',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    buttonText: {
        marginLeft: 8,
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium',
    },
})

export default NewOng;