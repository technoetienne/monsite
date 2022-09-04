import { Link } from 'react-router-dom'
import {useState} from 'react'
import Menu from './Menu'
import dataSixieme from './data/dataSixieme'

import './CSS/Sixieme.css'

const Sixieme = ()=>{
	const [coursTD,setCoursTD]=useState(false)
	return <>
			<Menu setTDCours={setCoursTD} />
	<div id="sixieme" >
		{coursTD == "Cours" && dataSixieme.cours.map((el,index)=>(<div key={"cours"+index}><a href={el.pdf}>{el.name}</a><br /></div>))}
		{coursTD == "TD" && dataSixieme.TD.map((el,index)=>(<div key={"TD"+index} ><a href={el.pdf}>{el.name}</a><br /></div>))}
		</div>
		</>
}

export default Sixieme;