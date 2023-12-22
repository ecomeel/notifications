import { createServer } from "miragejs";
import recImg from "../assets/recomendation.png";
import surveyImg from "../assets/survey.png";
import desktopImg from "../assets/products/desktop.png";
import ipadImg from "../assets/products/ipad.png";
import iphone11Img from "../assets/products/iphone11.png";
import macbookImg from "../assets/products/macbook.png";
import pkImg from "../assets/products/pk.png";
import printerImg from "../assets/products/printer.png";

const initialNotifications = [
    {
        id: 1,
        title: "Горячие предложения 🔥",
        data: "12.01.2022 14:29",
        description: "Собрали товары, которые вам будут по вкусу",
        isRead: false,
        typeOf: "recomendation",
    },
    {
        id: 2,
        title: "Хотим узнать ваше мнение",
        data: "3.04.2023 11:03",
        description: "Небольшой опрос, который поможет нам стать лучше",
        isRead: true,
        typeOf: "survey",
    },
];

const fullNotifications = [
    {
        id: initialNotifications[0].id,
        img: recImg,
        title: "Супер предложения",
        description:
            "Собрали для вас горячие предложения на основе ваших просмотров. Посмотрите, возможно они вас заинтересуют.",
        products: [
            {
                productImg: desktopImg,
                price: 30000,
                name: 'Samsung 4k 55"',
            },
            {
                productImg: ipadImg,
                price: 10000,
                name: "Ipad mini 4 16GB",
            },
            {
                productImg: iphone11Img,
                price: 23990,
                name: "IPhone 11 128GB",
            },
            {
                productImg: macbookImg,
                price: 65000,
                name: 'Apple MacBook Air 13" M1/8Gb/256Gb Silver',
            },
            {
                productImg: pkImg,
                price: 65900,
                name: "Игровой компьютер / пк i5 12400f / 2060 super",
            },
            {
                productImg: printerImg,
                price: 12000,
                name: "Цветной лазерный принтер мфу Samsung CLX-3185FN",
            },
        ],
    },
    {
        id: initialNotifications[1].id,
        img: surveyImg,
        title: "Хотим узнать ваше мнение",
        description:
            "Вы недавно размещали объявление на нашей площадке - расскажите, что понравилось, а что нам стоит изменить. Ваше мнение поможет нам понять, что можно улучшить.",
    },
];

createServer({
    routes() {
        this.get(
            "/notifications",
            () => {
                return {
                    data: initialNotifications,
                };
            },
            { timing: 300 }
        );
        this.post("/notifications", (schema, request) => {
            let attrs = JSON.parse(request.requestBody);
            console.log(attrs);
            debugger;
        });
        this.get(
            "/fullNotifications",
            () => {
                return { data: fullNotifications };
            },
            { timing: 300 }
        );
    },
});
