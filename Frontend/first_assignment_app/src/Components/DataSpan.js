import "./DataSpan.css";

export default function DataSpan({ song }) {
  return (
    <div className="Container">
      <span className="card">
        <div>
          <h3>User</h3>
          <h3>{song.uNm}</h3>
        </div>
        <div>
          <h3>Song name</h3>
          <h2>{song.name}</h2>
        </div>
        <img src={song.img} className="icon" width="120" />
      </span>
    </div>
  );
}
