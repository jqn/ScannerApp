import React from 'react';
import {View} from 'react-native';

import {applicationStyles, colors} from '../themes';

import {BarcodeMask} from '@nartc/react-native-barcode-mask';
import {RNCamera} from 'react-native-camera';

import {ControlPanel} from '../components/Scanner';

const Scanner = ({}) => {
  return (
    <View style={applicationStyles.screen.mainContainer}>
      <RNCamera style={applicationStyles.screen.preview} captureAudio={false}>
        <BarcodeMask
          backgroundColor={colors.$tint}
          animatedLineColor={colors.$primary}
          edgeColor={colors.$primary}
          animatedLineOrientation="vertical"
          height={100}
          width={300}
        />
      </RNCamera>
      <ControlPanel />
    </View>
  );
};

export default Scanner;
