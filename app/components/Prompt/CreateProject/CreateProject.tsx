import { KeyboardEvent, useState } from "react";
import "./CreateProject.css";
import TagList from "../../App/TagList/TagList";
import Loading from "../../Loading/Loading";
import { ProjectMutationType } from "../../Dashboard/Dashboard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCurrentProject } from "@/app/utils/currentProjectProvider";

export default function CreateProject({
  onSubmit,
  closeDialog,
}: {
  closeDialog: Function;
  onSubmit: (variables: ProjectMutationType) => void;
}) {
  const [name, setName] = useState("");
  const currProj = useCurrentProject()!;

  function func(tags: string[]) {
    console.log("Submitting");
    onSubmit({
      name: name,
      tags: tags,
    } as ProjectMutationType);

    closeDialog();
  }

  const handleKey = (e: KeyboardEvent<HTMLFormElement>) => {
    switch (e.key) {
      case "Escape":
        closeDialog();
      case "Enter":
        (() => {})();
      default:
        (() => {})();
    }
  };

  console.log("CreateProj", currProj);
  const availableTags: string[] = [];
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <form onKeyDown={(e) => handleKey(e)} id="create-project">
      <div>
        <label htmlFor="inp">Project Name</label>
        <input
          id="inp"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          name="inp"
          autoFocus
        />

        <span>Tags </span>
        {!availableTags ? (
          <Loading />
        ) : (
          <TagList
            availableTags={availableTags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        )}
      </div>
      <button onClick={() => func(selectedTags)} type="button">
        Submit
      </button>
    </form>
  );
}
