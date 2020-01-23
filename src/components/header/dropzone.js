import React, { useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UserContext } from "../context/userContext";
import { useToasts } from "react-toast-notifications";
import { useMutation } from "@apollo/react-hooks";
import { updateProfilePicture as UPDATE_PROFILE_PICTURE } from "../graphql/mutations/createUser";
import { Loading } from "../components/loading";
import { deleteFile as DELETE_FILE } from "../graphql/mutations/file";

function MyDropzone() {
  const {
    User: { id, image }
  } = useContext(UserContext);
  const { addToast } = useToasts();
  const [loadingFile, setLoadingFile] = useState(false);
  const [updateProfilePicture, { loading }] = useMutation(
    UPDATE_PROFILE_PICTURE
  );
  const [deleteFile] = useMutation(DELETE_FILE);

  const onDrop = acceptedFiles => {
    let data = new FormData();
    data.append("data", acceptedFiles[0]);

    setLoadingFile(true);

    fetch("https://api.graph.cool/file/v1/ck58mgjbq1yao0166giunsxhu", {
      method: "POST",
      body: data
    })
      .then(response => {
        return response.json();
      })
      .then(({ url }) => {
        if (url) {
          addToast("Imagem atualizada com sucesso", { appearance: "success" });
          updateProfilePicture({
            variables: {
              id,
              image: url
            }
          });

          const idImageToRemove = image ? image.split("/").pop() : false;

          if (idImageToRemove) {
            deleteFile({
              variables: {
                id: idImageToRemove
              }
            }).then(res => {
              console.log(`imagem removida com sucesso => `, res);
            });
          }
        }
      })
      .catch(file => {
        return addToast("Ops! não foi possível trocar a imagem", {
          appearance: "error"
        });
      })
      .finally(() => {
        setLoadingFile(false);
      });
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      {loading || loadingFile ? (
        <Loading width={25} height={25} />
      ) : (
        <div className="input-image">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Arraste e solte a imagem aqui </p>
          ) : (
            <p className="photo-select">Selecionar foto</p>
          )}
        </div>
      )}
    </div>
  );
}

export default MyDropzone;
