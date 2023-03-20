import { FormEvent, KeyboardEvent, useState } from 'react';
import { Header } from '../../components/Header';
import { Separator } from '../../components/Separator';
import { Tweet } from '../../components/Tweet';

import './styles.css';

export const Timeline = () => {
  const [newTweet, setNewTweet] = useState<string>('');

  const [tweets, setTweets] = useState<string[]>([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!',
  ]);

  const createNewTweet = (event: FormEvent) => {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet('');
  };

  const handleHotkeySubmit = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet('');
    }
  };

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/davi1985" alt="Davi Silva" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  );
};
