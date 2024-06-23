function NotFoundPage() {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p className="text-slate-900 font-black text-8xl">404</p>
      <p className="bg-slate-900 text-white text-center rounded font-bold text-3xl px-4 py-1">
        Az oldal nem található
      </p>
    </div>
  );
}

export default NotFoundPage;
