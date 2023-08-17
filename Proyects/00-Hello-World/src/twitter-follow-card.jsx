export function TwitterFollowCard({ userName, children, itsFollowing }) {
  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          className="tw-follow-card-avatar"
          src={`https://unavatar.io/twitter/${userName}`}
          alt="Avatar FC Barcelona"
        />
        <div className="tw-follow-card-info">
          <strong>{children}</strong>
          <span className="tw-follow-card-infoUserName">{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-follow-card-button">Seguir</button>
      </aside>
    </article>
  );
}
