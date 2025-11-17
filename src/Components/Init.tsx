import { TabsContent, TabsList, TabsTrigger, Tabs } from "./ui/tabs";
import "../App.css";
import Intro from "./subcomp/Intro";
import Tester from "./Tester";
import { Toaster } from "sonner";

function Init() {
  return (
    <div className="bg-zinc-900 w-screen min-h-screen text-white flex flex-col items-center">
      <Toaster theme="dark" />
      <Tabs
        defaultValue="home"
        className="w-full h-full flex flex-col items-center py-4"
      >
        <TabsList className="bg-zinc-700 rounded-2xl pt-[2px] pb-[3.5px]">
          <TabsTrigger
            className="data-[state=active]:bg-indigo-700/70 py-1 cursor-pointer bg-zinc-700 text-white w-32"
            value="home"
          >
            Home
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-indigo-700/70 py-1 cursor-pointer bg-zinc-700 text-white w-32"
            value="test"
          >
            Test
          </TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <Intro />
        </TabsContent>
        <TabsContent value="test">
          <Tester />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Init;
