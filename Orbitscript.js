// Data structure to store posts
let posts = [];

// Data structure to store replies
let replies = {};

// Data structure to store likes
let likes = {};

// Data structure to store hashtag counts
let hashtags = {};

// Data structure to store users
let users = JSON.parse(localStorage.getItem('users')) || [];

// Initialize a postIdCounter variable to keep track of the next post ID
let postIdCounter = 1;
let nextPostId = 1;

function loadContent(page) {
  const postFormContainer = document.getElementById('create-post-form');

  postFormContainer.style.display = page === 'home' ? 'block' : 'none';
  if (page === 'post') {
    showPostForm();
  } else if (page === 'posts') {
    showPosts();
  } else if (page === 'explore') {
    let exploreHTML = '<h2>Explore</h2>';

    // Generate HTML for each user
    if (users.length > 0) {
      for (let i = 0; i < users.length; i++) {
        let username = users[i].username;
        exploreHTML += `
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">${username}</h5>
              <a href="#" onclick="showProfile('${username}')">View Profile</a>
            </div>
          </div>
        `;
      }
    } else {
      exploreHTML += '<p>No users available.</p>';
    }

    // Update the content area
    const content = document.getElementById('content-area');
    content.innerHTML = exploreHTML;

    // Update the header text
    document.querySelector('#header h2').innerHTML = 'EXPLORE';
    document.querySelector('#home-button-container').style.display = 'none';
    document.getElementById('notifications-buttons').style.display = 'none';
    document.getElementById('settings-form').style.display = 'none';
  } else if (page === 'profile') {
    // Get the current user's username
    //const currentUser = localStorage.getItem('currentUser');
    const currentUser = 'User1';

    // Display the current user's profile
    showProfile(currentUser);

    // Update the header text
    document.querySelector('#header h2').innerHTML = 'PROFILE';
    document.querySelector('#home-button-container').style.display = 'none';
    document.getElementById('notifications-buttons').style.display = 'none';
    document.getElementById('settings-form').style.display = 'none';
  } else if (page === 'notifications') {
    // Update the header text
    document.querySelector('#header h2').innerHTML = 'NOTIFICATIONS';
    document.querySelector('#home-button-container').style.display = 'none';
    document.getElementById('notifications-buttons').style.display = 'flex';
    document.getElementById('settings-form').style.display = 'none';
  } else if (page === 'observe') {
    showPosts();
  } else if (page === 'signals') {
    showPosts();
  } else if (page === 'settings') {
    // Load the settings page
    const settingsHTML = document.getElementById('settings-container').outerHTML;
    const content = document.getElementById('content-area');
    content.innerHTML = settingsHTML;
    document.querySelector('#header h2').innerHTML = 'SETTINGS';
    document.querySelector('#home-button-container').style.display = 'none';
    document.getElementById('notifications-buttons').style.display = 'none';
    document.getElementById('settings-form').style.display = 'block';
  } else {
    if (page === 'home') {
      showPosts(); // Call showPosts function when loading the "home" page
      document.querySelector('#home-button-container').style.display = 'flex';
      document.getElementById('notifications-buttons').style.display = 'none';
      document.getElementById('settings-form').style.display = 'none';
      document.querySelector('#header h2').innerHTML = 'HOME';
    } else {
      const content = document.getElementById('content-area');
      content.innerHTML = `<h2>${page.toUpperCase()}</h2><p>This is the ${page} page.</p>`;
    }
  }
}

function saveUsers() {
  localStorage.setItem('users', JSON.stringify(users));
}

