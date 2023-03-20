import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import twitterLogo from '../../assets/logo-twitter.svg';

import './styles.css';

type NavLinkType = {
  label: string;
  icon: JSX.Element;
};

const navLinks: NavLinkType[] = [
  { label: 'Explore', icon: <Hash /> },
  { label: 'Notification', icon: <Bell /> },
  { label: 'Messages', icon: <Envelope /> },
  { label: 'Bookmarks', icon: <BookmarkSimple /> },
  { label: 'List', icon: <FileText /> },
  { label: 'Profile', icon: <User /> },
  { label: 'More', icon: <DotsThreeCircle /> },
];

export const Sidebar = () => (
  <aside className="sidebar">
    <img className="logo" src={twitterLogo} alt="Logo" />

    <nav className="main-navigation">
      <NavLink to="/">
        <House weight="fill" />
        <span>Home</span>
      </NavLink>

      {navLinks.map((item) => (
        <a href="" key={item.label}>
          {item.icon}
          <span>{item.label}</span>
        </a>
      ))}
    </nav>

    <button className="new-tweet" type="button">
      <Pencil />
      <span>Tweet</span>
    </button>
  </aside>
);
