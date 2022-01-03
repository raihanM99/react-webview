import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import WebView from 'react-native-webview';

const WebToNative = ({navigation}) => {
  const webViewRef = useRef(null);
  const onMessage = data => {
    // alert(data.nativeEvent.data);
    console.log(JSON.parse(data.nativeEvent.data));
    console.log(data);
    // navigation.replace('Home');
  };
  const runFirst = `document.body.style.backgroundColor = #F8EDEB;
                    true;`;
  const LoadingIndicatorView = () => {
    return (
      <ActivityIndicator
        color="#FEC5BB"
        size="large"
        style={styles.activityIndicatorStyle}
      />
    );
  };
  return (
    <SafeAreaView style={styles.page}>
      <WebView
        source={{uri: 'http://baliproceed.test'}}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
        ref={webViewRef}
        onMessage={onMessage}
        injectedJavaScript={runFirst}
      />
    </SafeAreaView>
  );
};

export default WebToNative;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
