// import logo from './logo.svg';
import { theme,ThemeProvider } from "@chakra-ui/react";
import "./App.css";
import CourseEnrollment from "./components/CourseEnrollment";
// import FormikContainer from './components/FormikContainer';
import LoginForm from './components/LoginForm';
// import RegistrationForm from "./components/RegistrationForm";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <FormikContainer/> */}
      <LoginForm />
      {/* <RegistrationForm /> */}
      {/* <CourseEnrollment /> */}
    </div>
    </ThemeProvider>
  );
}

export default App;
