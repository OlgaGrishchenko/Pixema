import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import SignIn from "../SignIn";
import SignUp from "../SignUp";
import NewPassword from "../NewPassword";
import ResetPassword from "../ResetPassword";

import PagesWrapper from "../PagesWrapper";
import Home from "../Home";
import ContentPage from "../ContentPage";


export enum PathNames {
   Home = "/",
   SignIn = "/sign-in",
   SignUp = "/sign-up",
   NewPassword = "/new-password",
   ResetPassword = "/reset-password",
   Search = "/search/:searchString",
   Settings = "/settings",
   ContentPage = "/content-page",
}


const Router = () => {

   return (
      <BrowserRouter>
         <Routes>

            <Route path={PathNames.Home} element={<PagesWrapper />}>
               <Route path={PathNames.ContentPage} element={<ContentPage />} />

            </Route>

               <Route path={PathNames.SignIn} element={<SignIn />} />
               <Route path={PathNames.SignUp} element={<SignUp />} />
               <Route path={PathNames.NewPassword} element={<NewPassword />} />
               <Route path={PathNames.ResetPassword} element={<ResetPassword />} />

               <Route path="*" element={<Navigate to={PathNames.SignIn} />} />
         </Routes>

      </BrowserRouter>
   );
};

export default Router;