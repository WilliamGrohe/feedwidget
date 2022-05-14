import { Widget } from "./components/Widget";

export function App() {
 return (
 <>
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="flex justify-center text-9xl font-bold text-zinc-200">FeedWid</h1>
    <span className="text-4xl">Feedback widget</span>
  </div>
  <Widget />
 </>
 )
}
