import React, { Suspense, lazy } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "./NotFound";
import Layout from "./layout/Layout";

const UserPage = lazy(() =>
  import("./modules/user/UserPage")
);
const PostPage = lazy(() =>
  import("./modules/post/PostPage")
);

const SplashScreen = () => {
  return (
    <div className="splashScreen">Loading...</div>
  )
};

export function MainRoutes() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Layout>
        <Routes>
          <Route index element={<PostPage />} />
          <Route path="/" element={<PostPage />} />
          <Route path="/users/*" element={<UserPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  )
}