function extractHashtags(text) {
  const matches = text.match(/#\w+/g);
  if (matches) {
    for (let i = 0; i < matches.length; i++) {
      const hashtag = matches[i];
      if (!hashtags[hashtag]) {
        hashtags[hashtag] = 0;
      }
      hashtags[hashtag]++;
    }
  }
}


function login() {
  const username = document.getElementById('username').value;
  console.log('Setting currentUser in local storage:', username);
  localStorage.setItem('currentUser', username);
  console.log('Setting currentUser in local storage:', username);
  document.getElementById('login-form').style.display = 'none';
}

function logout() {
  localStorage.removeItem('currentUser');
  location.reload();
  document.getElementById('login-form').style.display = 'block';
}

function saveData() {
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('hashtags', JSON.stringify(hashtags));
}

function loadData() {
  users = JSON.parse(localStorage.getItem('users')) || [];
  hashtags = JSON.parse(localStorage.getItem('hashtags')) || {};
  replies = JSON.parse(localStorage.getItem('replies')) || {};

  showTrendingTopics();
  showPosts();
}

loadData();

// Hardcoded hashtags
const hardcodedHashtags = {
  '#hashtag1': 5,
  '#hashtag2': 3,
  '#hashtag3': 2
};

// Update the hashtags variable with the hardcoded values
hashtags = hardcodedHashtags;


// Hardcoded users and posts
const hardcodedUsers = [
  {
    username: 'User1',
    profilePictureUrl: 'himeko.jpg',
    posts: [
      { title: 'Post1', text: 'This is post 1' },
      { title: 'Post2', text: 'This is post 2' },
      { title: 'Post3', text: 'This is post 3' },
      { title: 'Post4', text: 'This is post 4' },
      { title: 'Post5', text: 'This is post 5' }
    ]
  },
  {
    username: 'User2',
    profilePictureUrl: 'seele.png',
    posts: [
      { title: 'Post1', text: 'This is post 1' },
      { title: 'Post2', text: 'This is post 2' },
      { title: 'Post3', text: 'This is post 3' },
      { title: 'Post4', text: 'This is post 4' },
      { title: 'Post5', text: 'This is post 5' }
    ]
  },
  {
    username: 'User3',
    profilePictureUrl: 'kafka.jpg',
    posts: [
      { title: 'Post1', text: 'This is post 1' },
      { title: 'Post2', text: 'This is post 2' },
      { title: 'Post3', text: 'This is post 3' },
      { title: 'Post4', text: 'This is post 4' },
      { title: 'Post5', text: 'This is post 5' }
    ]
  },
  {
    username: 'User4',
    profilePictureUrl: 'serval.jpg',
    posts: [
      { title: 'Post1', text: 'This is post 1' },
      { title: 'Post2', text: 'This is post 2' },
      { title: 'Post3', text: 'This is post 3' },
      { title: 'Post4', text: 'This is post 4' },
      { title: 'Post5', text: 'This is post 5' }
    ]
  },
  {
    username: 'User5',
    profilePictureUrl: 'natasha.png',
    posts: [
      { title: 'Post1', text: 'This is post 1' },
      { title: 'Post2', text: 'This is post 2' },
      { title: 'Post3', text: 'This is post 3' },
      { title: 'Post4', text: 'This is post 4' },
      { title: 'Post5', text: 'This is post 5' }
    ]
  }
];

// Add the hardcoded users and posts to the users array
users = hardcodedUsers;

// Hardcoded replies
const hardcodedReplies = {
  '0': [
    { text: 'This is a reply to post 1', author: 'User2' },
    { text: 'This is another reply to post 1', author: 'User3' }
  ],
  '1': [
    { text: 'This is a reply to post 2', author: 'User4' },
    { text: 'This is another reply to post 2', author: 'User3' }
  ],
  '4': [
    { text: 'This is a reply to post 1', author: 'User2' },
    { text: 'This is another reply to post 1', author: 'User3' }
  ],
  '7': [
    { text: 'This is a reply to post 1', author: 'User2' },
    { text: 'This is another reply to post 1', author: 'User3' }
  ],
  '9': [
    { text: 'This is a reply to post 1', author: 'User2' },
    { text: 'This is another reply to post 1', author: 'User3' }
  ],
  '11': [
    { text: 'This is a reply to post 1', author: 'User2' },
    { text: 'This is another reply to post 1', author: 'User3' }
  ],
  '12': [
    { text: 'This is a reply to post 1', author: 'User2' },
    { text: 'This is another reply to post 1', author: 'User3' }
  ],
  '15': [
    { text: 'This is a reply to post 1', author: 'User2' },
    { text: 'This is another reply to post 1', author: 'User3' }
  ],
  '17': [
    { text: 'This is a reply to post 1', author: 'User2' },
    { text: 'This is another reply to post 1', author: 'User3' }
  ],
};

replies = hardcodedReplies;

console.log(users);

// Check if there is a current user when the page loads
if (localStorage.getItem('currentUser')) {
  document.getElementById('login-form').style.display = 'none';
}

function showPostForm() {
  // Get the modal element
  const modalElement = document.getElementById('postModal');

  // Create a new instance of the bootstrap Modal class
  const modal = new bootstrap.Modal(modalElement);

  // Show the modal
  modal.show();
}

function showAllHardcodedNotifications() {
  let notificationsHTML = '<h2>Notifications</h2>';

  notificationsHTML += `
  <ul class="list-group">
  <li class="list-group-item reply-notification">
    <i class="fas fa-reply"></i> <b>Seele</b> replied to your post
  </li>
  <li class="list-group-item reply-notification">
    <i class="fas fa-reply"></i> <b>Serval</b> replied to your post
  </li>
  <li class="list-group-item reply-notification">
    <i class="fas fa-reply"></i> <b>Himeko</b> replied to your post
  </li>
  <li class="list-group-item reply-notification">
    <i class="fas fa-reply"></i> <b>Stelle</b> replied to your post
  </li>
  <li class="list-group-item reply-notification">
    <i class="fas fa-reply"></i> <b>Pela</b> replied to your post
  </li>
  <li class="list-group-item like-notification">
    <i class="fas fa-heart"></i> <b>Seele</b> liked your post
  </li>
  <li class="list-group-item like-notification">
    <i class="fas fa-heart"></i> <b>Fu Xuan</b> liked your post
  </li>
  <li class="list-group-item like-notification">
    <i class="fas fa-heart"></i> <b>Natasha</b> liked your post
  </li>
  <li class="list-group-item like-notification">
    <i class="fas fa-heart"></i> <b>Clara</b> liked your post
  </li>
  <li class="list-group-item like-notification">
    <i class="fas fa-heart"></i> <b>Asta</b> liked your post
  </ul>
  `;

  // Update the content area
  const content = document.getElementById('content-area');
  content.innerHTML = notificationsHTML;
}

function showHardcodedNotificationType(type) {
  let notificationsHTML = '<h2>Notifications</h2>';

  if (type === 'reply') {
    notificationsHTML += `
      <ul class="list-group">
      <li class="list-group-item reply-notification">
        <i class="fas fa-reply"></i> <b>Seele</b> replied to your post
      </li>
      <li class="list-group-item reply-notification">
        <i class="fas fa-reply"></i> <b>Serval</b> replied to your post
      </li>
      <li class="list-group-item reply-notification">
        <i class="fas fa-reply"></i> <b>Himeko</b> replied to your post
      </li>
      <li class="list-group-item reply-notification">
        <i class="fas fa-reply"></i> <b>Stelle</b> replied to your post
      </li>
      <li class="list-group-item reply-notification">
        <i class="fas fa-reply"></i> <b>Pela</b> replied to your post
      </li>
      </ul>
    `;
  } else if (type === 'like') {
    notificationsHTML += `
      <ul class="list-group">
      <li class="list-group-item like-notification">
        <i class="fas fa-heart"></i> <b>Seele</b> liked your post
      </li>
      <li class="list-group-item like-notification">
        <i class="fas fa-heart"></i> <b>Fu Xuan</b> liked your post
      </li>
      <li class="list-group-item like-notification">
        <i class="fas fa-heart"></i> <b>Natasha</b> liked your post
      </li>
      <li class="list-group-item like-notification">
        <i class="fas fa-heart"></i> <b>Clara</b> liked your post
      </li>
      <li class="list-group-item like-notification">
        <i class="fas fa-heart"></i> <b>Asta</b> liked your post
      </li>
      </ul>
    `;
  }

  // Update the content area
  const content = document.getElementById('content-area');
  content.innerHTML = notificationsHTML;
}

loadContent(home);

function submitPost(event) {
  event.preventDefault();

  const postTitleElement = document.getElementById('post-title');
  const postTitle = postTitleElement.value;
  const postTextElement = document.getElementById('post-text');
  const postText = postTextElement.value;
  const postMediaElement = document.getElementById('post-media');
  const postMediaFiles = postMediaElement.files;

  // Get the current user's username
  const currentUser = 'User1';

  // Add the new post to the current user's posts
  let user = users.find(user => user.username === currentUser);
  if (!user) {
    user = {username: currentUser, posts: []};
    users.push(user);
  }

  // Handle media files
  let media = [];
  if (postMediaFiles.length > 0) {
    for (let i = 0; i < postMediaFiles.length; i++) {
      let file = postMediaFiles[i];
      let fileUrl = URL.createObjectURL(file);
      media.push({url: fileUrl, type: file.type});
    }
  }


  // Create a new post object with an id property
  let newPost = {
    id: String(postIdCounter),
    title: postTitle,
    text: postText,
    media: media
  };

  newPost.id = nextPostId;
  nextPostId++;
  
  // Increment the postIdCounter variable
  postIdCounter++;
  
  // Add the new post to the userPosts array
  user.posts.push({title: postTitle, text: postText, media: media});

  // Save the updated users array
  saveUsers();

  // Update the hashtag counts
  updateHashtags(postText);

  // Update the display of the trending topics
  showTrendingTopics();

  // Call showPosts instead of loadContent to display the posts immediately after submitting a post
  showPosts();

   // Get the modal element
   const modalElement = document.getElementById('postModal');

   // Create a new instance of the bootstrap Modal class
   const modal = new bootstrap.Modal(modalElement);

   // Hide the modal
   modal.hide();

   // Load the "home" page
   loadContent('home');

   // Apply slide-in animation to new post
   document.querySelector('.card:last-child').classList.add('slide-in-from-right');

   // Clear the text in the post form
   postTitleElement.value = '';
   postTextElement.value = '';
}

function showProfile(username) {
  const content = document.getElementById('content-area');
  let profileHTML = '';

  // Find the user by username
  let user = hardcodedUsers.find(user => user.username === username);
  if (user) {
    profileHTML += `
      <div style="display: flex; align-items: center;">
        <img src="${user.profilePictureUrl}" alt="Profile Picture" style="margin-right: 10px; width: 100px; height: 100px; border-radius: 50%;">
        <h2>${user.username}'s Profile</h2>
      </div>
    `;

    // Generate HTML for each post
    if (user.posts && user.posts.length > 0) {
      for (let i = user.posts.length -1; i >=0; i--) {
        let postTitle = user.posts[i].title;
        let postText = user.posts[i].text;
        let readMoreButton = '';
        let mediaHTML = '';

        // Generate HTML for media files
        if (user.posts[i].media && user.posts[i].media.length > 0) {
          for (let j = 0; j < user.posts[i].media.length; j++) {
            let media = user.posts[i].media[j];
            if (media.type.startsWith('image')) {
              mediaHTML += `<img src="${media.url}" class="img-fluid">`;
            } else if (media.type.startsWith('video')) {
              mediaHTML += `<video src="${media.url}" controls class="img-fluid"></video>`;
            }
          }
        }

        // Only display the Delete button for posts authored by the current user
        let deleteButton = '';
        const currentUser = 'User1';
        if (username === currentUser) {
          deleteButton = `<button onclick="deletePost(${i})" class="btn btn-danger">Delete</button>`;
        }

        profileHTML += `
          <div class="card mb-3" data-post-id="${i}" data-username="${username}">
            <div class="card-body">
              <h5 class="card-title">${postTitle}</h5>
              ${mediaHTML}
              <p class="card-text">${postText}</p>
              ${readMoreButton}
              ${deleteButton}
            </div>
          </div>
        `;
      }
    } else {
      profileHTML += '<p>No posts available.</p>';
    }
  } else {
    profileHTML += '<p>User not found.</p>';
  }

  content.innerHTML = profileHTML;

  // Add click event listeners to the cards
  const cards = document.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', function(event) {
    // If the click event was triggered by clicking on a button, stop its propagation
    if (event.target.tagName === 'BUTTON') {
      event.stopPropagation();
      return;
    }
      const postId = event.currentTarget.getAttribute('data-post-id');
      const postTitle = user.posts[postId].title;
      const postText = user.posts[postId].text;
      let mediaHTML = '';

      // Generate HTML for media files
      if (user.posts[postId].media && user.posts[postId].media.length > 0) {
        for (let j = 0; j < user.posts[postId].media.length; j++) {
          let media = user.posts[postId].media[j];
          if (media.type.startsWith('image')) {
            mediaHTML += `<img src="${media.url}" class="img-fluid">`;
          } else if (media.type.startsWith('video')) {
            mediaHTML += `<video src="${media.url}" controls class="img-fluid"></video>`;
          }
        }
      }

      // Update the title and content of the modal
      document.querySelector('#cardModal .modal-title').innerHTML = postTitle;
      document.querySelector('#cardModal #post-content').innerHTML = `${mediaHTML}<p>${postText}</p>`;

      // Set the post ID on the modal
      document.querySelector('#cardModal .modal-content').setAttribute('data-post-id', postId);

      // Show the reply form
      document.getElementById('reply-form').style.display = 'block';

      // Update the display of the replies
      showReplies(postId);

       // Get the modal element
       const modalElement = document.getElementById('cardModal');

       // Create a new instance of the bootstrap Modal class
       const modal = new bootstrap.Modal(modalElement);

       // Show the modal
       modal.show();
    });
  }
}


