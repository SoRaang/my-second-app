import { Router } from 'express';

const todoList = [
    { id: 1, text: '리액트 기초 공부하기', status: false },
    { id: 2, text: '취업 준비하기', status: false },
    { id: 3, text: '여행가기', status: true }
]

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/api/todo', (req, res) => {
    res.json(todoList);
});

export default router;