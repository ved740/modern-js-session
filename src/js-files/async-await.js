const posts = [
  {
    title: "Post One",
    body: "This is post one"
  },
  {
    title: "Post two",
    body: "This is post two"
  }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
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
        reject("Error: Something went wrong !");
      }
    }, 2000);
  });
}
1;

//Problem 1: Create a function init and display posts using first createPosts and then getPosts;

//Problem 2: Use open api GET "https://jsonplaceholder.typicode.com/users" and consume it using async / await
