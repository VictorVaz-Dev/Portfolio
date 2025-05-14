import {Routes, Route} from 'react-router-dom';
import {Home} from '../pages/home/Home'

export default function routes(){
    return(
        <Routes>
            <Route path='/' Component={Home}/>
        </Routes>
    )
}