function showPosts() {
  const content = document.getElementById('content-area');
  let postsHTML = '';

  // Get the current user's username
  const currentUser = 'User1';

  // Generate HTML for each post
  if (users.length > 0) {
    for (let i = users.length -1; i >=0; i--) {
      let username = users[i].username;
      let posts = users[i].posts;
      document.querySelector('#cardModal .modal-content').setAttribute('data-username', username);

      if (posts && posts.length > 0) {
        for (let j = posts.length -1; j >=0; j--) {
          let postTitle = posts[j].title;
          let postText = posts[j].text;
          let readMoreButton = '';
          let mediaHTML = '';

          // Generate HTML for media files
          if (posts[j].media && posts[j].media.length > 0) {
            for (let k = 0; k < posts[j].media.length; k++) {
              let media = posts[j].media[k];
              if (media.type.startsWith('image')) {
                mediaHTML += `<img src="${media.url}" class="img-fluid">`;
              } else if (media.type.startsWith('video')) {
                mediaHTML += `<video src="${media.url}" controls class="img-fluid"></video>`;
              }
            }
          }

          // Only display the Delete button for posts authored by the current user
          let deleteButton = '';
          if (username === currentUser) {
            deleteButton = `<button onclick="deletePost(${j})" class="btn btn-danger">Delete</button>`;
          }

          postsHTML += `
            <div class="card mb-3" data-post-id="${j}" data-username="${username}">
              <div class="card-body">
                <h5 class="card-title">${postTitle}</h5>
                ${mediaHTML}
                <p class="card-text">${postText}</p>
                ${readMoreButton}
                <p>Posted by: <a href="#" onclick="showProfile('${username}')">${username}</a></p>
                ${deleteButton}
              </div>
            </div>
          `;
        }
      }
    }
  } else {
    postsHTML += '<p>No posts available.</p>';
  }

  content.innerHTML = postsHTML;

  // Add click event listeners to the cards
  const cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener('click', function(event) {
    const postId = event.currentTarget.getAttribute('data-post-id');
    const username = event.currentTarget.getAttribute('data-username');
    const user = users.find(user => user.username === username);
    const postTitle = user.posts[postId].title;
    const postText = user.posts[postId].text;
    let mediaHTML = '';

    // Generate HTML for media files
    if (user.posts[postId].media && user.posts[postId].media.length > 0) {
      for (let j = 0; j < user.posts[postId].media.length; j++) {
        let media = user.posts[postId].media[j];
        if (media.type.startsWith('image')) {
          mediaHTML += `<img src="${media.url}" class="img-fluid">`;
        } else if (media.type.startsWith('video')) {
          mediaHTML += `<video src="${media.url}" controls class="img-fluid"></video>`;
        }
      }
    }

    // Update the title and content of the modal
    document.querySelector('#cardModal .modal-title').innerHTML = postTitle;
    document.querySelector('#cardModal #post-content').innerHTML = `${mediaHTML}<p>${postText}</p>`;

    // Set the post ID on the modal
    document.querySelector('#cardModal .modal-content').setAttribute('data-post-id', postId);

    // Show the reply form
    document.getElementById('reply-form').style.display = 'block';

    // Update the display of the replies
    showReplies(postId);

     // Get the modal element
     const modalElement = document.getElementById('cardModal');

     // Create a new instance of the bootstrap Modal class
     const modal = new bootstrap.Modal(modalElement);

     // Show the modal
     modal.show();
  });
}

