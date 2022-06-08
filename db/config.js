const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'local';
dotenv.config({ path: env + '.env' });

module.exports = {
    'local': {
        'database': process.env.DB_NAME,
        'host': process.env.DB_MASTER_HOSTNAME,
        'dialect': 'postgres',
        'logging': false,
        'username': process.env.DB_USER_NAME,
        'password': process.env.DB_PASSWORD
    },
    'testing': {
        'database': process.env.DB_NAME,
        'host': process.env.DB_MASTER_HOSTNAME,
        'dialect': 'postgres',
        'logging': false,
        'username': process.env.DB_USER_NAME,
        'password': process.env.DB_PASSWORD
    },
    'development': {
        'database': process.env.DB_NAME,
        'host': process.env.DB_MASTER_HOSTNAME,
        'dialect': 'postgres',
        'logging': false,
        'replication': {
            'read': [
                { host: process.env.DB_REPLICA_HOSTNAME, username: process.env.DB_USER_NAME, password: process.env.DB_PASSWORD },
                { host: process.env.DB_MASTER_HOSTNAME, username: process.env.DB_USER_NAME, password: process.env.DB_PASSWORD }],
            'write': { host: process.env.DB_MASTER_HOSTNAME, username: process.env.DB_USER_NAME, password: process.env.DB_PASSWORD }
        }
    },
    'demo': {
        'database': process.env.DB_NAME,
        'host': process.env.DB_MASTER_HOSTNAME,
        'dialect': 'postgres',
        'logging': false,
        'replication': {
            'read': [
                { host: process.env.DB_REPLICA_HOSTNAME, username: process.env.DB_USER_NAME, password: process.env.DB_PASSWORD },
                { host: process.env.DB_MASTER_HOSTNAME, username: process.env.DB_USER_NAME, password: process.env.DB_PASSWORD }],
            'write': { host: process.env.DB_MASTER_HOSTNAME, username: process.env.DB_USER_NAME, password: process.env.DB_PASSWORD }
        }
    },
    'production': {
        'database': process.env.DB_NAME,
        'host': process.env.DB_MASTER_HOSTNAME,
        'dialect': 'postgres',
        'logging': false,
        'replication': {
            'read': [
                { host: process.env.DB_REPLICA_HOSTNAME, username: process.env.DB_USER_NAME, password: process.env.DB_PASSWORD },
                { host: process.env.DB_MASTER_HOSTNAME, username: process.env.DB_USER_NAME, password: process.env.DB_PASSWORD }],
            'write': { host: process.env.DB_MASTER_HOSTNAME, username: process.env.DB_USER_NAME, password: process.env.DB_PASSWORD }
        }
    }
};
