import { createClient } from '@/utils/supabase/server';
import s from './Navbar.module.css';
import Navlinks from './Navlinks';
import SearchBar from './Searchbar';

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl px-6 mx-auto flex flex-col sm:flex-row items-center justify-between py-3 gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center mb-2 sm:mb-0">
          <span className="ml-2 font-bold text-xl text-white">TKN Supplies</span>
        </a>
        {/* Search Bar */}
        <SearchBar />
      </div>
      <div className="w-full">
        <Navlinks user={user} />
      </div>
    </nav>
  );
}