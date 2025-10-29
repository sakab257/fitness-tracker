export default function GridMobile() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div className="h-[300px] md:col-span-1 bg-red-400">1</div>
      <div className="h-[300px] md:col-2 bg-green-400">2</div>
      <div className="h-[300px] md:col-span-1 bg-yellow-400">3</div>
      <div className="h-[300px] md:col-2 bg-blue-400">4</div>
      <div className="h-[300px] md:col-span-1 bg-purple-400">5</div>
      <div className="h-[300px] md:col-2 bg-orange-400">6</div>
      <div className="h-[200px] md:col-span-2 bg-pink-400">7</div>
    </div>
  )
}
