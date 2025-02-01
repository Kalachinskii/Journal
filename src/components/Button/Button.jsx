import { useState } from 'react';
import './button.css';

function Button() {
    const [text, setText] = useState('Сохранить');

    const clicked = () => {
        console.log('sav');
    }

    return (
        <div onClick={clicked} className='button accent'>сохранить</div>
    )
}

export default Button