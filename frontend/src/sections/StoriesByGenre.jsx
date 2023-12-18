import StoryCard from "../components/StoryCard";

const filter = [
  { genre: "Thriller" },
  { genre: "Drama" },
  { genre: "Sci-fi" },
  { genre: "Romance" },
];

const StoriesByGenre = () => {
  return (
    <div className="p-5 lg:p-10 lg:pl-40">
      <h3 className="lg:text-3xl text-xl font-bold flex justify-center lg:justify-start items-center lg:block">
        Recent Stories By Genre
      </h3>
      <div className="p-4 flex justify-center lg:justify-start">
        <ul className="flex flex-wrap items-center gap-5">
          {filter.map((item) => (
            <li key={item.genre}>
              <div className="flex gap-1">
                <p>{item.genre}</p>
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="myCheckboxName"
                  value="myCheckboxValue" 
                ></input>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:p-5 p-2 flex gap-4 flex-wrap justify-center items-center lg:justify-normal">
        {Array.from({ length: 5 }).map(() => (
          <StoryCard key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default StoriesByGenre;
