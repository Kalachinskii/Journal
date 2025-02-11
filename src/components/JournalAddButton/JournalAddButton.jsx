import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton({clearForm}) {
    return (
        <CardButton className="journal-add" onClick={clearForm}>
            <img className='add' src="/add.svg" alt="Добавить" />
            Новое воспоминание
        </CardButton>
    )
}

export default JournalAddButton