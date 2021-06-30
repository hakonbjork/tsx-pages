interface Props {
  loggedIn: boolean;
  logOut: () => void;
}

const HomePage = (props: Props) => {
  const logOut = () => {
    props.logOut();
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Hello from Home page</h2>
      <br />
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default HomePage;
