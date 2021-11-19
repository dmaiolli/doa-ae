import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { deleteByCdOng, findAll, findByUfAndCity } from "../../services/OngService";

const ListOngs = (props) => {
    const { navigate } = props.navigation;
    const { uf, city } = props.route.params;
    const [data, setData] = useState();
    const [isRefreshing, setIsRefreshing] = useState();

    const getData = () => {
        setIsRefreshing(true);
        findByUfAndCity(uf, city)
            .then(response => {
                console.log(response.data);
                setData(response.data)
            })
            .finally(() => setIsRefreshing(false))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getData();
    }, [])

    const handleOpen = (item) => navigate("details", item)
    const handleEdit = (item) => navigate("update", item);
    const handleDelete = (id) => {
        try {
            deleteByCdOng(id)
        } catch (error) {
            console.error(error);
        }
    }

    const renderItem = ({ item }) => {
        return (
            <View>
                <TouchableOpacity style={styles.listEl} onPress={() => handleOpen(item)}>

                    <Text style={styles.title}> {item.name} {item.cdOng} </Text>
                    <TouchableOpacity style={styles.button} onPress={() => handleEdit(item)}>
                        <View style={styles.buttonIcon}>
                            <Icon name="edit" color="#FFF" size={24} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonDangerous]} onPress={() => handleDelete(item.cdOng)}>
                        <View style={styles.buttonIcon}>
                            <Icon name="delete-outline" color="#FFF" size={24} />
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View>
                <View style={styles.container}>
                    <Text style={styles.title}>ONGs localizadas em</Text>
                    <Text style={styles.subtitle}>{uf} - {city}</Text>

                    <FlatList
                        data={data}
                        keyExtractor={(ong) => ong.cdOng}
                        renderItem={renderItem}
                        refreshControl={
                            <RefreshControl
                                onRefresh={() => getData()}
                                refreshing={isRefreshing}
                            />
                        }
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#322153'
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#322153'
    },
    listEl: {
        width: '100%',
        height: 45,
        backgroundColor: "#fff",
        borderRadius: 4,
        padding: 8,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        flexDirection: 'row',
        marginTop: 12
    },
    button: {
        width: 30,
        backgroundColor: '#34CB79',
        height: 30,
        borderRadius: 10,
    },
    buttonDangerous: {
        backgroundColor: '#f55'
    },
    buttonIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
})

export default ListOngs;
