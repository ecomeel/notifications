import { createServer } from "miragejs";

const initialValue = 5;

//  Notification template
// { id, title, data, desription, typeNotification, isRead }

createServer({
    routes() {
        this.get('/counter', () => {
            return {
                value: initialValue
            }
        })
    },
});
