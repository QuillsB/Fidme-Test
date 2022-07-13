import React from 'react';

import { StyleSheet, View, Text } from 'react-native';

import LottieView from 'lottie-react-native';

import eyes from '../assets/eyes.json';
import { colors } from './styles';

export default function DeleteAccountTopPart() {
  const renderAnimation = () => (
    <LottieView autoPlay loop source={eyes} style={styles.deleteAccountTopPartAnimation} />
  );

  const renderContentText = () => (
    <>
      <Text style={styles.deleteAccountTopPartContentText}>
        Cela nous attriste beaucoup de vous voir partir,
      </Text>
      <Text style={styles.deleteAccountTopPartContentText}>
        mais nous respectons votre choix
      </Text>
    </>
  );

  return (
    <View style={styles.deleteAccountTopPartContainer}>
      <Text style={styles.deleteAccountTopPartText}>
        <Text style={styles.deleteAccountTopPartTextBold}>Supprimer</Text> mon compte
      </Text>
      <View style={styles.deleteAccountTopPartAnimationContainer}>
        {renderAnimation()}
        {renderContentText()}
      </View>
      <View style={styles.deleteAccountTopHorizontalBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  deleteAccountTopPartContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30
  },
  deleteAccountTopPartText: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: '300'
  },
  deleteAccountTopPartTextBold: {
    fontWeight: '800',
    color: colors.pepper
  },
  deleteAccountTopPartAnimationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deleteAccountTopPartAnimation: {
    flex: 1,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteAccountTopPartContentText: {
    textAlign: 'center',
    width: 250,
    color: colors.pepper
  },
  deleteAccountTopHorizontalBar: {
    marginTop: 40,
    borderBottomColor: colors.pepper,
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})
