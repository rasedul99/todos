import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../images/double-tick.png";
import noteImage from "../images/notes.png";
import plus from "../images/plus.png";
import { added, allcompleted, clearcompleted } from "../redux/todos/actions";

export default function Header() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };
  const handleAllTask = () => {
    dispatch(allcompleted());
  };
  const handleClearTask = () => {
    dispatch(clearcompleted());
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          value={input}
          onChange={handleInput}
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button type="submit" className="appearance-none w-8 h-8 rounded-full">
          <img src={plus} />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span onClick={handleAllTask}>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearTask}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}
