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
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend. Nulla efficitur, justo eget dictum dapibus, nunc justo consectetur sem, id finibus urna dolor sed arcu.',
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