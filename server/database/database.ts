import { Sequelize } from 'sequelize';
import path from 'path';
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

console.log('ElephantSQL URL: ', process.env.ELEPHANTSQL_URL);

const sequelize = new Sequelize(process.env.ELEPHANTSQL_URL!, {
  dialect: 'postgres',
  protocol: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
