import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { logout } from "../actions/auth";
import { LogOut } from "lucide-react";

export default async function DashboardPage() {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
        redirect("/login");
    }

    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-gray-900">Modulor</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500">Bonjour, {user?.name}</span>
                            <a
                                href="/dashboard/settings"
                                className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full"
                                title="Paramètres"
                            >
                                <span className="sr-only">Paramètres</span>
                                ⚙️
                            </a>
                            <form action={logout}>
                                <button
                                    type="submit"
                                    className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full"
                                    title="Se déconnecter"
                                >
                                    <LogOut size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">
                    Tableau de bord
                </h1>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1: Properties */}
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                                    {/* Icon placeholder */}
                                    <span className="text-white font-bold">🏠</span>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                            Mes Biens
                                        </dt>
                                        <dd>
                                            <div className="text-lg font-medium text-gray-900">
                                                0
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-700 hover:text-blue-900">
                                    Voir tout
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Tenants */}
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                                    <span className="text-white font-bold">👥</span>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                            Locataires
                                        </dt>
                                        <dd>
                                            <div className="text-lg font-medium text-gray-900">
                                                0
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-5 py-3">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-700 hover:text-blue-900">
                                    Voir tout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
