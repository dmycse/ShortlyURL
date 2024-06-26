import BrandRecognition from '../../assets/svg/icon-brand-recognition.svg';
import DetailedRecord from '../../assets/svg/icon-detailed-records.svg';
import FullyCustomizable from '../../assets/svg/icon-fully-customizable.svg';

export let features = {
  title: 'Advanced Statistics',
  description: 'Track how your links are performing across the web with our advanced statistics dashboard.',
  items: [
      {
          id: 1,
          title: 'Brand Recognition',
          body: 'Boost your brand recogntion with each click. Generic links don\'t mean a thing. Branded links help instil confidence in your content.',
          icon: BrandRecognition,
      },
      {
          id: 2,
          title: 'Detailed Records',
          body: 'Gain insights into who is clickong your links. Knowing when and where people engage with your content helps inform better decisions.',
          icon: DetailedRecord,
      },
      {
          id: 3,
          title: 'Fully Customizable',
          body: 'Improve brand awarness and content discoverability through customizable links, supercharging audience engagement.',
          icon: FullyCustomizable,
      }
  ],
};