import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ListOngs = (props) => {
    const { user, uf, city } = props.route.params || '';
    const [data, setData] = useState();
    const [isRefreshing, setIsRefreshing] = useState();

    useEffect(() => {
        const getData = () => {
            setIsRefreshing(true);
            // //service
            // const findAllByUser().then(response => {
            //     setData(response.data)
            // })
            // .finally(() => setIsRefreshing(false))
        }

    }, [])

    const renderItem = ({ ong }) => {
        return (
            <View>
                <Text>{ong.name}</Text>
                <Text>{ong.street} - {ong.city}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View>
                <View>
                    <Text>ONGs localizadas em {uf} - {city} </Text>

                    <FlatList
                        data={data}
                        keyExtractor={(ong) => ong.id}
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

export default ListOngs;
