import React, { useState } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import DeletionSteps from './DeletionSteps';


export default function DeleteAccountBottomPart() {
  const [hasDeleteAccount, setHasDeleteAccount] = useState(false);

  const onClickButton = () => { setHasDeleteAccount(true) };

  const renderDeleted = () => (
    <>
      <Text>
        Votre compte sera définitive supprimé dans les 30 prochains jours
      </Text>
    </>
  );

  return (
    <View style={styles.deleteAccountBottomPartContainer}>
      {hasDeleteAccount ? renderDeleted() : <DeletionSteps onClickButton={onClickButton} />}
    </View>
  );
}

const styles = StyleSheet.create({
  deleteAccountBottomPartContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30
  }
})
