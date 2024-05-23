import express from 'express';

const app = express();

app.get('/', (req, res) =>{
    res.send('Sever is ready !!')
});

app.get('/jokes', (req, res) =>{
    const jokes = [
        {
          id: 1,
          title: "Why don't scientists trust atoms?",
          content: "Because they make up everything!"
        },
        {
          id: 2,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field!"
        },
        {
          id: 3,
          title: "What do you call fake spaghetti?",
          content: "An impasta!"
        },
        {
          id: 4,
          title: "Why don't skeletons fight each other?",
          content: "They don't have the guts."
        },
        {
          id: 5,
          title: "What do you call cheese that isn't yours?",
          content: "Nacho cheese!"
        }
      ];
    
    res.send(jokes)
    
});

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log(`Server at ${port}`)
})