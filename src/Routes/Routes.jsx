import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Home/Category";
import NewsLayout from "../Layouts/NewsLayout/NewsLayout";
import News from "../Pages/News/News";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
            }
        ]
    },
    {
        path: "/news/:id",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: "news",
                element: <News></News>,
            }
        ]
    }
])

export default router;