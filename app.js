// let getProducts = () => {
//     return new Promise((resolve, reject) => {
//         fetch('https://fakestoreapi.com/products')
//             .then(async (res) => {
//                 resolve(await res.json())
//             })
//             .catch((err) => reject(err))
//     })
// }

// let getCategories = () => {
//     return new Promise((resolve, reject) => {
//         fetch('https://fakestoreapi.com/products/categories')
//             .then(async (res) => {
//                 resolve(await res.json())
//             })
//             .catch((err) => reject(err))


//     })
// }

// let getData = async () => {
//     try {
//         // ye WaalaKaam Bhi Ho Skta He -->

//         // let products = await getProducts()
//         // let categories = await getCategories()
//         // console.log(products, categories)

//         let promises = []
//         promises.push(getCategories(), getProducts())
//         let final = await Promise.all(promises)
//         console.log("final", final)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getData()
// console.log('fdf')

// Old Code

import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from './firebase.js'


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user", user)
        const uid = user.uid;
    } else {
        console.log("User Not Exist")
    }
});


let signup = (e) => {
    e.preventDefault()
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // password.addEventListener('blur', function () {
    //     password.style.border = "1px solid red"
    // })
    console.log(email, password)

    createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            // Signed up
            // const user = userCredential.user;
            console.log("User", res)
            // console.log(user)
            // console.log(user)
            // ...
        })
        .catch((error) => {
            console.log(error)
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ..
        });


}


let signupBtn = document.getElementById('signupBtn')

signupBtn.addEventListener('click', signup)

let logout = (e) => {
    e.preventDefault()
    signOut(auth).then(() => {
        console.log("Signout Successfull")
    }).catch((error) => {
        console.log(error)
    });
}

let logoutBtn = document.getElementById('logoutBtn')

logoutBtn.addEventListener('click', logout)

