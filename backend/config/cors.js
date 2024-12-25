const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 204,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}

export default corsOptions;