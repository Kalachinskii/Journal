import './app.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JurnalList from './components/JurnalList/JurnalList.jsx';
import Body from './layouts/Body/Body.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import { useLocalStorage } from './hooks/use-localstorage.hook.js';
import { UserContext } from './context/user.context.js';
import { useState } from 'react';

function mapItems(items) {
	if(!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {
	const [items, setItems] = useLocalStorage('data');
	// состояние для контекста
	const [userId, setUserId] = useState(1);

	const addItem = item => {	
		setItems([...mapItems(items), {
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
		}]);	
	};

	return (
// обворачиваем то что будет отслеживаться
// в данном случае всё приложеоние
// Provider - сюда прицепи наш контекст
// 			- ограничивает область видемости контекста
// получаем контекст в JurnalForm, но можем и здесь
// несмотря что задан параметр в контексте мы должны его пробросить и тут как начальное значение
// например если пробросить value={{userId: items.length}}
// то в компаненте JurnalForm где получаем контекст будет уже длина items
// 
// если не обворачивать то контекст будет работать с хуком но будет неизменяем и = задданному парраметру
<UserContext.Provider value={{userId: userId, setUserId}}>
		<div className='app'>
			{/* композиция компонента - передаем в нутрь компонент другой компанент(children)*/}
			<LeftPanel>
				<Header/>
				<JournalAddButton />
				<JurnalList items={mapItems(items)} />
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</div>
		</UserContext.Provider>
	)
}

export default App