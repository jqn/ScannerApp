import React from 'react';
import {Text, View} from 'react-native';

import {Button, Input, Icon, ListItem} from 'react-native-elements';

const styles = {
  root: {
    flex: 1,
  },
  upperSection: {
    flex: 1,
  },
  lowerSection: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  camera: {
    height: '100%',
  },
};

const ControlPanel = () => {
  return (
    <View style={styles.lowerSection}>
      <ListItem>
        {/* <Icon type={'Ionicons'} active name="md-barcode" /> */}
        {/* <Input
          placeholder="Barcode of the ListItem"
          // value={this.state.barcode}
          // onChangeText={this.handleChange}
        /> */}
      </ListItem>
      <Button
      // primary
      // onPress={this.onGetItemPress}
      >
        <Text>Get Item</Text>
      </Button>
    </View>
  );
};

export default ControlPanel;
