import {Application, Router} from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import {v4} from 'https://deno.land/std/uuid/mod.ts';
import {ItemDto} from './dto/item.dto.ts';

const app = new Application();
const router = new Router();

let boardItems: ItemDto[] = [];

router
    .get('/', async (context) => {
        context.response.body = await Deno.readTextFile("frontend/index.html");
    })
    .get('/style.css', async (context) => {
        context.response.type = 'text/css';
        context.response.body = await Deno.readTextFile("frontend/style.css");
    })
    .get('/script.js', async (context) => {
        context.response.type = 'application/javascript';
        context.response.body = await Deno.readTextFile("frontend/script.js");
    }).get('/api/columns', (context) => {
    context.response.body = [
        {
            name: 'ToDo',
            statusKey: 0,
        },
        {
            name: 'Actual',
            statusKey: 1,
        },
        {
            name: 'Done',
            statusKey: 2,
        }
    ]

})
    .put('/api/', async (context) => {
        const body: ItemDto = JSON.parse(await context.request.body().value);
        body.id = v4.generate();
        boardItems.push(body);
        context.response.status = 201;
    })
    .get('/api/', async (context) => {
        context.response.body = boardItems;
        context.response.status = 200;
    })
    .post('/api/', async (context) => {
        let body = JSON.parse(await context.request.body().value);

        let savedItem = boardItems.find((item) => item.id === body.id);
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
        if (savedItem != undefined) {
            boardItems.splice(savedItem, 1);
            context.response.status = 200;
        } else {
            context.response.status = 400;
        }
    })

app.use(router.routes());
app.listen({port: 8000});
