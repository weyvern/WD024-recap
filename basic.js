/*
  - DOM 
  - Events
  - Higher-order functions
  - OOP
*/
// Imperative - procedural
const appContainer = document.querySelector('#app');
const form = document.createElement('form');
const selfTweet = document.createElement('textarea');
selfTweet.setAttribute('name', 'tweet');
selfTweet.setAttribute('placeholder', 'Tweet something');
const submitTweet = document.createElement('button');
submitTweet.textContent = 'Tweet';
form.appendChild(selfTweet);
form.appendChild(submitTweet);
form.addEventListener('submit', event => {
  event.preventDefault();
  const newTweet = event.target.elements.tweet.value;
  if (!newTweet) return alert('Your tweet cannot be empty');
  if (newTweet.length >= 140) return alert('Your tweet is too long');
  const li = document.createElement('li');
  li.textContent = event.target.elements.tweet.value;
  tweets.appendChild(li);
  event.target.reset();
});

appContainer.appendChild(form);
const tweets = document.createElement('ul');
appContainer.appendChild(tweets);
