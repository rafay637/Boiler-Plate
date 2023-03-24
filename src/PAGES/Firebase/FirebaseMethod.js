import app from "./firebaseconfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase, set, ref, onValue, push } from "firebase/database";

const auth = getAuth(app)
const db = getDatabase(app)

function SignupUser(obj) {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, obj.email, obj.password, obj.userName)
            .then((res) => {
                obj.id = res.user.uid;
                const reference = ref(db, `user/${obj.id}`);
                set(reference, obj)
                    .then(() => {
                        resolve("Data Send Successfully")
                    })
                    .catch((err) => {
                        reject(err.message)
                    })
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}

function LoginUser(obj) {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((res) => {
                const reference = ref(db, `user/${res.user.uid}`)
                onValue(reference, (data) => {
                    if (data.exists()) {
                        resolve(data.val())
                    } else {
                        reject('User not exist')
                    }
                })
            })
            .catch((err) => {
                reject(err.message)
            })
    })
}

let CheckAuthentication = () => {
    return (
        new Promise((resolve, reject) => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    resolve(uid)
                }
                else {
                    reject('User not Logged in')
                }
            })
        })
    )
}

let LogoutFromPage = () => {
    return (
        SignupUser(auth)
    )
}

let getDataFromDB = (nodename, id) => {
    const reference = ref(db, `${nodename}/${id ? id : ''}`)
    return new Promise((resolve, reject) => {
        onValue(reference, (dt) => {
            if (dt.exists()) {
                if (id) {
                    resolve(dt.val())
                }
                else {
                    resolve(Object.values(dt.val()))
                }
            } else {
                reject('No Data Found')
            }
        })
    })
}

let PostDataInDB = (nodename, obj, id) => {
    return new Promise((resolve, reject) => {
        if (id) {
            const reference = ref(db, `${nodename}/${id ? id : ''}/`)
            const set = set(reference, obj)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        } else {
            let keyRef = ref(db, `${nodename}`);
            obj.id = push(keyRef).key;

            let postRef = ref(db, `${nodename}/${obj.id}`)
            set(postRef, obj)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        }
    })
}

export {
    LoginUser,
    SignupUser,
    CheckAuthentication,
    LogoutFromPage,
    getDataFromDB,
    PostDataInDB,
}