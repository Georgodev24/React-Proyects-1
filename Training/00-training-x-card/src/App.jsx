import { XFollowCard } from './X-Follow-Card';
import './App.css';

const xFavUsers = [
  {
    username: 'MisterCruyff14',
    name: 'MísterCruyff14⚜(Ricard Sanmartín)',
    isFollowing: true,
  },
  {
    username: 'GallineroBlau',
    name: '𝐄𝐥 𝐆𝐚𝐥𝐥𝐢𝐧𝐞𝐫𝐨',
    isFollowing: true,
  },
  {
    username: 'RevenKZ',
    name: 'Reven',
    isFollowing: false,
  },
  {
    username: 'Admi_FCB',
    name: 'M',
    isFollowing: true,
  },
];

export default function App() {
  return (
    <section className='App'>
      {xFavUsers.map(({ username, name, isFollowing }) => (
        <XFollowCard
          username={username}
          initialIsFollowing={isFollowing}
          key={username}>
          {name}
        </XFollowCard>
      ))}
    </section>
  );
}
