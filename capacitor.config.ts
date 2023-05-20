import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'App-Meteo-Ionic-Vue',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
