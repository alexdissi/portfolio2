import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          Page non trouvée
        </h1>
        <p className="text-gray-600 mt-4">
          Désolé, la page que vous recherchez n&apos;existe pas.
        </p>
        <Link href="/" className="text-blue-500 hover:underline mt-4 block">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
