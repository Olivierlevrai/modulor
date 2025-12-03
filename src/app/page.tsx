import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <Building2 size={24} />
              </div>
              <span className="font-bold text-xl text-gray-900">Modulor</span>
            </a>
          </div>
          <div className="flex flex-1 justify-end gap-x-4">
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-50">
              Se connecter
            </Link>
            <Link href="/signup" className="text-sm font-semibold leading-6 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500">
              S'inscrire
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              La gestion locative nouvelle génération
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Gérez vos biens, vos locataires et vos contrats en toute simplicité.
              Une application moderne pour les propriétaires exigeants.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/signup"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center gap-2"
              >
                Commencer maintenant <ArrowRight size={16} />
              </Link>
              <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                J'ai déjà un compte <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
