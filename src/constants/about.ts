export interface About {
  subtitle: string;
  title: string;
  description: string;
  description_large: string[];
  data: {
    label: string;
    value: string;
  }[]
}

export const about: About = {
  subtitle: 'About Me',
  title: 'Frontend Developer passionate about innovation',
  description: 'I specialize in creating intuitive and efficient user interfaces with over 6 years of experience in web development. Combining modern technologies like React and Next.js, I focus on optimizing performance and delivering exceptional user experiences.',
  description_large: [
    'I am a Computer Engineer with over 6 years of experience in developing and optimizing web applications, focused on creating modern, intuitive, and efficient user interfaces. Throughout my career, I have worked on complex projects using technologies such as React and Next.js, always prioritizing user experience and site performance.',
    'I specialize in SEO and web performance optimization, enabling me to build fast and accessible applications. I am passionate about technological innovation and problem-solving, constantly seeking new tools and approaches to improve development efficiency. For me, every project is an opportunity to learn and a challenge to exceed expectations.'
  ],
  data: [
    {
      value: '6+',
      label: 'Years of experience',
    },
    {
      value: '12+',
      label: 'Complete Projects',
    },
    {
      value: '6+',
      label: 'Years of experience',
    },
    {
      value: '12+',
      label: 'Complete Projects',
    }
  ]
}