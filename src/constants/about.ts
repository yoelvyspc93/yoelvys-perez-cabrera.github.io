export interface About {
  subtitle: string;
  title: string;
  description: string;
  data: {
    label: string;
    value: string;
  }[]
}

export const about: About = {
  subtitle: 'About Me',
  title: 'Frontend Developer passionate about innovation',
  description: 'I specialize in creating intuitive and efficient user interfaces with over 6 years of experience in web development. Combining modern technologies like React and Next.js, I focus on optimizing performance and delivering exceptional user experiences.',
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