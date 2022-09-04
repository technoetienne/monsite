import { Link } from 'react-router-dom'

import './CSS/Home.css'

const Home = ()=>{
	return <div id="home" >
			<Link to="sixieme" >{"6e"}</Link>
			<Link to="cinquieme" >{"5e"}</Link>
			<Link to="quatrieme" >{"4e"}</Link>
			<Link to="troisieme" >{"3e"}</Link>
		</div>
}

export default Home;