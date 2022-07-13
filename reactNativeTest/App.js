/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import { colors } from './components/styles.js';

import DeleteAccountScreen from './screen/DeleteAccountScreen';

const App: () => Node = () => {
    const backgroundStyle = {
        flex: 1,
        backgroundColor: colors.background,
    };


    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={'light-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <DeleteAccountScreen />
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
