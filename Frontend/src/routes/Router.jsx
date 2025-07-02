import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Dashboard = lazy(() => import('../components/Dashboard/Dashboard'));
const Layout = lazy(() => import('../sharedComponents/Layout/Layout'));

const router = createBrowserRouter([
    {
        path: '/', element: Layout,
        children: [
            { index: true, element: <Dashboard /> }
        ]
    }
]);

function Router() {
    return (
        <Suspense fallback={`Loading...`}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default Router;