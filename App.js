import React from 'react';
import {View, Text, StyleSheet,FlatList,RefreshControl} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        this.getUserName = this.getUserName.bind(this);
        this.getUserName()
    }

    async getUserName() {
        this.setState({refreshing:true})
        let response = await fetch(
            'https://api.fikregel.daire101.com/posts/new',
        );
        let responseJson = await response.json();
        if (responseJson) {
            this.setState({data: responseJson});
        } else {
            console.log('User Name Not Found!');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList

                    data={this.state.data}
                    renderItem={({item}) =>
                        (<Text>{item.title}</Text>)
                    }
                    numColumns={1}

                />
            </View>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#ffffff',
    },

});
