import { Helmet } from "react-helmet";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Account from "./pages/account";
import CheckOut from "./pages/checkout";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import MovieDetailPage from "./pages/movie-detail";
import RequireAuth from "./pages/requireAuth";
import RootLayout from "./pages/root";
import SignupPage from "./pages/signup";
import TestPage from "./pages/test";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<div>error</div>}>
      <Route index element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/movie/:movieId" element={<MovieDetailPage />} />
      <Route element={<RequireAuth />}>
        <Route path="/test" element={<TestPage />} />
        <Route path="/checkout/:showId" element={<CheckOut />} />
        <Route path="/account/:accountName" element={<Account />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BOLETO - Online Ticket Booking</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://pixner.net/boleto/demo/assets/images/favicon.png"
        />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
