import app from './app';

function main() {
    const PORT = 3000

    try {
        app.listen(PORT, 'localhost', async () => {
            console.log(`Server running at http://localhost:${PORT}`) 
        })
    } catch (err) {
        console.error('Starting server Error', err)
        process.exit(1)
    }
}

main()