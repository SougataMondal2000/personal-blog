import StoryCard from "../components/StoryCard";

const TopPicks = () => {
  return (
    <div className="p-5 lg:p-10 lg:pl-40">
      <h3 className="lg:text-3xl text-xl font-bold flex justify-center lg:justify-start items-center">
        Top Picks
      </h3>
      <div className="lg:p-5 p-2 flex gap-4 flex-wrap justify-center items-center lg:justify-normal">
        {Array.from({ length: 10 }).map(() => (
          <StoryCard key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
