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

async function init() {
  await createPosts({
    title: "Post Three",
    body: "This is post Three"
  });

  getPosts();
}

init();

//With Fetch
/* async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
fetchUsers(); */
