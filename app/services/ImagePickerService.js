import ImagePicker from 'react-native-image-picker';

export const selectPhotoTapped = () => {
  return new Promise((resolve, reject) => {
    const options = {
      quality: 1.0,
      storageOptions: {
        skipBackup: true
      }
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        resolve(response);
      }
      reject("error");
    });
  });
}
