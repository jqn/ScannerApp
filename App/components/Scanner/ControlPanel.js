import React from 'react';
import {View} from 'react-native';

import {Button, Input, ListItem} from 'react-native-elements';
import {getBottomSpace, ifIphoneX} from 'react-native-iphone-x-helper';

const styles = {
  container: {
    paddingHorizontal: 18,
    backgroundColor: 'white',
    ...ifIphoneX(
      {
        paddingBottom: getBottomSpace(true),
      },
      {
        paddingBottom: 18,
      },
    ),
  },
  listItem: {
    paddingHorizontal: 0,
    paddingVertical: 8,
  },
  input: {
    paddingHorizontal: 0,
  },
  button: {
    borderColor: '#474747',
  },
  buttonTitle: {
    color: '#474747',
  },
};

const ControlPanel = ({onScanPress, scanValue}) => {
  return (
    <View style={styles.container}>
      <ListItem containerStyle={styles.listItem}>
        <Input
          placeholder="Barcode"
          leftIcon={{type: 'ionicon', name: 'md-barcode-sharp'}}
          containerStyle={styles.input}
          value={scanValue}
        />
      </ListItem>
      <Button
        title="Capture"
        type="outline"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={onScanPress}
      />
    </View>
  );
};

export default ControlPanel;
