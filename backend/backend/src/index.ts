import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/user/blog', (c) => {
    return c.text('Hello Hono!')
})

app.post('/api/v1/user/blog/second', (c) => {
    return c.text('Hello Hono!')
})

app.post('/api/v1/user/blog/third', (c) => {
    return c.text('Hello Hono!')
})

app.put('/api/v1/user/blog', (c) => {
    return c.text('Hello Hono!')
})

app.get('/api/v1/user/blog', (c) => {
    return c.text('Hello Hono!')
})

app.get('/api/v1/user/blog/second', (c) => {
    return c.text('Hello Hono!')
})

export default app