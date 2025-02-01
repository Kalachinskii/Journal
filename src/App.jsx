import './app.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JurnalList from './components/JurnalList/JurnalList.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import JurnalItem from "./components/JournalItem/JurnalItem.jsx";
import Body from './layouts/Body/Body.jsx';

function App() {
	const data = {
		title: 'Подготовка к обновлению курсов',  
		text: 'горные походы открывают природные ланджафты',
		date: new Date(),
	}
	return (
		<div className='app'>
			{/* композиция компонента - передаем в нутрь компонент другой компанент(children)*/}
			<LeftPanel>
				<Header/>
				<JournalAddButton />
				<JurnalList>
					<CardButton>
						<JurnalItem 
						date={data.date} 
						text={data.text} 
						title={data.title}
						/>
					</CardButton>
				</JurnalList>
			</LeftPanel>
			<Body>
				Body
			</Body>
		</div>
	)
}

export default App