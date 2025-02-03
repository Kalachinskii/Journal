import { useState } from 'react';
import Button  from '../Button/Button';
// Работа с модулями
import styles from './JournalForm.module.css';

function JournalForm({onSubmit}) {
	// const [inputDate, setInputDate] = useState('');
    const [formValidState, setFormValidState] = useState({
        title: true,
        text: true,
        date: true
    });

	// const inputChange = (event) => {
	// 	setInputDate(event.target.value);
	// }

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        let isFormValid = true;
        if (!formProps.title?.trim().length) {
            setFormValidState(state => ({...state, title: false}))
            isFormValid = false;
        } else {
            setFormValidState(state => ({...state, title: true}))
        }
        if (!formProps.text?.trim().length) {
            setFormValidState(state => ({...state, text: false}))
            isFormValid = false;
        } else {
            setFormValidState(state => ({...state, text: true}))
        }
        if (!formProps.date.trim().length) {
            setFormValidState(state => ({...state, date: false}))
            isFormValid = false;
        } else {
            setFormValidState(state => ({...state, date: true}))
        }
        if (!isFormValid) {
            return;
        }
        console.log(formValidState?.title);
        onSubmit(formProps);
    }

    return (
        <>
            <form className={styles['journal-form']} onSubmit={addJournalItem}>
                {/* Динамический класс - приоритет*/}
                <input type="text" name="title" className={styles['input'] + ' ' + `${formValidState.title ? '' : styles['invalid']}`}/>
                {/* Встроенные стили - более для плавных анимаций*/}
                <input type="date" name="date" style={{border: formValidState?.date ? undefined : '1px solid red'}}/>
                <input type="text" name='tag'/>
                <textarea name="text" id="" cols="30" rows="10" style={{border: formValidState?.text ? undefined : '1px solid red'}}></textarea>
                <Button text='Сохранить'/>
            </form>
        </>
    )
}

export default JournalForm