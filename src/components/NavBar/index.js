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
      <div
        style={{ right: 8, position: "absolute", display: "flex", gap: "12px" }}
      >
        {token === null ? (
          <>
            <button
              className="btn"
              onClick={() => {
                window.location.href = "/signup";
              }}
            >
              SignUp
            </button>
            <button
              className="btn"
              onClick={() => {
                window.location.href = "/signin";
              }}
            >
              SignIn
            </button>
          </>
        ) : (
          <button
            className="btn"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("userAuth");
              window.location.href = "/";
            }}
          >
            Sair
          </button>
        )}
      </div>
    </nav>
  );
}
