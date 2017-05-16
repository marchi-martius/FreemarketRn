import firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob';
import Config from 'react-native-config';

// Init Firebase
const config = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: "freemarketrn.firebaseapp.com",
  storageBucket: "freemarketrn.appspot.com",
};
firebase.initializeApp(config);
const storage = firebase.storage();

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export const saveImageToStorage = localImage => {
  return new Promise((resolve, reject) => {
    const uploadUri = localImage.uri;//.replace('file://', '');
    const mime = 'application/octet-stream';
    const sessionId = new Date().getTime();
    let uploadBlob = null;
    const imageRef = storage.ref('images').child(`${sessionId}${localImage.fileName}`);
    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        console.log(1);
        console.log(data);
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
        console.log(2);
        console.log(blob);
        uploadBlob = blob;
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        console.log(3);
        uploadBlob.close();
        return imageRef.getDownloadURL();
      })
      .then((url) => {
        console.log(4);
        resolve(url);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
    });
  });
};
