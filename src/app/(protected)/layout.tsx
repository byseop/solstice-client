import { FC, PropsWithChildren } from 'react';
import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const ProtectedLayout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getSession();

  if (!session) {
    redirect('/auth/signIn');
  }

  return <>{children}</>;
};

export default ProtectedLayout;