// Get the modal element
const modalElement = document.getElementById('cardModal');

// Add an event listener for when the modal is hidden
modalElement.addEventListener('hidden.bs.modal', function (e) {
  document.getElementById('reply-form').style.display = 'none';
});
}



  // Add click event listeners to the "Read More" buttons
  const readMoreButtons = document.getElementsByClassName('read-more-button');
  for (let i = 0; i < readMoreButtons.length; i++) {
    const button = readMoreButtons[i];
    button.addEventListener('click', function(event) {
      event.stopPropagation();
      const postId = event.target.getAttribute('data-post-id');
      const postText = posts[postId];
      event.target.parentElement.innerHTML = `<p class="card-text">${postText}</p>`;
    });
  }
   
function adjustContainerSize() {
  const postContainers = document.getElementsByClassName('post-container');

  for (let i = 0; i < postContainers.length; i++) {
    const container = postContainers[i];
    const content = container.getElementsByClassName('post-content')[0];

    if (content.clientHeight > container.clientHeight) {
      container.style.height = content.clientHeight + 'px';
    }
  }
}

function closePostForm() {
  const content = document.getElementById('content-area');
  const postOverlay = document.getElementById('post-overlay');
  content.innerHTML = '';
  postOverlay.style.display = 'none';
}

function deletePost(postId) {
  // Get the current user's username
  const currentUser = 'User1';

  // Find the current user in the users array
  let userIndex = users.findIndex(user => user.username === currentUser);
  if (userIndex !== -1) {
    // Remove the post from the current user's posts
    users[userIndex].posts.splice(postId, 1);

    // Save the updated users array
    saveUsers();

    // Update the display of posts
    showPosts();
  }
}

