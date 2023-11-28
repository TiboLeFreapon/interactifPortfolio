import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Accueil from "./Conteneur/Accueil";
import Parcours from "./Conteneur/Parcours";
import ExperienceApp from "./Conteneur/ExperienceApp";
import Loisirs from "./Conteneur/Loisirs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  { path: "/parcours", element: <Parcours /> },
  { path: "/experience", element: <ExperienceApp /> },
  { path: "/loisirs", element: <Loisirs /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
