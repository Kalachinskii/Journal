import { useEffect, useReducer } from 'react';
import Button  from '../Button/Button';
// Работа с модулями
import styles from './JournalForm.module.css';
// библиотека classnames
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';

// JSON TEST [{"text":"4","title":"4","date":"2025-02-13T00:00:00.000Z","id":8}]

function JournalForm({onSubmit}) {
    // логика в JournalForm.state.js - для читабельности компанента
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    // деструктизация стейта на маленькие элементы
    const {isValid, isFormReadyToSubmit, values} = formState;

    useEffect(() => {
        let timerId;
        if (!isValid.date || !isValid.text || !isValid.title) {
            timerId = setTimeout(() => {
                // отправляем событие
                dispatchForm({type: 'RESET_VALIDITY'});
            }, 3000)
        }

        // очистка
        return () => {
            clearTimeout(timerId);
        }
    // например isValid - будет проверяться отдельно при очистке таймаута
    // при formState - будет слишком часто дёргаться обновление того чего не надо
    }, [isValid]);

    useEffect(() => {
        if (isFormReadyToSubmit) {
            // добавить
            onSubmit(values);
            dispatchForm({type: 'CLEAR'})
        }
    }, [isFormReadyToSubmit, values, onSubmit])

    const addJournalItem = (e) => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        // const formProps = Object.fromEntries(formData);
        // formProps - это {title: '', date: '', tag: '', text: ''}
        dispatchForm({type: 'SUBMIT'});
    }

    const onChange = (e) => {
        // e.target.name - универсальное ключ имя
        // e.target.value - универсальное значение поля
        dispatchForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}})
    }

    return (
        <>
            <form className={styles['journal-form']} onSubmit={addJournalItem}>
                {/* Динамический класс - приоритет*/}
                <div>
                    <input onChange={onChange} value={values.title} type="text" name="title" className={styles['input-title'] + ' ' + `${isValid.title ? '' : styles['invalid']}`}/>
                </div>
                {/* библиотека classnames */}
                {/* for в jsx нету => htmlFor - аналог for */}
                <div className={styles['form-row']}>
                    <label htmlFor="date" className={styles['form-label']}>
                        <img src="/calendar.svg" alt="Иконка календарь" />
                        <span>Дата</span>
                    </label>
                    <input onChange={onChange} value={values.date} type="date" id="date" name="date" className={
                        // cn(styles['invalid']) - добавить класс без проверки условий
                        cn(styles['input'], {
                            [styles['invalid']]: !isValid.date
                        })
                    }/>
                </div>
                <div className={styles['form-row']}>
                    <label htmlFor="tag" className={styles['form-label']}>
                        <img src="/folder.svg" alt="Иконка папки" />
                        <span>Метки</span>
                    </label>
                    <input onChange={onChange} value={values.tag} type="text" id="tag" name='tag' className={styles['input']}/>
                </div>
                
                {/* Встроенные стили - более для плавных анимаций*/}
                {/* <textarea name="text" id="" cols="30" rows="10" style={{border: isValid?.text ? undefined : '1px solid red'}}></textarea> */}
                <textarea onChange={onChange} value={values.text} name="text" id="" cols="30" rows="10" className={cn(styles['input'], {
                            [styles['invalid']]: !isValid.text
                        })}></textarea>
                <Button text='Сохранить'/>
            </form>
        </>
    )
}

export default JournalForm