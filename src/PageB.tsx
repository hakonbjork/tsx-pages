import { Link } from "react-router-dom";

const PageB = () => (
  <div>
    <h2>Hello from page B</h2>
    <br />
    <Link to="/">Navigate to Page A</Link>
  </div>
);

export default PageB;
