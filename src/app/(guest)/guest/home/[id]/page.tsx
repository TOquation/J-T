import PropertyDetailPage from '@/pages/guest/home/propertyDetailPage';

import { List } from 'lucide-react';
import React from 'react';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  return <PropertyDetailPage id={params.id} />;
};

export default page;
