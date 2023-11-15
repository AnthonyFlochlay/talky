import "./styles.css";
import { Container } from "@mui/system";
import ContactByAdress from "./components/ContactByAddress";

export default function App() {
  // const [address, setAddress] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Talky</h1>
      </header>
      <Container>
        <ContactByAdress />
      </Container>
    </div>
  );
}
