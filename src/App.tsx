import './styles.css';
import IMAGE from './react.jpg'
import SVG_LOGO from './410.svg';
import ClickCounter from './ClickCounter';
export const App = () => {
    return (
        <><h1>
            React fffff  typescript webpack starter template - {process.env.NODE_ENV} <br />
            {process.env.name}
        </h1>
        <img src={IMAGE} alt="react logo"/>
            <img src={SVG_LOGO} alt="react logo" height="200" width="200" />
            <ClickCounter />
        </>
    )
}
 