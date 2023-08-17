import  './NavBar.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Index from '../pages/Index';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
function NavBar() {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <NavLink to="/index" className='items'><li>Index</li></NavLink>
                    <NavLink to="/home" className='items'><li>Home</li></NavLink>
                    <NavLink to="/NotFound" className='items'><li>Page not Found</li></NavLink>
                    <NavLink to="/NotFound" className='items'><li>Page not Found</li></NavLink>
                </ul>
                <Routes>
                    <Route path='/index' element={<Index/>}></Route>
                    <Route path='/home' element={<Home/>}></Route>
                    <Route path='/notfound' element={<NotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default NavBar
