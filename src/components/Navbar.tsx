import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <div className="text-2xl font-bold">Vinted IA</div>
      <ul className="flex space-x-4">
        <li><Link href="/" className="hover:text-yellow-300">Accueil</Link></li>
        <li><Link href="/pricing" className="hover:text-yellow-300">Tarifs</Link></li>
        <li><Link href="/create" className="hover:text-yellow-300">Créer</Link></li>
        <li><Link href="/profile" className="hover:text-yellow-300">Profil</Link></li>
      </ul>
    </nav>
  );
}
