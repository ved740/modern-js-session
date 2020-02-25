const posts = [{
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post two',
        body: 'This is post two'
    }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPosts(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong !')
            }

        }, 2000);
    });
}

createPosts({
        title: 'Post Three',
        body: 'This is post Three'
    })
    .then(getPosts)
    .catch(err => console.log(err));

// Promise.all 
const promise1 = Promise.resolve('Hello Wrold')
const promise2 = 10;
const promise3 = new Promise((rs, rj) => {
    setTimeout(rs, 2000, 'Good Bye');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users');

Promise.all([promise1, promise2, promise3, promise4])
    .then((result) => {
        console.log(result);
    })
    .catch(err => console.log(err));