import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import { storage } from './firebase';

const upload = async (file) => {
    const date = new Date();
    const storageRef = ref(storage, file.name);

    const uploadTask = uploadBytesResumable(
        storageRef,
        `images/${date + file.name}`
    );

    return new Promise((resolve, reject) => {
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                reject('Something went wrong' + error.code);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    });
};
export default upload;
