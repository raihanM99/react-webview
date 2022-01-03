import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import WebView from 'react-native-webview';

const MainView = ({navigation}) => {
  const webViewRef = useRef(null);

  const webViewGoBack = () => {
    if (webViewRef.current) webViewRef.current.goBack();
  };

  const webViewNext = () => {
    if (webViewRef.current) webViewRef.current.goForward();
  };

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
    <>
      <SafeAreaView style={styles.page}>
        <WebView
          source={{uri: 'https://baliproceed.sumtestapp.xyz'}}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
          ref={webViewRef}
        />
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.button} onPress={webViewGoBack}>
            <Text>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace('Home')}>
            <Text>Exit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={webViewNext}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  tabContainer: {
    backgroundColor: '#D8E2DC',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#E8E8E4',
    padding: 10,
    borderRadius: 6,
    width: 100,
    alignItems: 'center',
  },
});

export default MainView;
