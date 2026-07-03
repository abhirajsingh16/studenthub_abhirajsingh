export default function About() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center p-[20px] text-center">
      <h2 className="text-[#632753] dark:text-white text-[2.5rem] md:text-[4rem] font-['Black_Ops_One'] mb-[20px]">
        ABOUT US
      </h2>
      <p className="text-[#4b193c] dark:text-[#e1cddc] text-lg md:text-[1.2rem] max-w-[800px] leading-[1.6] font-['Orbitron']">
        Welcome to Student Hub, your ultimate companion for organizing tasks, notes, and events. 
        Built by Abhiraj Singh as part of the ISTE Summer School WebDev Domain.
      </p>
    </div>
  );
}