import logo from "../logo.svg";

export const Header = (): JSX.Element => {
  return (
    <header className="bg-gray-400 m-6 p-6 rounded shadow-lg">
      <img src={logo} className="App-logo mx-auto mb-3" alt="logo" />
      <h1 className="text-gray-100 text-3xl">WordWatch</h1>
    </header>
  );
};
