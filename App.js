

import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet, Text, View
} from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Icon, IconButton } from 'react-native-elements';
import New from './src/New';
import Popular from './src/Popular';


const TabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: New,
        navigationOptions: {
            tabBarLabel: 'Yeni',
            activeColor: '#57d997',
            inactiveColor: '#8b9196',
            barStyle: { backgroundColor: '#262626' },
            tabBarIcon: () => (
                <View style={{display:"flex",justifyContent:"center"}}>
                </View>
            )
        }
    },
    Home2: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: 'Popular',
            activeColor: '#57d997',
            inactiveColor: '#8b9196',
            barStyle: { backgroundColor: '#262626' },
            tabBarIcon: () => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    
                </View>
            )
        }
    }
});

export default createAppContainer(TabNavigator)