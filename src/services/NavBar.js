export function Navbar() {
  const token = localStorage.getItem("token");
  console.log("Token:", token);

  return (
    <nav
      style={{
        display: "flex",
        padding: "12px",
        color: "white",
        alignItems: "center",
        backgroundColor: "#1a1f25",
        justifyContent: "center",
        gap: "12px",
        position: "relative",
      }}
    >
      <a href="/">Home</a>
      <a href="/users">Users</a>
      {!token && <a href="/login">SignIn</a>}
      <div
        style={{ right: 8, position: "absolute", display: "flex", gap: "12px" }}
      >
        {token === null ? (
          <button
            style={{
              backgroundColor: "#3498db",
              color: "white",
              padding: "5px 10px",
              marginRight: "5px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100px",
            }}
          >
            SignUp
          </button>
        ) : (
          <button
            style={{
              backgroundColor: "#e74c3c",
              color: "white",
              padding: "5px 10px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100px",
            }}
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("userAuth");
              window.location.href = "/login";
            }}
          >
            Sair
          </button>
        )}
      </div>
    </nav>
  );
}
