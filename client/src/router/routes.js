import { Constructor } from "../pages/Constructor";
import { Auth } from "../pages/Auth";
import { Home } from "../pages/Home";
import { Account } from "../pages/Account";
import { About } from "../pages/About";

export const ROUTES = {
  HOME: "/",
  AUTH_LOGIN: "/auth/login",
  AUTH_SIGNUP: "/auth/signup",
  CONSTRUCTOR: "/constructor",
  ACCOUNT: "/account",
  ABOUT: "/about",
};

export const publicRoutes = [
  { path: ROUTES.HOME, exact: true, component: Home },
  { path: ROUTES.AUTH_LOGIN, exact: true, component: Auth },
  { path: ROUTES.AUTH_SIGNUP, exact: true, component: Auth },
  { path: ROUTES.ABOUT, exact: true, component: About },
];

export const privateRoutes = [
  { path: ROUTES.HOME, exact: true, component: Home },
  { path: ROUTES.CONSTRUCTOR, exact: true, component: Constructor },
  { path: ROUTES.ACCOUNT, exact: true, component: Account },
  { path: ROUTES.ABOUT, exact: true, component: About },
];
