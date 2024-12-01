import Layout from "@components/Layout";
import About from "@pages/About";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import TodoAdd from "@pages/TodoAdd";
import TodoDetail from "@pages/TodoDetail";
import TodoEdit from "@pages/TodoEdit";
import TodoList from "@pages/TodoList";
import { createBrowserRouter  } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { path: 'home', element: <Home/> },
      { path: 'about', element: <About/> },
      { path: 'list', element: <TodoList/> },
      { path: 'list/add', element: <TodoAdd/> },
      { 
        // path: 'list/:_id/:hello/:world', // list/3/a/b => { _id: 3, hello: 'a', world: 'b' }
        path: 'list/:_id', 
        element: <TodoDetail/>,
        children: [
          { path: 'edit', element: <TodoEdit/> },
        ]
      },
    ]
  }], {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
})

export default router