import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();
  return (
    <div
      // style={{ background: "black" }}
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover: cursor-pointer"
      onClick={() => {
        navigate("/tasks/" + task.id);
      }}
    >
      <h1 className="fonr-bold uppercase">{task.title}</h1>
      <p className="text-slate-400">{task.description}</p>
      {/* <hr /> */}
    </div>
  );
}
