import CardButton from '../CardButton/CardButton';
import JurnalItem from '../JournalItem/JurnalItem';
import './JurnalList.css';

function JurnalList({items}) {
    const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	}

    if (items.length === 0) {
        return <p>Записей нет, добавте 1 запись</p>;
    }

    return <>
        {items.sort(sortItems).map(el => (
            <CardButton key={el.id}>
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