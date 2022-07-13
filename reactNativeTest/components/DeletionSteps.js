import React from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { colors } from './styles';

export default function DeletionSteps(props) {
  const { onClickButton } = props;

  const renderLeftPart = () => (
    <View style={styles.deleteAccountBottomPartLeftPartContainer}>
      <View style={styles.deleteAccountBottomPartLeftPartDayContainer}>
        <Text style={styles.deleteAccountBottomPartLeftPartDayText}>Jour 1</Text>
      </View>
      <View style={styles.firstSeparator} />
      <View style={styles.deleteAccountBottomPartLeftPartDayContainer}>
        <Text style={styles.deleteAccountBottomPartLeftPartDayText}>Jour 21</Text>
      </View>
      <View style={styles.secondSeparator} />
      <View style={styles.deleteAccountBottomPartLeftPartDayContainer}>
        <Text style={styles.deleteAccountBottomPartLeftPartDayText}>Jour 30</Text>
      </View>
    </View>
  );

  const renderRightPart = () => (
    <View style={styles.deleteAccountBottomPartRightPartContainer}>
      <View style={styles.deleteAccountBottomPartRightPartContent}>
        <View style={styles.deleteAccountBottomPartRightPartIcon}>
          <Image source={require('../assets/checkvert.png')} />
        </View>
        <View style={styles.deleteAccountBottomPartRightPartText}>
          <Text style={styles.deleteAccountBottomPartRightPartMainText}>Demande de suppression</Text>
          <Text>E-mail de confirmation</Text>
          <Text>Délai de 30 jours de réflexion</Text>
          <Text>pour annuler</Text>
        </View>
      </View>
      <View style={styles.deleteAccountBottomPartRightPartContent}>
        <View style={styles.deleteAccountBottomPartRightPartIcon}>
          <Image source={require('../assets/emailPetit.png')} />
        </View>
        <View style={styles.deleteAccountBottomPartRightPartText}>
          <Text style={styles.deleteAccountBottomPartRightPartMainText}>E-mail de rappel à J-7</Text>
        </View>
      </View>
      <View style={styles.deleteAccountBottomPartRightPartContent}>
        <View style={styles.deleteAccountBottomPartRightPartIcon}>
          <Image source={require('../assets/warningDelete.png')} />
        </View>
        <View style={styles.deleteAccountBottomPartRightPartText}>
          <Text style={styles.deleteAccountBottomPartRightPartMainText}>Suppression définitive</Text>
          <Text>E-mail de confirmation</Text>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <Text>
        Voici les étapes de la suppression définitive de votre compte fidme :
      </Text>
      <View style={styles.deleteAccountBottomPartStepsContainer}>
        {renderLeftPart()}
        {renderRightPart()}
      </View>
      <View style={styles.deleteAccountButtonContainer}>
        <TouchableOpacity style={styles.deleteAccountButton} onPress={onClickButton}>
          <Text style={styles.deleteAccountButtonText}>Demander la suppression</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  deleteAccountBottomPartStepsContainer: {
    flexDirection: 'row',
    marginTop: 30
  },
  deleteAccountBottomPartLeftPartContainer: {
    flex: 1,
    alignItems: 'center'
  },
  deleteAccountBottomPartLeftPartDayContainer: {
    backgroundColor: colors.midBlue,
    borderRadius: 10,
    width: 60,
    height: 20,
  },
  deleteAccountBottomPartLeftPartDayText: {
    color: colors.white,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 13
  },
  deleteAccountBottomPartRightPartContainer: {
    flex: 3
  },
  deleteAccountBottomPartRightPartContent: {
    flexDirection: 'row',
    marginBottom: 20,
    minHeight: 40
  },
  deleteAccountBottomPartRightPartIcon: {
    width: 25
  },
  deleteAccountBottomPartRightPartMainText: {
    fontWeight: '600',
    color: colors.pepper
  },
  firstSeparator: {
    height: 80,
    width: 1,
    borderLeftColor: colors.midBlue,
    borderLeftWidth: StyleSheet.hairlineWidth
  },
  secondSeparator: {
    height: 40,
    width: 1,
    borderLeftColor: colors.midBlue,
    borderLeftWidth: StyleSheet.hairlineWidth
  },
  deleteAccountButtonContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  deleteAccountButton: {
    backgroundColor: colors.mainOrange,
    borderRadius: 20,
    width: 250,
    height: 40,
    justifyContent: 'center'
  },
  deleteAccountButtonText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center'
  }
});
