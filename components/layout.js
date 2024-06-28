'use client'

import { Card, CardContent } from '../components/ui/card'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navigation from '../components/navigation'

const Layout = ({ children }) => {
  const router = useRouter();
  const menuItems = [
    { name: 'Home', path: '/pages/' },
    { name: 'AdaptiveWorks', path: '/pages/adaptiveworks/' },
    { name: 'NoSQL', path: '/pages/mongodb' },
    { name: 'Snowflake', path: '/pages/snowflake' },
    { name: 'Docs', path: '/docs/' },
    { name: 'About', path: '/pages/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">API Landing</h1>
          <nav className="space-x-4">
            {menuItems.map((item) => (
              <Link legacyBehavior key={item.name} href={item.path}>
                <a className="hover:underline">{item.name}</a>
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-1/5 p-4 bg-gray-100">
          <Card>
            <CardContent>
              Menu <Navigation />
            </CardContent>
          </Card>
        </aside>
        <main className="w-4/5 p-4">
         <Card>
          <CardContent>
          {children}
          </CardContent> 
         </Card>
                       
        </main>
      </div>
    </div>
  );
};

export default Layout;
