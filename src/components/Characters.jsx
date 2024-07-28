import React, { useState } from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

export default function Characters() {
  const [filters, setFilters] = useState({
    status: "",
    gender: "",
    name: "",
    species: "",
    type: "",
  });
  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      <CharacterList filters={filters} />
    </div>
  );
}
