import {Application, Router} from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import {v4} from 'https://deno.land/std/uuid/mod.ts';
import {ItemDto} from './dto/item.dto.ts';

const app = new Application();
const router = new Router();

let boardItems: ItemDto[] = [];

router
    .put('/api/', async (context) => {
        const body = await context.request.body().value
        body.id = v4.generate();
        boardItems.push(body);
        context.response.status = 201;
    })
    .get('/api/', async (context) => {
        context.response.body = boardItems;
        context.response.status = 200;
    })
    .post('/api/', async (context) => {
        const body: ItemDto = await context.request.body().value;
        let savedItem = boardItems.find((item) => {
            return item.id === body.id
        })
        if (savedItem) {
            savedItem.state = body.state;
            context.response.status = 200;
        } else {
            context.response.status = 400;
        }

    })
    .delete('/api/', async (context) => {
        const body: ItemDto = await context.request.body().value;
        let savedItem = boardItems.findIndex((item) => {
            return item.id === body.id
        })
        if(savedItem != undefined){
            boardItems.splice(savedItem, 1);
            context.response.status = 200;
        }else {
            context.response.status = 400;
        }
    })
    .get('/', async (context) => {
        // TODO: return frontend
    })
app.use(router.routes());
app.listen({port: 8000});
