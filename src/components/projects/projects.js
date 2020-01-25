import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { CreateProject } from "./createProject";
import { Title } from "../components/titlePage";
import { useQuery } from "react-apollo";
import { getProjectByUserId } from "../graphql/mutations/projects";

export const Projects = () => {
  const [fetch, setFetch] = useState(false);

  const {
    User: { id, projects }
  } = useContext(UserContext);

  const { loading, data, error } = useQuery(getProjectByUserId, {
    variables: {
      id
    }
  });


  return (
    <div id="projects">
      <main>
        <CreateProject id={id} setFetch={setFetch} fetch={fetch}/>
      </main>
      <section className="list">
        <Title text="Projetos" />
        <div>
          {loading ? (
            "..."
          ) : (
            <ul className="item-list">
              {projects &&
                projects.map(project => {
                  return (
                    <li key={project.id}>
                      <span>{project.name}</span>
                      <span>{project.description}</span>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};
