import ImagePicker from 'react-native-image-picker';

export const selectPhotoTapped = () => (
  new Promise((resolve, reject) => {
    const options = {
      quality: 1.0,
      storageOptions: {
        skipBackup: true,
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        reject('User cancelled photo picker');
      } else if (response.error) {
        reject('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        reject('User tapped custom button: ', response.customButton);
      } else {
        resolve(response);
      }
    });
  })
);
