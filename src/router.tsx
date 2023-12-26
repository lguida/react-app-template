import { createBrowserRouter } from "react-router-dom";
import './index.css'
import { Root } from './routes';

export const router = createBrowserRouter([
{
    path: "/",
    element: <Root />,
},
]);
