// components/Layout.js
import { Card, CardContent } from '../../components/ui/card'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-grey p-4">
        <h1 className="text-2xl">My Header</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-1/5 p-4 bg-green-100">
          <Card>
            <CardContent>
              <nav>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="about">About</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </nav>
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
