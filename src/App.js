import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Accueil from "./Conteneur/Accueil";
import Parcours from "./Conteneur/Parcours";
import ExperienceApp from "./Conteneur/ExperienceApp";
import Loisirs from "./Conteneur/Loisirs";
import Version from "./Composants/PiedPage/Version";
import Contact from "./Composants/PiedPage/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  { path: "/parcours", element: <Parcours /> },
  { path: "/experience", element: <ExperienceApp /> },
  { path: "/loisirs", element: <Loisirs /> },
  { path: "/version", element: <Version /> },
  { path: "/contact", element: <Contact /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
