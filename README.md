# Phoil.ly

## Постановка задачи

Есть следующий файл в формате JSON:

```json
[
    {
        "email": "jim@gmail.com",
        "number": "221122"
    },
    {
        "email": "jam@gmail.com",
        "number": "830347"
    },
    {
        "email": "john@gmail.com",
        "number": "221122"
    },
    {
        "email": "jams@gmail.com",
        "number": "349425"
    },
    {
        "email": "jams@gmail.com",
        "number": "141424"
    },
    {
        "email": "jill@gmail.com",
        "number": "822287"
    },
    {
        "email": "jill@gmail.com",
        "number": "822286"
    }
]
```

Необходимо написать full stack приложение. Frontend представляет из себя одну страницу, на которой находится форма с двумя полями: email (обязательное) и number (опциональное). Также есть кнопка submit, при нажатии на которую создается запрос на backend. Backend должен найти подходящих пользователей в JSON и вернуть их в качестве ответа. На frontend'е необходимо отобразить подходящих пользователей.

### Функциональные требования

- нужно на backend добавить задержку обработки запроса в 5 секунд (имитация долгой обработки ответа). При повторном запросе с frontend, отменять прошлый запрос.
- обязательная валидация полей email и number. Можно сделать либо на frontend либо на backend, необходимо объяснить выбранный подход
- на frontend'е, на поле number нужно добавить маску, чтобы номер отображался с дефисами каждые два знака. Например 22-11-22, 83-03-47

### Технические требования

- frontend: react или vue (типизация на выбор)
- backend: nodejs (типизация обязательна)
- библиотеки: на усмотрение
- деплой не обязателен, подойдёт и Readme с инструкцией