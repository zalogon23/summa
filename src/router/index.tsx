import { createBrowserRouter } from "react-router-dom";
import VideoScreen from "../screens/VideoScreen";
import { videoLoader } from "./loader";
import HomeScreen from "../screens/HomeScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />
  },
  {
    path: "/video/:videoId",
    element: <VideoScreen />,
    loader: videoLoader
  }
]);