import "./App.css";
import { TwitterFollowCard } from "./twitter-follow-card";

export function App() {
  const users = [
    {
      userName: "FCBarcelona",
      name: "FC Barcelona",
      isFollowing: true,
    },
    {
      userName: "ManCityES",
      name: "Manchester City",
      isFollowing: false,
    },
    {
      userName: "BVB",
      name: "Borussia Dortmund",
      isFollowing: true,
    },
    {
      userName: "BocaJrsOficial",
      name: "Boca Juniors",
      isFollowing: false,
    },
    {
      userName: "ChampionsLeague",
      name: "Champions League",
      isFollowing: true,
    },
  ];
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
