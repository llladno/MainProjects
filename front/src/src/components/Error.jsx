import React from 'react';
import Bar from "./Bar";

const Error = () => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <h1>Ошибка в соединении</h1>
                    <h2>База данных не подключена</h2>
                </div>
            </div>
        </div>
    );
};

export default Error;