import { Button } from "../Button";
import { Flex } from "../Flex";
import "./index.css";

export function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav>
      <Flex>
        {token === null ? (
          <>
            <Button
              variant="secondary"
              children={"SignUp"}
              onClick={() => {
                window.location.href = "/signup";
              }}
            />
            <Button
              variant="secondary"
              children={"SignIn"}
              onClick={() => {
                window.location.href = "/signin";
              }}
            />
          </>
        ) : (
          <Button
            variant="secondary"
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
