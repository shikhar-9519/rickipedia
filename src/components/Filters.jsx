import React from "react";
import Dropdown from "./Dropdown";
import { GENDER_OPTIONS, STATUS_OPTIONS } from "../utils/constants";
import TextInput from "./TextInput";

export default function Filters({ filters, setFilters }) {
  const handleFilterChange = (id, value) => {
    setFilters((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="flex-center-center">
      <Dropdown
        options={STATUS_OPTIONS}
        heading={"Status"}
        onChange={handleFilterChange}
        id={"status"}
      />
      <Dropdown
        options={GENDER_OPTIONS}
        heading={"Gender"}
        onChange={handleFilterChange}
        id={"gender"}
      />
      <TextInput heading={"Name"} onChange={handleFilterChange} id={"name"} />
      <TextInput
        heading={"Species"}
        onChange={handleFilterChange}
        id={"species"}
      />
      <TextInput heading={"Type"} onChange={handleFilterChange} id={"type"} />
    </div>
  );
}
