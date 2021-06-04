import { Button } from './styles';

export default function ButtonMain({ children, action }) {
  return <Button onClick={action}>{children}</Button>;
}
