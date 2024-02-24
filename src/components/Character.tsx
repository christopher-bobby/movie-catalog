import React, { useEffect, useState } from "react";
import { CharacterTypes } from "../interfaces/types";


const Character = ({ characterUrl }: { characterUrl: string }) => {
  const [character, setCharacter] = useState<CharacterTypes>({});
  const fetchDetailCharacter = async () => {
    let results = await fetch(characterUrl);
    const data = await results.json();
    setCharacter(data);
  };

  useEffect(() => {
    fetchDetailCharacter();
  }, []);

  return (
    <div className="inline-block pr-4 pb-4">
      <div className="character-card flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWz133RcyUQgBxaiSkJ1jGqUAnIVWLamn0ifAk9Y3GFQ7hM19hwMr8FVdOPpnFYuVmLVo&usqp=CAU"
          className="h-[50px] w-[50px] rounded-full border border-gray-100 shadow-sm"
        />
        <div className="flex flex-col ml-2">
          <p className="text-sm whitespace-nowrap">{character?.name}</p>
          <p>{character?.gender === "male" ? "Actor" : "Actress"}</p>
        </div>
      </div>
    </div>

  );
};

export default Character;
