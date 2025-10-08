import Header from '../Header';

export default function HeaderExample() {
  const handleThemeToggle = () => {
    console.log('Theme toggle clicked');
  };

  return <Header onThemeToggle={handleThemeToggle} />;
}
