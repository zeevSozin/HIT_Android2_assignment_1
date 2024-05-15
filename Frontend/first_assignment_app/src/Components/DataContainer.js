import "./DataContainer.css";
import DataSpan from "./DataSpan";

function DataContainer({ data }) {
  // console.log(data);

  return (
    <div>
      {data.map((song) => (
        <DataSpan key={song._id} song={song} />
      ))}
    </div>
  );
}

export default DataContainer;
