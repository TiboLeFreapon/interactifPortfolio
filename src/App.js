import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Accueil from "./Conteneur/Accueil";
import Parcours from "./Conteneur/Parcours";
import Experience from "./Conteneur/Experience";
import Loisirs from "./Conteneur/Loisir";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  { path: "/parcours", element: <Parcours /> },
  { path: "/experience", element: <Experience /> },
  { path: "/loisirs", element: <Loisirs /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
