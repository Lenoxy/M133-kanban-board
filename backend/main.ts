import {Application, Router} from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import {v4} from 'https://deno.land/std/uuid/mod.ts';
import {ItemDto} from './dto/item.dto.ts';

const app = new Application();
const router = new Router();

let boardItems: ItemDto[] = [];

router
    .put('/add', async (context) => {
        const body = await context.request.body().value
        body.id = v4.generate();
        console.log(body)
        boardItems.push(body);
    })
    .get('/', async (context) => {
        context.response.body = boardItems;
    })
    .post('/', async (context) => {
        const body = await context.request.body().value
        console.log(body)
})

app.use(router.routes());
app.listen({port: 8000});
