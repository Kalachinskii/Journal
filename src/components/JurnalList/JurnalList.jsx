import { useContext, useMemo } from 'react';
import { UserContext } from '../../context/user.context';
import CardButton from '../CardButton/CardButton';
import JurnalItem from '../JournalItem/JurnalItem';
import './JurnalList.css';

function JurnalList({items, setItem}) {
    const {userId} = useContext(UserContext);

    const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	}

    const filterItems = useMemo(() => items
    .filter(el => el.userId === userId)
    .sort(sortItems), [items, userId])

    if (items.length === 0) {
        return <p>Записей нет, добавте 1 запись</p>;
    }

    return <>
        {filterItems
        .map(el => (
            <CardButton key={el.id} onClick={() => {setItem(el)}}>
                <JurnalItem  
                    text={el.text} 
                    title={el.title}
                    date={el.date}
                />
            </CardButton>
        ))}
    </>
}

export default JurnalList