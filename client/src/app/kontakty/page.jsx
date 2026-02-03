

import SocialItems from "@/components/socialItems/SocialItems";
import Breadcrumbs from '@/components/breadcrumbs/BreadCrumbs';

export default function page() {
  const breadcrumbItems = [
    
    {
      name: "Контакти",
      link: null,
    },
  ];

  return (
    <section className="kontakty-section">
      
      <div className=" container">
      <Breadcrumbs items={breadcrumbItems} />
        <div className="info-title">
          <h3>Контакти</h3>

          <SocialItems className="social-kontakty" withLabels/>
          
        </div>
      </div>

    </section>
  )
}
