// routes.tsx

import MainLayout from "./layout/MainLayout";
import ReviewMain from "./Pages/Review/ReviewMain";
import HomePage from "./Pages/Home/HomePage";
import Profile from "./Pages/Profile/Profile";


export const routes = [
  {
    path: "/", element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> , handle: { title: "Donut's workshop" }},
      { path: "Review", element: <ReviewMain />, handle: { title: "Review" } },
      // { path: "Learning", element: <Profile />, handle: { title: "Profile" } },
      { path: "Profile", element: <Profile />, handle: { title: "Profile" } },
    ]
  }
];