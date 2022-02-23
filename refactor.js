/*
  - DOM 
  - Events
  - Higher-order functions 
  - OOP
*/
// Imperative - procedural

const tweetApp = container => {
  // Load timeline
  const loadTweets = () => {
    const tweets = JSON.parse(localStorage.getItem('tweets'));
    if (!tweets) return;
    tweets.forEach(tweet => createTweet(tweet));
  };

  // Create tweet
  const createTweet = ({ id, tweet, likes }) => {
    const li = document.createElement('li');
    const tweetContainer = document.createElement('div');
    const buttonContainer = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Tweet';
    deleteButton.addEventListener('click', () => {
      deleteTweet(id);
    });
    buttonContainer.appendChild(deleteButton);
    li.setAttribute('id', id);
    tweetContainer.textContent = `${tweet} | Likes: ${likes}`;
    li.appendChild(tweetContainer);
    li.appendChild(buttonContainer);
    tweets.prepend(li);
  };

  // Store tweet
  const storeTweet = tweet => {
    const tweets = JSON.parse(localStorage.getItem('tweets'));
    tweets
      ? localStorage.setItem('tweets', JSON.stringify([...tweets, tweet]))
      : localStorage.setItem('tweets', JSON.stringify([tweet]));
  };

  // Remove tweet from storage
  const deleteTweet = id => {
    const storage = JSON.parse(localStorage.getItem('tweets'));
    localStorage.setItem('tweets', JSON.stringify(storage.filter(tweet => tweet.id !== id)));
    tweets.innerHTML = '';
    loadTweets();
  };

  // Handles form submit
  const handleTweeting = event => {
    event.preventDefault();
    const userInput = event.target.elements.tweet.value;
    if (!userInput) return alert('Your tweet cannot be empty');
    if (userInput.length >= 140) return alert('Your tweet is too long');
    const newTweet = {
      id: Date.now(),
      tweet: userInput,
      likes: 0
    };
    createTweet(newTweet);
    storeTweet(newTweet);
    event.target.reset();
  };
  // Initialize app
  const form = document.createElement('form');
  const tweets = document.createElement('ul');
  const selfTweet = document.createElement('textarea');
  selfTweet.setAttribute('name', 'tweet');
  selfTweet.setAttribute('placeholder', 'Tweet something');
  const submitTweet = document.createElement('button');
  submitTweet.textContent = 'Tweet';
  form.appendChild(selfTweet);
  form.appendChild(submitTweet);
  form.addEventListener('submit', handleTweeting);
  container.appendChild(form);
  container.appendChild(tweets);
  loadTweets();
};

const appContainer = document.querySelector('#app');
tweetApp(appContainer);
