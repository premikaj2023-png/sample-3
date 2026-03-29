import { FeatureShell } from "../../shell/src/components/FeatureShell";
import { Challenge } from "../../../shared/schema";

// Mock data using the shared contract
const currentTask: Challenge = {
  id: "1",
  title: "Array Sum",
  description: "Write a function to sum an array.",
  initialCode: "function sum(arr) { }",
  language: "javascript",
  difficulty: "Beginner"
};

export default function App() {
  return (
    <FeatureShell featureName="Algorithm Practice" aiStatus="idle">
      <div className="max-w-3xl">
        <h1 className="text-2xl mb-4">{currentTask.title}</h1>
        <p className="text-gray-400 mb-6">{currentTask.description}</p>
        
        {/* Friend builds their AI code editor here */}
        <div className="bg-black p-4 rounded-md border border-gray-700 h-64">
          <code>{currentTask.initialCode}</code>
        </div>
      </div>
    </FeatureShell>
  );
}