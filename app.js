const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');

const blogRoutes = require('./routes/blogRoutes');


// express app
const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://kecs:1gumibaba2@cluster0.twaol.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

// listen for requests - moved to mongoose.connect method, in order not 2 happen too early


// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('601875f9c3c91779b37d7992')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })


app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>');
    res.render('about', { title: 'About' });
});

// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// blog routes
app.use('/blogs', blogRoutes);

// 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});