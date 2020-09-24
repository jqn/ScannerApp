import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import {applicationStyles, colors} from '../themes';

import {BarcodeMask} from '@nartc/react-native-barcode-mask';
import {RNCamera} from 'react-native-camera';

import {ControlPanel} from '../components/Scanner';

const Scanner = ({}) => {
  const [scanned, setScanned] = useState(false);
  const [scanValue, setScanValue] = useState('');

  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    console.log(
      `Bar code with type ${type} and data ${data} has been scanned!`,
    );
    setScanValue(data);
  };

  return (
    <View style={applicationStyles.screen.mainContainer}>
      <RNCamera
        style={applicationStyles.screen.preview}
        captureAudio={false}
        onBarCodeRead={scanned ? null : handleBarCodeScanned}
        // onBarCodeRead={({data, type}) => console.log('data', data, type)}
        // onGoogleVisionBarcodesDetected={({barcodes}) => {
        //   console.log('barcodes', barcodes);
        // }}
        // googleVisionBarcodeMode={
        //   RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeMode.ALTERNATE
        // }
        // googleVisionBarcodeType={
        //   RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.CODE_39
        // }
        // onTextRecognized={(d) => {
        //   console.log('onTextRecognized', d);
        // }}
      >
        <BarcodeMask
          backgroundColor={colors.$tint}
          animatedLineColor={colors.$primary}
          edgeColor={colors.$primary}
          animatedLineOrientation="vertical"
          height={100}
          width={300}
        />
      </RNCamera>
      <ControlPanel
        onScanPress={() => setScanned(false)}
        scanValue={scanValue}
      />
    </View>
  );
};

export default Scanner;
