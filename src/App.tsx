import './styles.css';
import IMAGE from './react.jpg'
import SVG_LOGO from './410.svg';
export const App = () => {
    return (
        <><h1>
            React typescript webpack starter template 
        </h1>
        <img src={IMAGE} alt="react logo"/>
        <img src={SVG_LOGO} alt="react logo" height="200" width="200"/>
        </>
    )
}
