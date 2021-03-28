import Loader from "react-loader-spinner";
import { Container } from './styles';

export const LoaderSpinner = () => {
  return (
    <Container>
      <Loader
        type="Oval"
        color="#57B952"
        height={100}
        width={100}
      />
    </Container>
  )
}