// Add click event listener to the "Reply" button
const replyButton = document.getElementById('reply-button');
replyButton.addEventListener('click', function(event) {
  // Show the reply form
  document.getElementById('reply-form').style.display = 'block';
});

function submitReply(event) {
  console.log('submitReply called');
  event.preventDefault();

  const postAuthor = document.querySelector('#cardModal .modal-content').getAttribute('data-username');
  const postId = document.querySelector('#cardModal .modal-content').getAttribute('data-post-id');
  const parentReplyId = document.querySelector('#cardModal .modal-content').getAttribute('data-reply-id');
  const currentUser = 'User1';
  const replyTextElement = document.getElementById('reply-text');
  const replyText = replyTextElement.value;

  // Add the new reply
  addReply(postId, replyText, currentUser, parentReplyId);

  // Update the hashtag counts
  updateHashtags(replyText);

  // Update the display of trending topics
  showTrendingTopics();

  // Update the display of replies
  showReplies(postId);

  // Add notification to current user
  addNotification(postAuthor, `${currentUser} replied to your post.`);

  // Save data
  saveData();

  // Clear form input
  document.getElementById('reply-form').reset();
}

function showReplies(postId) {
  const repliesElement = document.getElementById('replies');
  
  let generateRepliesHTML = (replies, depth = 0) => {
    let repliesHTML = '';

    // Generate HTML for each reply
    if (replies && replies.length > 0) {
      repliesHTML += '<ul class="list-group">';
      for (let i = 0; i < replies.length; i++) {
        let replyText = replies[i].text;
        let replyAuthor = replies[i].author;
        let nestedRepliesHTML = generateRepliesHTML(replies[i].replies, depth + 1);
        repliesHTML += `
          <li class="list-group-item" style="margin-left: ${depth * 20}px">
            ${replyText}
            <br>
            Replied by: ${replyAuthor}
            <br>
            <button class="btn btn-primary" onclick="showReplyForm(${postId}, ${i})">Reply</button>
          </li>
          ${nestedRepliesHTML}
        `;
      }
      repliesHTML += '</ul>';
    }

    return repliesHTML;
  }

  repliesElement.innerHTML = generateRepliesHTML(replies[postId]);
}

