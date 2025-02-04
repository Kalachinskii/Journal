import { useState } from 'react';
import Button  from '../Button/Button';
// Работа с модулями
import styles from './JournalForm.module.css';
// библиотека classnames
import cn from 'classnames';

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
                <div>
                    <input type="text" name="title" className={styles['input-title'] + ' ' + `${formValidState.title ? '' : styles['invalid']}`}/>
                </div>
                {/* библиотека classnames */}
                <div className={styles['form-row']}>
                    <label for="date" className={styles['form-label']}>
                        <img src="/calendar.svg" alt="Иконка календарь" />
                        <span>Дата</span>
                    </label>
                    <input type="date" id="date" name="date" className={
                        // cn(styles['invalid']) - добавить класс без проверки условий
                        cn(styles['input'], {
                            [styles['invalid']]: !formValidState.date
                        })
                    }/>
                </div>
                <div className={styles['form-row']}>
                    <label for="tag" className={styles['form-label']}>
                        <img src="/folder.svg" alt="Иконка папки" />
                        <span>Метки</span>
                    </label>
                    <input type="text" id="tag" name='tag' className={styles['input']}/>
                </div>
                
                {/* Встроенные стили - более для плавных анимаций*/}
                {/* <textarea name="text" id="" cols="30" rows="10" style={{border: formValidState?.text ? undefined : '1px solid red'}}></textarea> */}
                <textarea name="text" id="" cols="30" rows="10" className={cn(styles['input'], {
                            [styles['invalid']]: !formValidState.text
                        })}></textarea>
                <Button text='Сохранить'/>
            </form>
        </>
    )
}

export default JournalForm