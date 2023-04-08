import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUserAction } from '../redux/actions';

function UserPage() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        website: '',
    });
    const { successMessageVisible } = useSelector((state) => state.usersReducer);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createUserAction(formData));
    };

    return (
        <div>
            <h1>Регистрация:</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя:</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange}/>
                </div>
                <div>
                    <label>Фамилия:</label>
                    <input type="text" name="username" id="username" value={formData.username} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Сайт:</label>
                    <input type="text" name="website" id="website" value={formData.website} onChange={handleInputChange} />
                </div>
                <button type="submit">Создать</button>
            </form>
            {successMessageVisible && (
                <p>Пользователь успешно создан!</p>
            )}
        </div>
    );
}

export default UserPage;