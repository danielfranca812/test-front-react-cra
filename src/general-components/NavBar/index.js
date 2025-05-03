import { Buttons } from "../Button";
import { Flex } from "../Flex";
import "./index.css";

export function Navbar() {
  const token = localStorage.getItem("token");
  console.log("Token:", token);

  return (
    <nav>
      {token && (
        <>
          <a href="/users">Users</a>
        </>
      )}
      <Flex justify="flex-end">
        {token === null ? (
          <>
            <Buttons
              className="secondary"
              children={"SignUp"}
              onClick={() => {
                window.location.href = "/signup";
              }}
            />
            <Buttons
              className="secondary"
              children={"SignIn"}
              onClick={() => {
                window.location.href = "/signin";
              }}
            />
          </>
        ) : (
          <Buttons
            className="secondary"
            children={"Sair"}
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("userAuth");
              window.location.href = "/";
            }}
          />
        )}
      </Flex>
    </nav>
  );
}
