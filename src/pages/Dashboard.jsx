import TaskManager from '../components/TaskManager';
import NotesWidget from '../components/NotesWidget';

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-start pt-[60px] text-[#4b193c] dark:text-white font-['Orbitron'] text-center min-h-screen px-4 pb-12">
      <h2 className="text-5xl md:text-[80px] font-['Black_Ops_One'] my-[10px] text-[#632753] dark:text-white">
        Dashboard
      </h2>
      <p className="text-lg md:text-[1.5rem] mb-[40px]">
        Welcome to your workspace.
      </p>

      <div id="dashboard-container" className="flex flex-wrap gap-[40px] justify-center max-w-[1200px] w-full mx-auto">
        <TaskManager />
        <NotesWidget />
      </div>
    </div>
  );
}