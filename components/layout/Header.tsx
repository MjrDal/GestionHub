import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { User } from "./User";

export const Header = async () => {
  return (
    <header className="p-5 w-full flex flex-row justify-between">
      <Logo />
      <Menu />
      <User />
    </header>
  );
};
