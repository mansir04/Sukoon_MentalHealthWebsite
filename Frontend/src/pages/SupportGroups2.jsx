import React from "react";

const SupportGroups2 = () => {
  const group2 = [
    {
      type: "article",

      link: "https://www.peakmind.in/contact",
      url: "https://uploads-ssl.webflow.com/6239d45df8c8f750082d66ea/62fba161f8884c2e80b96b7b_PEAKMINDLOGONEWres2-p-500.png",
    },
    {
      type: "article",

      link: "https://mpowerminds.com/contact",

      url: "https://mpowerminds.com/assets/img/root/Mpower%20Logo-04.svg",
    },

    {
      type: "article",

      link: "http://http://kashmirlifeline.org/contact.php.org/",

      url: "http://kashmirlifeline.org/static/img/logos/logo-kll.png",
    },

    {
      type: "article",

      link: "https://parivarthan.org/contact/",

      url: "https://parivarthan.org/wp-content/uploads/2020/03/parivarthan-gray-logo.png",
    },

    {
      type: "article",

      link: "https://www.arpan.org.in/whatsapp-groups/",

      url: "http://www.arpan.org.in/wp-content/uploads/2019/04/Arpan-English-Logo-cc-e1584098567989.jpg",
    },
  ];

  return (
    <div className="support-groups">
      <div className="groups-slider">
        {group2.map((groups) => (
          <div key={groups.link} className="groups-card">
            <a href={groups.link} target="_blank" rel="noopener noreferrer">
              <img src={groups.url} alt={groups.title} />

              <h3>{groups.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportGroups2;
