import { Sparkle } from 'phosphor-react';

import './styles.css';

interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => (
  <div className="timeline-header">
    {props.title}
    <Sparkle />
  </div>
);
