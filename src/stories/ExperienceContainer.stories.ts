import type { Meta, StoryObj } from '@storybook/react';
import { ExperienceContainer } from '../components/ExperienceContainer';

const meta = {
  title: 'Example/ExperienceContainer',
  component: ExperienceContainer,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof ExperienceContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ExperienceContainerStory: Story = {
  args: {
    experiences: [
      {
        companyName: 'MILLENNIA AHEAD TECHNOLIOIES',
        location: 'Nagpur, India',
        role: 'REACTJS INTERN',
        fromTo: 'December 2022 - March 2023',
        details:
          'During this internship, we worked for a startup company to build an online salon appointment booking platform. In my first internship, I learned about version control tools like Git and GitHub. I spent a lot of time improving my skills in building UI and UX to advance my proficiency in CSS styling and JavaScript logic.',
        direction: 'left'
      },
      {
        companyName: 'Good Tech MIND',
        location: 'Kolkata, India',
        role: 'MERN STACK INTERN',
        fromTo: 'Aprile 2023 - June 2023',
        details:
          'In this internship, I worked on many projects, including an eCommerce application and a real-time chat system. Through this internship, I gained a strong command of Redux and Redux Toolkit. After completing this internship, I have gained the confidence and skills needed to develop a full-stack application for a real-world eCommerce site.',
        direction: 'left'
      },
      {
        companyName: 'MILLENNIA AHEAD TECHNOLIOIES',
        location: 'Nagpur, India',
        role: 'REACTJS INTERN',
        fromTo: 'December 2022 - March 2023',
        details:
          'During this internship, we worked for a startup company to build an online salon appointment booking platform. In my first internship, I learned about version control tools like Git and GitHub. I spent a lot of time improving my skills in building UI and UX to advance my proficiency in CSS styling and JavaScript logic.',
        direction: 'right'
      },
      {
        companyName: 'Good Tech MIND',
        location: 'Kolkata, India',
        role: 'MERN STACK INTERN',
        fromTo: 'Aprile 2023 - June 2023',
        details:
          'In this internship, I worked on many projects, including an eCommerce application and a real-time chat system. Through this internship, I gained a strong command of Redux and Redux Toolkit. After completing this internship, I have gained the confidence and skills needed to develop a full-stack application for a real-world eCommerce site.',
        direction: 'right'
      }
    ],
    theme: 'dark',
    direction: 'sideBySide'
  }
};
