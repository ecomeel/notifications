import { v4 as uuidv4 } from 'uuid';
import { createServer } from "miragejs";

const initialNotifications = [
    {
        id: uuidv4(),
        title: "Title 1",
        data: "12.23.2342 23:23",
        description: "Desc 1",
        isRead: false,
        typeOf: "recomendation",
    },
    {
        id: uuidv4(),
        title: "Title 2",
        data: "3.23.2342 23:23",
        description: "Desc 2",
        isRead: true,
        typeOf: "recomendation",
    },
    {
        id: uuidv4(),
        title: "Title 3",
        data: "6.23.2342 23:23",
        description: "Desc 3",
        isRead: false,
        typeOf: "recomendation",
    },
];

// {imgHeader, title, imgs}
const fullNotifications = [
    {

    }
]



createServer({
    routes() {
        this.get('/notifications', () => {
            return {
                data: initialNotifications
            }
        })
    },
});
