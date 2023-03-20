import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';

import './styles.css';

interface TweetProps {
  content: string;
}

export const Tweet = (props: TweetProps) => (
  <Link to="/status" className="tweet">
    <img src="https://github.com/davi1985.png" alt="Davi Silva" />

    <div className="tweet-content">
      <div className="tweet-content-header">
        <strong>Davi Silva</strong>
        <span>@davi1985</span>
      </div>

      <p>{props.content}</p>

      <div className="tweet-content-footer">
        <button type="button">
          <ChatCircle />
          20
        </button>

        <button type="button">
          <ArrowsClockwise />
          20
        </button>

        <button type="button">
          <Heart />
          20
        </button>
      </div>
    </div>
  </Link>
);
