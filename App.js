import React from 'react';
import { StyleSheet, Text, View, Image, Navigation } from 'react-native';
import { NavigationBar, Title, Icon, TextInput, Screen, Button, Caption} from '@shoutem/ui';
import { Font, AppLoading } from 'expo';
import { Home } from './src/screen/Home'

export default class App extends React.Component {

  async fnLogin(user, password) {
    try {
      Navigation.startSingleScreenApp({
        screen: {
          screen: QUESTIONARIOS,
        },
        animationType: 'slide-down',
      });
    }catch (e) {
      
    }
  }
  state = {
    fontsAreLoaded: false,
  };
  async componentWillMount() {
    await Font.loadAsync({
      // 'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      // 'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      // 'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      // 'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      // 'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      // 'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      // 'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      // 'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      // 'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      // 'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });

    this.setState({ fontsAreLoaded: true });
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }
    return (
      <View style={login.boxLogin}>
        <Image
          style={login.logo}
          source={require('./src/imagens/natulab.png')}
        />
        <View style={login.form}>
          <View style={login.maginMintop}>
            <TextInput
              placeholder={'Usuário'}
              style={login.inputs}
            />
          </View>
          <View style={login.maginMintop}>
            <TextInput
              placeholder={'Senha'}
              style={login.inputs}
              secureTextEntry
            />
            <View style={login.forgout}>
              <Caption> Esqueci minha senha </Caption>
            </View>
          </View>
          <View style={login.maginMintop}>
          <Button styleName="secondary" onPress={this.fnLogin}>
            <Text style={login.button}>Entrar</Text>
          </Button>
          </View>
        </View>
      </View>
    );
  }
}

const login = StyleSheet.create({
  boxLogin: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f2f6',
    padding: 0,
    position: 'absolute', 
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0,
  },
  logo: {
    width: '65%',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgout: {
    flexDirection: 'row',
    textAlign: 'right',
    paddingTop: 5,
    width: '100%'
  },
  form: {
    width: '100%',
    marginBottom: 10,
    padding: 20,
    flexDirection: 'column',
    marginTop: -25
  },
  maginMintop: {
    marginBottom: 15,
    flexDirection: 'column',
  },
  button: {
    color: '#FFFFFF',
    padding: 15,
    margin: 0,
    width: '100%',
    flex: 1,
    textAlign: 'center',
  }
});
