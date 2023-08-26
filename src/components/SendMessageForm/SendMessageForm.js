import './SendMessageForm.css'

function SendMessageForm() {

    return (
        <>
            <h2 className='form__title'>Отправить сообщение</h2>
            <form className="form">
                <input className='form__input form__input_type_name' placeholder='Ваше имя' required></input>
                <input className='form__input form__input_type_email' placeholder='Email' type='email'></input>
                <textarea className='form__input form__input_type_message' placeholder='Ваше сообщение' required></textarea>
                <button className='form__button'>отправить</button>
            </form >
        </>
    );
}
export default SendMessageForm;