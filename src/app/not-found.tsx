import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex justify-center min-h-screen w-screen'>
      <div className='flex flex-col justify-center align-center gap-4'>
        <h2 className='text-primary-dark text-4xl font-bold'>
          Pagina não encontrada!
        </h2>
        <Link
          href='/'
          className='text-primary-light hover:text-primary-dark hover:underline transition-all'
        >
          Ir para Pagina Inicial
        </Link>
      </div>
    </main>
  );
}
