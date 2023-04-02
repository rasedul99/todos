import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions";

export default function Footer() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const todoRemaining = todos.filter((todo) => !todo.completed);
  const numberOfTodos = (no_of_todos) => {
    switch (no_of_todos) {
      case 0:
        return "No Task Left";
      case 1:
        return "1 Task left";
      default:
        return `${no_of_todos} tasks left `;
    }
  };
  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };
  const handleColorChanged = (color) => {
    if (filters?.colors.includes(color)) {
      dispatch(colorChanged(color, "removed"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todoRemaining.length)} </p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${
            filters?.status === "ALL" && "font-bold"
          } `}
          onClick={() => handleStatusChange("ALL")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filters?.status === "Incomplete" && "font-bold"
          } `}
          onClick={() => handleStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filters?.status === "Complete" && "font-bold"
          } `}
          onClick={() => handleStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChanged("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filters.colors.includes("green") && "bg-green-500"
          } `}
        ></li>
        <li
          onClick={() => handleColorChanged("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer  ${
            filters.colors.includes("red") && "bg-red-500"
          } `}
        ></li>
        <li
          onClick={() => handleColorChanged("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filters.colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
}
