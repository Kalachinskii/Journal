import './app.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JurnalList from './components/JurnalList/JurnalList.jsx';
import CardButton from './components/CardButton/CardButton.jsx';
import JurnalItem from "./components/JournalItem/JurnalItem.jsx";
import Body from './layouts/Body/Body.jsx';
import { useState } from 'react';
import JournalForm from './components/JournalForm/JournalForm.jsx';

const INITIAL_DATA = [
	{
		id: 1,
		title: 'Подготовка к обновлению курсов',  
		text: 'горные походы открывают природные ланджафты',
		date: new Date(),
	},
	// {
	// 	id: 2,
	// 	title: 'обновление курсов',  
	// 	text: 'гфывфывфывфыв фыв фыв фы в фыв',
	// 	date: new Date(),
	// },
	// {
	// 	id: 3,
	// 	title: 'Поasdas',  
	// 	text: 'горные походы оывапывапе ланджафты',
	// 	date: new Date(),
	// },
];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);
	
	const addItem = item => {	
		setItems(oldItems => [...oldItems, {
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
		}]);	
	};

	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	}

	return (
		<div className='app'>
			{/* композиция компонента - передаем в нутрь компонент другой компанент(children)*/}
			<LeftPanel>
				<Header/>
				<JournalAddButton />
				<JurnalList>
					{items.length === 0 && <p>Записей нет, добавте 1 запись</p>}
					{items.length > 0 && items.sort(sortItems).map(el => (
						<CardButton key={el.id}>
							<JurnalItem  
								text={el.text} 
								title={el.title}
								date={el.date}
							/>
						</CardButton>
					))}
				</JurnalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</div>
	)
}

export default App