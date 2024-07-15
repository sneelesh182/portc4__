import { Route,Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Trending } from "../Pages/Trending";
import { Explore } from "../Pages/Explore";
import { Favourites } from "../Pages/Favourites";
import { Settings } from "../Pages/Settings";
import { Themes } from "../Components/Themes";
import { Profiles } from "../Pages/Profiles";

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/trending' element={<Trending />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/profiles' element={<Profiles />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/' element={<Themes />} />
        </Routes>
    )
}