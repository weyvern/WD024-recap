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
    const tweets = localStorage.getItem('tweets');
    if (!tweets) return;
    JSON.parse(tweets).forEach(tweet => createTweet(tweet));
  };

  // Create tweet
  const createTweet = tweet => {
    const li = document.createElement('li');
    li.textContent = tweet;
    tweets.appendChild(li);
  };

  // Handles form submit
  const handleTweeting = event => {
    event.preventDefault();
    const newTweet = event.target.elements.tweet.value;
    if (!newTweet) return alert('Your tweet cannot be empty');
    if (newTweet.length >= 140) return alert('Your tweet is too long');
    createTweet(newTweet);
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
