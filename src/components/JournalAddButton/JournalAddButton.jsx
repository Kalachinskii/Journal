import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton() {
    return (
        <CardButton className="journal-add">
            <img className='add' src="/add.svg" alt="Добавить" />
            Новое воспоминание
        </CardButton>
    )
}

export default JournalAddButton