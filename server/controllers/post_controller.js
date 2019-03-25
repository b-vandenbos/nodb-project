let id = 4;
let posts = [{id: 1, movie: 'Captain Marvel', text: 'Does it work? The short answer is: yes. There is enough to keep both diehard Marvel fans and newcomers engaged.', timestamp: 'March 20, 2019 | 4:49 pm'}, {id: 2, movie: 'Green Book', text: 'Call this actors\' duet sentimental and simplistic at your own peril. Green Book may well move you, possibly to tears, at the thought of real social change and kindness.', timestamp: 'March 21, 2019 | 2:14 pm'}, {id: 3, movie: 'The Lego Movie 2', text: 'The Lego Movie 2 rarely finds a way to break free of the series\' now-entrenched formula. It is definitely fun, but just as definitely less memorable than that first unforgettable installment.', timestamp: 'March 23, 2019 | 5:03pm'}];

module.exports = {
    read: (req, res) => {
        res.status(200).send(posts)
    },

    create: (req, res) => {
        let {movie, text} = req.body;
        //Date Calculations//
            let date = new Date();
            let year = date.getFullYear();
            let day = date.getDate();
            let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            let month = monthName[date.getMonth()];
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var time = hours + ':' + minutes + ' ' + ampm;

        let newPost = {
            id: id++,
            movie,
            text,
            timestamp: `${month} ${day}, ${year} | ${time}`
        };

        posts.push(newPost);
        res.status(200).send(posts);
    },
    
    update: (req, res) => {
        let {movie, text, timestamp} = req.body;

        let updatedPost = {
            id: req.params.id,
            movie,
            text,
            timestamp
        }

        let updatedPostIndex = posts.findIndex(post => Number(post.id) === Number(req.params.id));
        posts.splice(updatedPostIndex,1,updatedPost);
        res.status(200).send(posts);
    },

    delete: (req, res) => {
        let reviewToDelete = req.params.id;
        let deletedReviewIndex = posts.findIndex(post => Number(post.id) === Number(reviewToDelete));
        posts.splice(deletedReviewIndex, 1);
        res.status(200).send(posts);
    }
}