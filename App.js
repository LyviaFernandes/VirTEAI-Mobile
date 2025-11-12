import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import Cadastro from './src/screens/cadastro';
import Login from './src/screens/Login';
import Home from './src/screens/home';
import SobreNos from './src/screens/SobreNos';
import Ofertas from './src/screens/Ofertas';
import Notificacoes from './src/screens/notificacoes';
import SuasCompras from './src/screens/SuasCompras';
import SuaConta from './src/screens/acessoconta';
import RedesSociais from './src/screens/RedesMobile';
import Perguntas from './src/screens/Perguntas';
import { Text } from 'react-native';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

// Impede a tela de splash de sumir antes das fontes carregarem
SplashScreen.preventAutoHideAsync();

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`;

export default function App() {
  const [fontsLoaded] = useFonts({
  MarmeladRegular: require('./src/assets/fonts/Marmelad/Marmelad-Regular.ttf'),
  ComfortaaBold: require('./src/assets/fonts/Comfortaa/static/Comfortaa-Bold.ttf'),
  ComfortaaRegular: require('./src/assets/fonts/Comfortaa/static/Comfortaa-Regular.ttf'),
});

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // ou uma tela de loading personalizada
  }

  return (
    <ContainerApp>
      <StatusBar hidden />
      {/* <Cadastro /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <SobreNos /> */}
      {/* <Ofertas /> */}
      {/* <Notificacoes /> */}
      {/* <SuasCompras /> */}
      {/* <SuaConta /> */}
      {/* <RedesSociais /> */}
      {/* <Perguntas /> */}
    </ContainerApp>
  );
}
