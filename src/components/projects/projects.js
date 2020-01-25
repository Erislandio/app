import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { CreateProject } from "./createProject";
import { Title } from "../components/titlePage";
import { useQuery } from "react-apollo";
import { getProjectByUserId } from "../graphql/mutations/projects";
import { MdDelete } from "react-icons/md";

let webSocket = new WebSocket(
  "wss://subscriptions.us-west-2.graph.cool/v1/ck58mgjbq1yao0166giunsxhu"
);

webSocket.onmessage = event => {
  const data = JSON.parse(event.data);

  switch (data.type) {
    case "init_success": {
      console.log("init_success, the handshake is complete");
      break;
    }
    case "init_fail": {
      throw {
        message: "init_fail returned from WebSocket server",
        data
      };
    }
    case "subscription_data": {
      console.log("subscription data has been received", data);
      break;
    }
    case "subscription_success": {
      console.log("subscription_success");
      break;
    }
    case "subscription_fail": {
      throw {
        message: "subscription_fail returned from WebSocket server",
        data
      };
    }
  }
};

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
        <CreateProject id={id} setFetch={setFetch} fetch={fetch} />
      </main>
      <section className="list">
        <Title text="Projetos" />
        <div>
          {loading ? (
            "..."
          ) : (
            <ul className="item-list">
              {data &&
                data.allProjects.map(project => {
                  return (
                    <li key={project.id}>
                      <span>{project.name}</span>
                      <span>{project.description}</span>
                      <span className="remove">
                        <MdDelete color="#333" />
                      </span>
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
