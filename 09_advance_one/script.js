const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task 1 is completed');
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log('promise 1 consumed');
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task 2 is completed');
    resolve();
  }, 1000);
}).then(function () {
  console.log('promise 2 consumed');
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task 3 is completed ');
    resolve({ username: 'Code', email: 'example@gmail.com' });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log('promise 3 is consumed', user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: 'Ashish', Password: '1234' });
    } else {
      reject('ERROR: something went wrong');
    }
  }, 1000);
});

// const username=
promiseFour
  .then((user) => {
    console.log(
      `Async task 4 is completed. promise 4 is consumed. User:`,
      user
    );
    return user.username;
  })
  .then((username) => {
    console.log('username:', username);
  })
  .catch(function (err) {
    console.log('Async task 4 is completed. promise 4 is consumed.', err);
  }).finally(() => console.log("The promise is either resolved or rejected"));

 
const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
      let error = true
      if (!error) {
          resolve({username: "javascript", password: "123"})
      } else {
          reject('ERROR: JS went wrong')
      }
  }, 1000)
});

async function consumePromiseFive(){
  try {
      const response = await promiseFive
      console.log('Async task 5 is completed. promise 5 is consumed.', response);
  } catch (error) {
      console.log('Async task 5 is completed. promise 5 is consumed.', error);
  }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {console.log(error)})

