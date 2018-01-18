import axios from 'axios'
// import cors from 'cors'

export const GET_PHOTOS = 'GET_PHOTOS';

const url = 'https://photorankapi-a.akamaihd.net/customers/215757/media/photorank'
const apiKey = '?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18'

// axios.get(link+apiKey)
//   .then(function (response) {>redu
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


export const getPhotos = () =>  axios.get(url + apiKey)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
          });
;
