import React, {useState, useCallback} from 'react';
import {Dimensions, View} from 'react-native';

import {applicationStyles, colors} from '../themes';

import {BarcodeMask} from '@nartc/react-native-barcode-mask';
import {RNCamera} from 'react-native-camera';

import {ControlPanel} from '../components/Scanner';

const Scanner = ({}) => {
  const [scanned, setScanned] = useState(true);
  const [scanValue, setScanValue] = useState('');
  const [bounds, setBounds] = useState({
    top: 0,
    left: 0,
    width: 300,
    height: 100,
  });

  // The following are based on landscape orientation with home button to the right

  // left
  const leftMargin = 100;
  // top
  const topMargin = 50;
  // width (height of portrait orientation)
  const frameWidth = 200;
  // height (width of portrait orientation)
  const frameHeight = 250;

  const CAM_VIEW_HEIGHT = Dimensions.get('screen').width * 1.5;
  const CAM_VIEW_WIDTH = Dimensions.get('screen').width;

  const scanAreaX = leftMargin / CAM_VIEW_HEIGHT;
  console.log('Scanner -> scanAreaX', scanAreaX);
  const scanAreaY = topMargin / CAM_VIEW_WIDTH;
  console.log('Scanner -> scanAreaY', scanAreaY);
  const scanAreaWidth = frameWidth / CAM_VIEW_HEIGHT;
  const scanAreaHeight = frameHeight / CAM_VIEW_WIDTH;

  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    console.log(
      `Bar code with type ${type} and data ${data} has been scanned!`,
    );
    setScanValue(data);
  };

  const onBarCodeRead = useCallback((result) => {
    console.log('onBarCodeRead -> result', result.bounds.size.width);
    setBounds({
      top: parseFloat(result.bounds.origin.x),
      left: parseFloat(result.bounds.origin.y),
      width: 300,
      height: 100,
    });
    if (result) {
      const {type, data} = result;
      if (data) {
        console.log('code', data);
      }
    }
  }, []);

  return (
    <View style={applicationStyles.screen.mainContainer}>
      <RNCamera
        style={applicationStyles.screen.preview}
        captureAudio={false}
        rectOfInterest={{x: 0, y: 0, width: 1.0, height: 1.0}}
        // rectOfInterest={{
        //   x: scanAreaX,
        //   y: scanAreaY,
        //   width: scanAreaWidth,
        //   height: scanAreaHeight,
        // }}
        // cameraViewDimensions={{width: CAM_VIEW_WIDTH, height: CAM_VIEW_HEIGHT}}
        // onBarCodeRead={scanned ? undefined : handleBarCodeScanned}
        // onBarCodeRead={({data, type}) => console.log('data', data, type)}
        onBarCodeRead={onBarCodeRead}
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
      {/* <View
        style={{
          width: bounds.width,
          height: bounds.height,
          position: 'absolute',
          top: bounds.top,
          right: bounds.right,
          borderColor: 'red',
          borderWidth: 2,
          zIndex: 100,
          // backgroundColor: 'green',
        }}
      /> */}
    </View>
  );
};

export default Scanner;
