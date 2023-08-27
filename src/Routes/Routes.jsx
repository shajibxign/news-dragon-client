import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
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
                element: <Category></Category>,
                loader: () => fetch(`http://localhost:3000/news`)
            },
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
            }
        ]
    },
    {
        path: "news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    }
])

export default router;