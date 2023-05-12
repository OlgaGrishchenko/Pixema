import { RegisterUserData, SignInUserData } from './../Types/auth';
import { create } from "apisauce";
import { FilmsPayload } from '../Types/films';

const API = create( {baseURL: "https://unelmamovie.com/api/v1"})

const registerUser = (data: RegisterUserData) => {
   return API.post("/auth/register", data );
}

const signInUser = (data: SignInUserData) => {
   return API.post("/auth/login", data );
}

const getUserInfo = (access_token: string, idUser: string) => {
   return API.get(
      `/user-profile/${idUser}`,
      {},
      {headers: { Authorization: `Bearer ${access_token}` },}
   );
};

const APIfilms = create({ baseURL: 'https://yts.mx/api' });


const getAllFilms = ({query_term, page, offset}: FilmsPayload) => {
   return APIfilms.get(`v2/list_movies.json?limit=20`, {query_term, page, offset});
}

const getSingleFilms = (id: string) => {
   return APIfilms.get(`v2/movie_details.json?movie_id=${id}`);
};

const getTrendsFilms = () => {
   return APIfilms.get("v2/list_movies.json?limit=50&minimum_rating=8.6");
}

export default {
   registerUser,
   getAllFilms,
   getSingleFilms,
   signInUser,
   getUserInfo,
   getTrendsFilms,
};