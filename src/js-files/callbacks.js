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
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

createPosts({
    title: 'Post Three',
    body: 'This is post Three'
});

getPosts();