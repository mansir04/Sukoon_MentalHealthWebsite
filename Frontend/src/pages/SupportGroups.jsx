import React from "react";

const SupportGroups = () => {
  const group1 = [
    {
      type: "article",

      link: "https://themindclan.com/reach-out/?P=a08254630019062b4b9f3103cf18fd49&utm_source=platform",
      url: "https://themindclan.com/images/smaller/sharing_spaces/care-givers-mental-health-support-group-offline-bandra-west-mumbai.webp",
    },
    {
      type: "article",

      link: "https://themindclan.com/sharing_spaces/queerstion-26062023/",

      url: "https://themindclan.com/images/smaller/sharing_spaces/queerstion-support-group-mumbai-image.webp",
    },

    {
      type: "article",

      link: "https://themindclan.com/sharing_spaces/bpd-space-bpd-support-group-18072023/",

      url: "https://themindclan.com/images/smaller/sharing_spaces/bpd-space-support-group-peer-led-for-bpd-india-online.webp",
    },

    {
      type: "article",

      link: "https://themindclan.com/sharing_spaces/group-therapy-01082023/",

      url: "https://themindclan.com/images/smaller/sharing_spaces/group-therapy-by-ayesha-dialogue-mental-health.webp",
    },

    {
      type: "article",

      link: "https://themindclan.com/sharing_spaces/through-thick-and-thin-04072022/",

      url: "https://themindclan.com/images/smaller/sharing_spaces/ttnt.webp",
    },
  ];

  return (
    <div className="support-groups">
      <h2>Support Groups</h2>

      <div className="groups-slider">
        {group1.map((group) => (
          <div key={group.link} className="groups-card">
            <a href={group.link} target="_blank" rel="noopener noreferrer">
              <img src={group.url} alt={group.title} />

              <h3>{group.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportGroups;
