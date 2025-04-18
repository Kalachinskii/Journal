import { useContext, useEffect, useId, useReducer, useRef } from 'react';
import Button  from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import Input from '../Input/Input';
import { UserContext } from '../../context/user.context';

function JournalForm({onSubmit, data, onDelete}) {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const {isValid, isFormReadyToSubmit, values} = formState;
    const titleRef = useRef();
    const dateRef = useRef();
    const textRef = useRef();
    const {userId} = useContext(UserContext);

    const focusError = (isValid) => {
        switch (true) {
            case !isValid.title:
                titleRef.current.focus();
                break;
            case !isValid.date:
                dateRef.current.focus();
                break;
            case !isValid.text:
                textRef.current.focus();
                break;
        }
    }

    useEffect(() => {
        if (!data) {
            dispatchForm({type: 'CLEAR'})
            dispatchForm({type: 'SET_VALUE', payload: {userId}});
        }
        dispatchForm({type: 'SET_VALUE', payload: {...data}});
    }, [data])

    useEffect(() => {
        let timerId;
        if (!isValid.date || !isValid.text || !isValid.title) {
            focusError(isValid);
            timerId = setTimeout(() => {
                dispatchForm({type: 'RESET_VALIDITY'});
            }, 3000)
        }

        return () => {
            clearTimeout(timerId);
        }
    }, [isValid]);

    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values);
            // некоректно работает, удаляет свойство userId: userId
            dispatchForm({type: 'CLEAR'})
            // исправление
            dispatchForm({type: 'SET_VALUE', payload: {userId}});
        }
    }, [isFormReadyToSubmit, values, onSubmit, userId])

    useEffect(() => {
        dispatchForm({type: 'SET_VALUE', payload: {userId}});
    }, [userId])

    const addJournalItem = (e) => {
        e.preventDefault();
        dispatchForm({type: 'SUBMIT'});
    }

    const onChange = (e) => {
        dispatchForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}})
    }

    const deleteJurnalItem = () => {
        onDelete(data.id);
        dispatchForm({type: 'CLEAR'});
        dispatchForm({type: 'SET_VALUE', payload: {userId}});
    }

    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem}>
            <div className={styles['form-row']}>
                <Input ref={titleRef} onChange={onChange} value={values.title} type="text" name="title" appearence="title" isValid={isValid.title}/>
                {data?.id && <button onClick={() => deleteJurnalItem()} className={styles['delete']} type='button'>
                    <img src="/delete.svg" alt="кнопка удаления" />
                </button>}
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="date" className={styles['form-label']}>
                    <img src="/calendar.svg" alt="Иконка календарь" />
                    <span>Дата</span>
                </label>
                <Input 
                    ref={dateRef} 
                    onChange={onChange} 
                    value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''} 
                    type="date" id="date" name="date" isValid={isValid.date}
                />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="tag" className={styles['form-label']}>
                    <img src="/folder.svg" alt="Иконка папки" />
                    <span>Метки</span>
                </label>
                <Input onChange={onChange} value={values.tag} type="text" id="tag" name='tag' />
            </div>
            <textarea ref={textRef} onChange={onChange} value={values.text} name="text" id="" cols="30" rows="10" className={cn(styles['input'], {
                        [styles['invalid']]: !isValid.text
                    })}></textarea>
            <Button text='Сохранить'/>
        </form>
    )
}

export default JournalForm