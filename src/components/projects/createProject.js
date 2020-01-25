import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  createProject,
  getProjectByUserId
} from "../../components/graphql/mutations/projects";
import { DefaultForm } from "../components/defaultForm";
import { DefaultInput } from "../components/defaultInput";
import { DefaultButton } from "../components/defaultButton";
import { Title } from "../components/titlePage";
import { useToasts } from "react-toast-notifications";
import { useQuery } from "@apollo/react-hooks";

export const CreateProject = ({ id, setFetch, fetch }) => {
  const INITIAL_STATE_PROJECT = {
    name: "",
    description: "",
    userId: [id]
  };

  const [project, setProject] = useState(INITIAL_STATE_PROJECT);
  const [create, { loading }] = useMutation(createProject);
  const { addToast } = useToasts();

  const handleChange = e => {
    const {
      target: { value, name }
    } = e;

    setProject({
      ...project,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    create({
      variables: {
        ...project
      }
    })
      .then(res => {
        addToast(`Projeto: ${project.name} foi criado com sucesso!`, {
          appearance: "success",
          autoDismissTimeout: 4000
        });
        setProject(INITIAL_STATE_PROJECT);
      })
      .catch(err => {
        addToast(
          `Projeto: ${project.name} não pode ser criado, tente novamente`,
          {
            appearance: "error",
            autoDismissTimeout: 4000
          }
        );
      })
      .finally(() => {
        setFetch(!fetch);
      });
  };

  const { data, error } = useQuery(getProjectByUserId, {
    variables: {
      id,
      key: Math.random()
    },
    ssr: true
  });

  console.log(data);

  return (
    <div className="" id="create-project">
      <Title text="Criar novo projeto" />
      <DefaultForm id="project-form" onSubmit={handleSubmit}>
        <DefaultInput
          required
          name="name"
          label="Nome do projeto"
          type="text"
          id="project-name"
          placeholder="Nome"
          onChange={handleChange}
          value={project.name}
        />
        <DefaultInput
          value={project.description}
          name="description"
          label="Descrição"
          type="fieldset"
          id="project-description"
          placeholder="Descrição"
          onChange={handleChange}
        />
        <DefaultButton id="" loading={loading} disabled={loading}>
          Criar
        </DefaultButton>
      </DefaultForm>
    </div>
  );
};
