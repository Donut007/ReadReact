// routes.tsx

import MainLayout from "../layout/MainLayout";
import GameMain from "../Pages/Game/GameMain";
import HomePage from "../Pages/Home/HomePage";
import Profile from "../Pages/Profile/Profile";


export const routes = [
  {
    path: "/", element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> , handle: { title: "Donut's workshop" }},
      { path: "Game", element: <GameMain />, handle: { title: "Game" } },
      // { path: "Learning", element: <Profile />, handle: { title: "Profile" } },
      { path: "Profile", element: <Profile />, handle: { title: "Profile" } },
    ]
  }
];