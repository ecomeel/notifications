import { createServer } from "miragejs";

const initialValue = 5;

createServer({
    routes() {
        this.get('/counter', () => {
            return {
                value: initialValue
            }
        })
    },
});
