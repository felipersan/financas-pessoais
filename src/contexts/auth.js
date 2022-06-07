import React, {createContext, useState, useEffect} from 'react';
import firebase from '../services/firebaseConnection';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if (storageUser !== '') {
        setUser(JSON.parse(storageUser));
        setLoad(false);
      }
      setLoad(false);
    }
    loadStorage();
  }, []);

  async function StorageData(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  async function SignUp(email, password, name) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async value => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref('users')
          .child(uid)
          .update({
            name: name,
            saldo: 0,
          })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
            };
            setUser(data);
            StorageData(data);
          });
      });
  }

  async function SignIn(email, password) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async value => {
        let uid = value.user.uid;
        let email = value.user.email;
        await firebase
          .database()
          .ref('users')
          .child(uid)
          .once('value')
          .then(snapshot => {
            let data = {
              uid: uid,
              name: snapshot.val().name,
              email: email,
              lastName: snapshot.val().lastName,
              nickName: snapshot.val().nickName,
            };
            setUser(data);
            StorageData(data);
          });
      });
  }

  async function Update(name, lastName, nickName) {
    await firebase
      .database()
      .ref('users')
      .child(user.uid)
      .update({
        name: name,
        lastName: lastName,
        nickName: nickName,
      })
      .then(() => {
        let data = {
          uid: user.uid,
          name: name,
          email: user.email,
          lastName: lastName,
          nickName: nickName,
        };
        setUser(data);
        StorageData(data);
      });
  }

  async function SignOut() {
    await firebase
      .auth()
      .signOut()
      .then(async () => {
        await AsyncStorage.clear().then(() => {
          setUser(null);
        });
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        setUser,
        SignUp,
        SignIn,
        SignOut,
        load,
        Update,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
