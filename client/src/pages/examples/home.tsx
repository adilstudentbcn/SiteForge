import Home from '../home';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function HomeExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Home />
    </ThemeProvider>
  );
}
