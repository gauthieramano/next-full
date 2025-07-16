type Props = {
  children: React.ReactNode;
};

export default function PrivateLayout({ children }: Props) {
  return (
    <div className="font-sans grid grid-cols-1 items-center justify-items-center min-h-screen p-8 sm:p-20">
      {children}
    </div>
  );
}
