export const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROYECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSENDERID,
  appId: process.env.REACT_APP_APPID,
};

export const actionCodeSettingsVerification = {
  url:
      process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000/'
          : '',
};

export const actionCodeSettingsForgotPassword = {
  url:
      process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000/login'
          : '',
};