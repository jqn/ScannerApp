import React from 'react';
import {View} from 'react-native';

import {Button, Input, ListItem} from 'react-native-elements';
import {getBottomSpace, ifIphoneX} from 'react-native-iphone-x-helper';
import BottomSheet from 'react-native-simple-bottom-sheet';

const styles = {
  container: {
    // paddingHorizontal: 18,
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
    paddingVertical: 0,
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
      <BottomSheet
        isOpen={false}
        sliderMinHeight={110}
        // sliderMaxHeight={1000}
        wrapperStyle={{
          // backgroundColor: 'red',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          paddingBottom: 24,
        }}
        lineContainerStyle={{
          height: 30,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
        // innerContentStyle={{backgroundColor: 'green'}}
        lineStyle={{backgroundColor: '#474747'}}>
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
      </BottomSheet>
    </View>
  );
};

export default ControlPanel;
