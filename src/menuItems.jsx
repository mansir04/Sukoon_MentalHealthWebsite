export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Resources',
      submenu: [
        {
          title: 'Help',
          url: 'help',
        },
        {
          title: 'Articles',
          url: 'articles',
        },
        {
          title: 'Initiatives',
          url: 'initiatives',
        },
      ],
    },
    {
      title: 'Social',
      submenu: [
        {
          title: 'Blogs',
          url: 'blogs',
        },
        {
          title: 'Quiz',
          url: 'quiz',
        },
        {
          title: 'Relax',
          url: 'relax',
        },
        {
          title: 'Memes',
          url: 'memes',
        },
      ],
    },
    {
      title: 'Contact',
      submenu: [
        {
          title: 'FAQs',
          url: 'faq',
        },
        {
          title: 'Volunteer',
          url: 'volunteer',
        },
        {
          title: 'Contact Us',
          url: 'contact',
        },
      ],
    },
    {
      title: 'Sign Up',
      url: 'sign-up', 
      isCTA: true, //call to action button
    },
  ];