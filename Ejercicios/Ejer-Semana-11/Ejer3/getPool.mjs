import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const { HOST, USER, PASSWORD, DATABASE } = process.env;
let pool;

const getPool = async () => {

    try {
        
        if(!pool) {
            pool = mysql.createPool({

                connectionLimit: 10,
                host: HOST,
                user: USER,
                password: PASSWORD,
                timezone: 'Z'
            });

        };

        return await pool;

    } catch (error) {
        
        console.log('Error');

    };

};

export default getPool;



