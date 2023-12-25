import React from 'react';

import Intro from '@/components/molecules/Intro';
import IDo from '@/components/molecules/IDo';
import Testimonial from '@/components/molecules/Testimonial';
import Clients from '@/components/molecules/Clients';
import Pricing from '@/components/molecules/Pricing';

export default function Home() {
  return (
    <div>
      <Intro />
      <IDo />
      <Testimonial />
      <Clients />
      <Pricing />
    </div>
  );
}
