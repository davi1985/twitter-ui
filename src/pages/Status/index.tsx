import { PaperPlaneRight } from 'phosphor-react';
import { FormEvent, KeyboardEvent, useState } from 'react';
import { Header } from '../../components/Header';
import { Separator } from '../../components/Separator';
import { Tweet } from '../../components/Tweet';

import './styles.css';

export const Status = () => {
  const [newAnswer, setNewAnswer] = useState<string>('');

  const [answers, setAnswers] = useState<string[]>([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.',
  ]);

  const createNewAnswer = (event: FormEvent) => {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer('');
  };

  const handleHotkeySubmit = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer('');
    }
  };

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ducimus itaque, inventore non quibusdam voluptates deleniti explicabo eaque sit dolorem vitae error eligendi dignissimos ipsum eum officiis. Harum, labore pariatur." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/davi1985.png" alt="Davi Silva" />

          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  );
};
