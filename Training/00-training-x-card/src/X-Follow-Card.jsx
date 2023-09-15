import { useState } from 'react';

export function XFollowCard({ username, children, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing
    ? 'x-follow-card-button is-following'
    : 'x-follow-card-button';

  return (
    <article className='x-follow-card'>
      <header className='x-follow-card-header'>
        <img
          className='x-follow-card-avatar'
          src={`https://unavatar.io/twitter/${username}`}
          alt='Avatar del usuario'
        />
        <div className='x-follow-card-info'>
          <strong>{children}</strong>
          <span className='x-follow-card-infoUserName'>@{username}</span>
        </div>
      </header>

      <aside>
        <button
          className={buttonClassName}
          onClick={() => {
            setIsFollowing(!isFollowing);
          }}>
          <span className='x-follow-card-follow'>{text}</span>
          <span className='x-follow-card-unFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
