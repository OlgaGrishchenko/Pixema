import { RegisterUserData } from './../Types/auth';
import { create } from "apisauce";

const API = create( {baseURL: "https://unelmamovie.com/api/v1"})

const registerUser = (data: RegisterUserData) => {
   return API.post("/auth/register", data );
}

const APIfilms = create({ baseURL: 'https://yts.mx/api' });

const getAllFilms = () => {
   return APIfilms.get("v2/list_movies.json?limit=50");
}

const getSingleFilms = (id: string) => {
   return APIfilms.get(`v2/movie_details.json?movie_id=${id}`);
};

export default {
   registerUser,
   getAllFilms,
   getSingleFilms
};