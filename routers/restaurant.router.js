import express from 'express';
import { MockDB } from '../repositories/mock-db.js';

export const RestaurantRouter = express.Router();
const mockDB = new MockDB();
const categories = ['中東料理', '日本料理', '義式餐廳', '美式', '酒吧', '咖啡'];

RestaurantRouter.get(['/', '/index.html'], (req, res) => res.redirect('/index'));

RestaurantRouter.get('/index', (req, res) => {
    const keyword = req.query.keyword;
    const rests = keyword ? getRestaurantsByKeyword(keyword) : mockDB.getRestaurants();
    res.render('index', { rests });
});

RestaurantRouter.get('/restaurant/:id', (req, res) => {
    const id = Number(req.params.id);
    const rest = mockDB.getRestaurantById(id);
    if (rest) {
        res.render('show', { rest });
        return;
    }
    res.redirect('/index');
});

function getRestaurantsByKeyword(keyword) {
    const isCategory = categories.includes(keyword);
    if (isCategory) {
        return mockDB.getRestaurantsByCategory(keyword);
    }
    else {
        return mockDB.getRestaurantsByName(keyword);
    }
}