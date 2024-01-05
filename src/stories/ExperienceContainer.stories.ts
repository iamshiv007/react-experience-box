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
          'During this internship, we worked for a startup company to build an online salon appointment booking platform. In my first internship, I learned about version control tools like Git and GitHub. I spent a lot of time improving my skills in building UI and UX to advance my proficiency in CSS styling and JavaScript logic.'
      },
      {
        companyName: 'MILLENNIA AHEAD TECHNOLIOIES',
        location: 'Nagpur, India',
        role: 'REACTJS INTERN',
        fromTo: 'December 2022 - March 2023',
        details:
          'During this internship, we worked for a startup company to build an online salon appointment booking platform. In my first internship, I learned about version control tools like Git and GitHub. I spent a lot of time improving my skills in building UI and UX to advance my proficiency in CSS styling and JavaScript logic.'
      },
      {
        companyName: 'MILLENNIA AHEAD TECHNOLIOIES',
        location: 'Nagpur, India',
        role: 'REACTJS INTERN',
        fromTo: 'December 2022 - March 2023',
        details:
          'During this internship, we worked for a startup company to build an online salon appointment booking platform. In my first internship, I learned about version control tools like Git and GitHub. I spent a lot of time improving my skills in building UI and UX to advance my proficiency in CSS styling and JavaScript logic.'
      }
    ],
    theme: 'dark'
  }
};
