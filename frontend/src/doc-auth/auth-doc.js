import axios from "axios";
export async function authDoctorFromMongo(url, name) {
  //returns a promise whether a doc wuth this name has been found or not
  return await axios
    .get(url, {
      params: { name: name },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}
