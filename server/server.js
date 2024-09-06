import express, { json } from 'express';
import index from './router/index';
const app = express();

app.use(json());
app.use('/', index);

app.listen(5000, () => console.log('서버 실행 완료: http://localhost:5000'));