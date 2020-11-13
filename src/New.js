
import React, { useState, useEffect } from 'react';

import { Col, Row, Grid } from "react-native-easy-grid";
import Moment from 'moment';

import {
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    Text,
    View,
    Button,
    StatusBar,
    RefreshControl,
} from 'react-native';
Moment.locale('tr');
const New = () => {
    const [refreshing, setRefreshing] = useState(true);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        //Service to get the data from the server to render
        fetch('https://api.fikregel.daire101.com/posts/new')
            .then((response) => response.json())
            .then((responseJson) => {
                setRefreshing(false);
                setDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const ItemView = ({ item }) => {
        return (
            <Grid onPress={() => getItem(item)} style={{ backgroundColor: '#262626', padding: 5, margin: 0 }}>
                <Col size={10} style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                    <Text style={styles.itemStyle3}>
                        {item.score}

                    </Text>
                </Col>
                <Col size={90}>
                    <Row>
                        <Text style={styles.itemStyle}>
                            {item.title}
                        </Text>
                    </Row>
                    <Row>
                        <Text style={styles.itemStyle2}>
                            {item.comments.length + " Yorum  ·  " + Moment(item.created).format('HH:MM  YYYY/MM/DD')}
                        </Text>
                    </Row>
                </Col>
            </Grid>
        );
    };

    const ItemSeparatorView = () => {
        return (
            <View
                style={{
                    height: 0.8,
                    width: '100%',
                    backgroundColor: '#333333'
                }}
            />
        );
    };

    const getItem = (item) => {
        alert(item.text);
    };

    const onRefresh = () => {
        setDataSource([]);
        getData();
    };

    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'#262626' }}>
             
            <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#262626' }}>
                <Text style={{ textAlign: 'center', color: '#57d997', fontSize: 24, fontWeight: 'bold' }}>Fikre Gel</Text>
            </View>
            
            <View style={styles.container}>
                {refreshing ? <ActivityIndicator /> : null}
                
                <FlatList
                    style={{ margin:8}}
                    data={dataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    enableEmptySections={true}
                    renderItem={ItemView}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            </View>     
           
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    itemStyle: {
        color: '#fff',
        fontSize: 16,
        paddingRight: 0,
        paddingTop:3
    },
    itemStyle2: {
        color: '#8b9196',
        fontSize: 10,
        paddingLeft: 0,
        paddingBottom:3
    },
    itemStyle3: {
        color: '#8b9196',
        textAlign: 'center',
        fontSize: 18
    },
});

export default New;