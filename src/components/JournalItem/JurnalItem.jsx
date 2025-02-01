import './JurnalItem.css';

function JurnalItem({title, date, text}) {
    const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);

    return (
        <>
            <h2 className='jurnal-item_header'>{title}</h2>
            <h2 className='jurnal-item_body'>
                <div className='jurnal-item_date'>{formatedDate}</div>
                <div className='jurnal-item_text'>{text}</div>
            </h2>
        </>
    )
}

export default JurnalItem