function showReplyForm(postId, replyId = null) {
  // Set the post ID and reply ID on the modal
  document.querySelector('#cardModal .modal-content').setAttribute('data-post-id', postId);
  if (replyId !== null) {
    document.querySelector('#cardModal .modal-content').setAttribute('data-reply-id', replyId);
  } else {
    document.querySelector('#cardModal .modal-content').removeAttribute('data-reply-id');
  }

  // Show the reply form
  document.getElementById('reply-form').style.display = 'block';
}

// Define a function to add a reply
function addReply(postId, replyText, author, parentReplyId = null) {
  // Create a new reply object
  let reply = {
    text: replyText,
    author: author,
    replies: []
  };

  // If a parent reply ID is specified, add the new reply as a nested reply
  if (parentReplyId !== null) {
    let parentReply = findReplyById(postId, parentReplyId);
    if (parentReply) {
      parentReply.replies.push(reply);
    }
  } else {
    // Otherwise, add the new reply to the top level
    if (!replies[postId]) {
      replies[postId] = [];
    }
    replies[postId].push(reply);
  }

  // Save the updated replies object to local storage
  localStorage.setItem('replies', JSON.stringify(replies));

  console.log('Saved replies to local storage:', replies);
}

// Define a function to find a reply by ID
function findReplyById(postId, replyId, currentReplies = null) {
  // If no current replies are specified, start from the top level
  if (currentReplies === null) {
    currentReplies = replies[postId];
  }

  // If the current replies are not defined, return null
  if (!currentReplies) {
    return null;
  }

  // Search for the reply with the specified ID
  for (let i = 0; i < currentReplies.length; i++) {
    let reply = currentReplies[i];
    if (i === replyId) {
      return reply;
    } else if (reply.replies.length > 0) {
      let nestedReply = findReplyById(postId, replyId, reply.replies);
      if (nestedReply) {
        return nestedReply;
      }
    }
  }

  // If the reply is not found, return null
  return null;
}

