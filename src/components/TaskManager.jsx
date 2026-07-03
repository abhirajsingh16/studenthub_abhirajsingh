import { useState, useEffect } from 'react';

export default function TaskManager() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("studentTasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    localStorage.setItem("studentTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const text = taskInput.trim();
    if (!text) return;
    setTasks([...tasks, { id: Date.now(), text: text, done: false }]);
    setTaskInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="bg-white dark:bg-[#4b193c] border-[3px] border-[#632753] dark:border-white rounded-[15px] p-[25px] w-full md:w-[350px] shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
      <h3 className="text-[#632753] dark:text-white font-['Black_Ops_One'] mt-0 text-[1.8rem]">
        Task Manager
      </h3>
      <div className="flex gap-[10px] mb-[20px] items-center">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Add a new task..."
          className="flex-1 min-w-0 p-[10px] border-2 border-[#e1cddc] rounded-lg font-['Orbitron'] text-base outline-none dark:text-black"
        />
        <button
          onClick={addTask}
          className="bg-[#632753] text-white border-none py-[10px] px-[15px] rounded-lg cursor-pointer font-['Black_Ops_One'] active:scale-95 transition-transform flex-shrink-0"
        >
          ADD
        </button>
      </div>
      <ul id="taskList" className="list-none p-0 m-0 text-left">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-[12px] bg-[#f5ebf2] dark:bg-[#632753] dark:text-white mb-[10px] rounded-lg text-[1.1rem] transition-opacity ${task.done ? "opacity-60" : "opacity-100"}`}
          >
            <span 
              onClick={() => toggleTask(task.id)}
              className="task-text flex-1 cursor-pointer"
            >
              {task.text}
            </span>
            <span className={`w-[25px] text-[#2ecc71] font-bold font-sans text-center ${task.done ? "visible" : "invisible"}`}>✓</span>
            <button
              onClick={() => deleteTask(task.id)}
              className="delete bg-[#e74c3c] text-white border-none rounded-[5px] py-[5px] px-[10px] cursor-pointer font-['Orbitron'] text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}