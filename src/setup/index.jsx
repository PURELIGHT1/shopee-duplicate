import { Route, Routes, useLocation, useNavigate } from 'react-router';
// import AccessDenied from '../pages/Access';
import { ROUTES } from './constanta';
import { NFPAGE, ADPAGE, LOGINPAGE } from '../pages';

const RouteManager = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    //  useEffect(() => {
    //     if (pathname === '/') {
    //         navigate("/");
    //     }
    // }, [pathname, navigate]);

    return (
        <>
        <Routes>
            <>
             {/* <Route element={<PrivateRoutes allowedRoles={['USER']} />}>
                <Route path="/" element={<Dashboard />}>
                </Route>
             </Route> */}
            </>
            <>
            {/* <Route path="/" element={<Dashboard />}/> */}
            </>
            
            <Route path={ROUTES.LOGIN} element={<LOGINPAGE />} />
            <Route path={ROUTES.ACCESSDENIED} element={<ADPAGE />} />
            <Route path="*" element={<NFPAGE />} />
        </Routes>
        </>
    );
};

export default RouteManager;