import Icon from 'react-native-vector-icons/FontAwesome';

Icon.getImageSource = () => {
  return {
    then: (func) => {
      func(require('./img/some_icon.png'));
    }
  }
};

export default Icon;
