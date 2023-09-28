import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <nav className="flex items-center h-16 w-full bg-blue-400">
        <div className="pt-2 pb-2 ml-6">
            <Link href="/" className="text-xl font-bold no-underline whitespace-nowrap">
              <Image src="/logo.png" alt="logo" width={80} height={80} />
            </Link>
        </div>
        <div className="flex flex-grow pl-4 justify-between">
            <div className="space-x-4">
                <Link href="/restaurantes">Restaurantes</Link>
                <Link href="/produtos">Produtos</Link>
                <Link href="/pedido">Pedido</Link>
            </div>
            <div className="pr-4">
                <Link href="/">Sair</Link>
            </div>
        </div>
    </nav>
  )
}