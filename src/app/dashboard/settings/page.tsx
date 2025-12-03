"use client";

import { updatePassword } from "../../actions/auth";
import { useActionState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

const initialState = {
    message: "",
    errors: {} as Record<string, string[]>,
    success: false,
};

export default function SettingsPage() {
    // @ts-expect-error - useActionState types
    const [state, formAction, isPending] = useActionState(updatePassword, initialState);

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <Link
                        href="/dashboard"
                        className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Retour au tableau de bord
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
                    <p className="mt-2 text-gray-600">Gérez vos préférences et votre sécurité.</p>
                </div>

                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-lg font-medium text-gray-900">Modifier le mot de passe</h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Choisissez un mot de passe sécurisé pour protéger votre compte.
                        </p>
                    </div>

                    <form action={formAction} className="p-6 space-y-6">
                        {state?.success && (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm">
                                {state.message}
                            </div>
                        )}

                        <div>
                            <label
                                htmlFor="currentPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Mot de passe actuel
                            </label>
                            <input
                                type="password"
                                name="currentPassword"
                                id="currentPassword"
                                required
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900"
                            />
                            {state?.errors?.currentPassword && (
                                <p className="text-red-500 text-sm mt-1">
                                    {state.errors.currentPassword[0]}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="newPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Nouveau mot de passe
                            </label>
                            <input
                                type="password"
                                name="newPassword"
                                id="newPassword"
                                required
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900"
                            />
                            {state?.errors?.newPassword && (
                                <p className="text-red-500 text-sm mt-1">
                                    {state.errors.newPassword[0]}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirmer le nouveau mot de passe
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                required
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900"
                            />
                            {state?.errors?.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">
                                    {state.errors.confirmPassword[0]}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                            >
                                <Save size={16} className="mr-2" />
                                {isPending ? "Enregistrement..." : "Enregistrer"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
