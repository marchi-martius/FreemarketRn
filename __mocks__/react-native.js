const rn = require('react-native');

jest.mock('Linking', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(),
  };
});

jest.mock('../app/FirebaseApi', () => {
  return {
    saveImageToStorage: jest.fn(),
  }
});

module.exports = rn;
