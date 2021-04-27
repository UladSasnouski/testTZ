import React from 'react';
import { observer } from 'mobx-react';
import { store } from '../store/store';
const state = store();

const Form: React.FC = observer(() => {
    return (
        <div className='formContent'>
            <div className='formContainer'>
                <div className='formContentFirst'>
                    <label htmlFor="first">Введите имя</label>
                    <input onChange={state.setFirstName} value={state.first} type="text" id='first' placeholder='Имя' />
                    <div className={state.firstChek ? 'chek active' : 'chek'}>
                        <p>Введите имя</p>
                    </div>
                </div>
                <div className='formContentLast'>
                    <label htmlFor="last">Введите фамилию</label>
                    <input onChange={state.setLastName} value={state.last} type="text" id='last' placeholder='Фамилия' />
                    <div className={state.lastChek ? 'chek active' : 'chek'}>
                        <p>Введите фамилию</p>
                    </div>
                </div>
                <button onClick={() => state.submit()}>Готово</button>

                <div className={state.modal ? 'modal active' : 'modal'} onClick={() => state.close()}>
                    <div className='container' onClick={e => e.stopPropagation()}>
                        <div className='btn'>
                            <button onClick={() => state.close()}>⤬</button>
                        </div>
                        <div>
                            <h1>Здравствуйте {state.first} {state.last}</h1>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
});

export default Form;