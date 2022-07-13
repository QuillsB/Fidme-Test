import React from 'react';

import { StyleSheet, View } from 'react-native';
import DeleteAccountBottomPart from '../components/DeleteAccountBottomPart';
import DeleteAccountTopPart from '../components/DeleteAccountTopPart';

export default function DeleteAccountScreen() {
  return (
    <View style={styles.deleteAccountScreenContainer}>
      <View style={styles.deleteAccountScreenTopPart}>
        <DeleteAccountTopPart />
      </View>
      <View style={styles.deleteAccountScreenBottomPart}>
        <DeleteAccountBottomPart />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deleteAccountScreenContainer: {
    flex: 1,
  },
  deleteAccountScreenTopPart: {
    flex: 1,
  },
  deleteAccountScreenBottomPart: {
    flex: 1,
  }
})
