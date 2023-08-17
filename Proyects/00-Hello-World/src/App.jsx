import "./App.css";
import { TwitterFollowCard } from "./twitter-follow-card";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard itsFollowing userName="FCBarcelona">
        FC Barcelona
      </TwitterFollowCard>
      ;
      <TwitterFollowCard itsFollowing={false} userName="ManCityES">
        Manchester City
      </TwitterFollowCard>
      ;
      <TwitterFollowCard itsFollowing userName="BVB">
        Borussia Dortmund
      </TwitterFollowCard>
      ;
      <TwitterFollowCard itsFollowing userName="BocaJrsOficial">
        Boca Juniors
      </TwitterFollowCard>
      ;
    </section>
  );
}