function updateUserProfile(username) {

  let user = hardcodedUsers.find(user => user.username === username);
  if (user) {

    const profilePictureElement = document.getElementById('sidebar-profile-picture');
    const usernameElement = document.getElementById('sidebar-username');

    profilePictureElement.src = user.profilePictureUrl;

    usernameElement.innerHTML = user.username;
  }
}

updateUserProfile('User1');


// Add click event listener to the like button
const likeButton = document.querySelector('#cardModal .btn-primary');
likeButton.addEventListener('click', function(event) {
  // Get the current post ID from the modal
  const postId = document.querySelector('#cardModal .modal-content').getAttribute('data-post-id');

  const currentUser = 'User1';

  // Increment the like count for the current post
  if (!likes[postId]) {
    likes[postId] = 0;
  }
  likes[postId]++;

  // Update the display of the like counter
  showLikes(postId);
});

function showLikes(postId) {
  const likeCount = likes[postId] || 0;
  const likeCounterElement = document.querySelector('#cardModal .like-counter');
  likeCounterElement.innerHTML = `Likes: ${likeCount}`;
  console.log(document.getElementById('likes-count'));
  document.getElementById('likes-count').innerHTML = likesCount;
}

function updateHashtags(postText) {
  // Extract hashtags from post text
  const matches = postText.match(/#\w+/g);
  if (matches) {
    for (let i = 0; i < matches.length; i++) {
      const hashtag = matches[i];
      if (!hashtags[hashtag]) {
        hashtags[hashtag] = 0;
      }
      hashtags[hashtag]++;
    }
  }

  // Save the updated hashtags object to local storage
  localStorage.setItem('hashtags', JSON.stringify(hashtags));

  console.log('Saved hashtags to local storage:', hashtags);
}

function showTrendingTopics() {
  const trendingTopicsElement = document.getElementById('trending-topics');
  let trendingTopicsHTML = '<h4 class="mb-3">Interstellar News</h4>';

  // Sort the hashtags by count
  const sortedHashtags = Object.keys(hashtags).sort(function(a, b) {
    return hashtags[b] - hashtags[a];
  });

  // Generate HTML for each trending topic
  if (sortedHashtags.length > 0) {
    trendingTopicsHTML += '<div class="trending-topics-container">';
    for (let i = 0; i < sortedHashtags.length; i++) {
      const hashtag = sortedHashtags[i];
      const count = hashtags[hashtag];
      trendingTopicsHTML += `
        <div class="trending-topic">
          <div class="trending-topic-content">
            <div class="trending-topic-title">Trending</div>
            <span class="trending-topic-text">${hashtag}</span>
          </div>
          <div class="trending-topic-stats">
            Mentions: <sub class="hashtag-count">${count}</sub>
          </div>
        </div>
      `;
    }
    trendingTopicsHTML += '</div>';
  } else {
    trendingTopicsHTML += '<p>No trending topics.</p>';
  }

  trendingTopicsElement.innerHTML = trendingTopicsHTML;
}

document.getElementById('settings-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var buttonSize = document.getElementById('button-size').value;
  var trendingSize = document.getElementById('trending-size').value;
  var cardSize = document.getElementById('card-size').value;
  var primaryColor = document.getElementById('primary-color').value;
  var secondaryColor = document.getElementById('secondary-color').value;
  
  var root = document.documentElement;
  
  root.style.setProperty('--button-size', buttonSize + 'px');
  root.style.setProperty('--trending-size', trendingSize + 'px');
  root.style.setProperty('--card-size', cardSize + 'px');
  root.style.setProperty('--primary-color', primaryColor);
  root.style.setProperty('--secondary-color', secondaryColor);
});

// Parallax scrolling
window.addEventListener('scroll', function () {
  let parallaxSection = document.querySelector('.parallax-section');
  let scrollPosition = window.pageYOffset;
  parallaxSection.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
});

// Responsive design adjustments
window.addEventListener('resize', adjustContainerSize);
