import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "../../../types";
import { loginValidation, passwordValidation } from "./validation";
import axios from "axios";
import "./auth-form.css";

export const AuthForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormInput>({ mode: "onChange" });

  const onsubmit: SubmitHandler<FormInput> = (data) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        data: data,
      })
      .then(({ data }) =>
        console.log("Login:", data.data.login, "Password", data.data.password)
      );

    reset();
  };

  return (
    <div className="auth-form">
      <Typography variant="h4" component="div" gutterBottom>
        Մուտք գործեք
      </Typography>

      <Typography
        variant="subtitle1"
        component="div"
        gutterBottom
        className="auth-form-subtitle"
      >
        հասանելիության համար
      </Typography>

      <form className="auth-form-form" onSubmit={handleSubmit(onsubmit)}>
        <TextField
          {...register("login", loginValidation)}
          size="small"
          label="Մուտքանուն"
          margin="normal"
          className="auth-form-input"
          fullWidth
        />
        {errors?.login && (
          <span style={{ color: "red" }}>{errors?.login.message}</span>
        )}

        <TextField
          {...register("password", passwordValidation)}
          size="small"
          type="password"
          label="Գաղտնաբառ"
          margin="normal"
          className="auth-form-input"
          fullWidth
        />
        {errors?.password && (
          <span style={{ color: "red" }}>{errors?.password.message}</span>
        )}

        <Button
          type="submit"
          variant="contained"
          disableElevation
          fullWidth
          sx={{ mt: 2 }}
          disabled={!isValid}
        >
          Մուտք
        </Button>
      </form>
    </div>
  );
};
