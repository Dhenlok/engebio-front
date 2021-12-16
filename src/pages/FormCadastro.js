import React, { useState } from "react";
import useForm from "../hooks/useForm";
import { cadastro } from "../services/cadastro";
import { ContainerBotao, ContainerSignUp } from "./styled";
import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const FormCadastro = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [form, onChange, clear] = useForm({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
  });

  const [hidePassword, setHidePassword] = useState(false);
  const password = document.getElementById("senha");
  const confirm_password = document.getElementById("confirm_password");

  function validatePassword() {
    if (password.value !== confirm_password.value) {
      confirm_password.setCustomValidity("Senhas diferentes!");
    } else {
      confirm_password.setCustomValidity("");
      cadastro(form, clear, setIsLoading);
    }
  }

  function showPassword() {
    setHidePassword(!hidePassword);
  }

  const handleCadastro = (ev) => {
    ev.preventDefault();
    validatePassword();
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
  };

  return (
    <ContainerSignUp onSubmit={handleCadastro}>
      <TextField
        name={"nome"}
        value={form.nome}
        variant="outlined"
        onChange={onChange}
        label="Nome"
        required
      />
        <TextField
          name={"sobrenome"}
          value={form.sobrenome}
          variant="outlined"
          onChange={onChange}
          label="Sobrenome"
          required
        />
      <TextField
        name={"email"}
        type="email"
        variant="outlined"
        value={form.email}
        onChange={onChange}
        label="E-mail"
        required
      />
      <FormControl variant="outlined" required>
        <InputLabel>Senha</InputLabel>
        <OutlinedInput
          name={"senha"}
          type={hidePassword ? "text" : "password"}
          variant="outlined"
          id="confirm_password"
          label="Senha"
          placeholder="Senha"
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={showPassword}
                edge="end"
              >
                {hidePassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="outlined" required>
        <InputLabel>Confirmar senha</InputLabel>
        <OutlinedInput
          id="senha"
          type={hidePassword ? "text" : "password"}
          value={form.senha}
          onChange={onChange}
          name={"senha"}
          variant="outlined"
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={showPassword}
                edge="end"
              >
                {hidePassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirmar senha"
          placeholder="Confirmar senha"
        />
      </FormControl>
      <ContainerBotao>
        <Button type="submit">
          {isLoading ? <CircularProgress size={24} color={"secondary"} thickness={4}/> : "Criar"}
        </Button>
      </ContainerBotao>
    </ContainerSignUp>
  );
};
  
  export default FormCadastro;