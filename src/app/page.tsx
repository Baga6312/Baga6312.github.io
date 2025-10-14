// pages/index.tsx
import Hello from "./components/Hello";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Hello />
      <About></About>
      <Technologies></Technologies>
      <Experiences></Experiences>  
    </>
  );
}
