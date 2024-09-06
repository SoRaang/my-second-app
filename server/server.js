import express, { json } from 'express';
import cors from 'cors';
import index from './router/index.js';

const app = express();

app.use(json());
app.use('/', index);
app.use(cors());

app.listen(5000, () => console.log('서버 실행 완료: http://localhost:5000'));