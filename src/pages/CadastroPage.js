import React from "react";
import FormCadastro from "./FormCadastro";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContainerForm } from "./styled"

const CadastroPage = () => {
  return (
    <ContainerForm>
      <FormCadastro />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ContainerForm>
  );
};

export default CadastroPage;
