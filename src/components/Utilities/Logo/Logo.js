import { Link } from 'react-router-dom';

const Logo = ({ logo }) => {
    return <Link to='/'>
        <img src={logo} alt=""  />
    </Link>
}

export default Logo;