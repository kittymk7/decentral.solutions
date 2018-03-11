import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './component/Carousel';

const slides = [
  {
    title: 'Banking on the Blockchain',
    description: 'Dominic Williams, President/CTO of String Labs and Chief Scientist at DFINITY, talks about blockchain and where it is going, it\'s disruption in banking and the key questions of enhancement versus replacement at the Silicon Valley Forum.',
    videoUrl: 'https://www.youtube.com/embed/aOzxxeOYJpY?rel=0&showinfo=0&autohide=1',
    thumbnailUrl: '/static/images/banking_blockchain_youtube.png'
  },
  {
    title: 'Intro to DFINITY: The Intelligent, Decentralized Cloud',
    description: 'Dominic Williams explores the decentralized cloud vision of the DFINITY team and how it relates to traditional blockchain and existing cloud providers such as Amazon Web Services',
    videoUrl: 'https://www.youtube.com/embed/-nHE7OwvOwk?rel=0&showinfo=0&autohide=1',
    thumbnailUrl: '/static/images/decentralized_commercial_banking_devcon_two.png'
  },
  {
    title: 'Watch: A Peek at the DFINITY Testnet',
    description: 'A quick peek of the DFINITY testnet is provided by Dominic Williams, President and Chief Scientist. This is the first of many videos that will offer behind thescenes insights into the project.',
    videoUrl: 'https://www.youtube.com/embed/nVVSx35ebRg?rel=0&showinfo=0&autohide=1',
    thumbnailUrl: '/static/images/dfinity_testnet_youtube.png'
  },
  {
    title: 'Decentralized Commercial Banking',
    description: 'Dominic Williams, co-founder of String Labs, focuses on how Ethereum can be utilized to revolutionize our existing financial infrastructure. During the third day of Devcon2, Dominic Williams presented his vision of Decentralization of Commercial Banking on Ethereum.',
    videoUrl: 'https://www.youtube.com/embed/RrMaT1YuC4Y?rel=0&showinfo=0&autohide=1',
    thumbnailUrl: '/static/images/dom_at_devcon.png'
  },
  {
    title: 'Random Beacons in Decentralized Networks',
    description: 'Dominic Williams introduces the concept of a random beacon for future decentralized networks and systems at the Silicon Valley Ethereum Meetup',
    videoUrl: 'https://www.youtube.com/embed/xf1dql4Zoqw?rel=0&showinfo=0&autohide=1',
    thumbnailUrl: '/static/images/quest_decentralized_cloud.png'
  },
  {
    title: 'DFINITY and the Quest for a Decentralized Cloud',
    description: 'On this episode of the Epicenter Podcast, Dominic Williams and Tom Ding cover DFINITY\'s approach to scalability, interoperability, consensus, and governance: The Blockchain Nervous System',
    videoUrl: 'https://www.youtube.com/embed/fzG9L4Ry6O4?rel=0&showinfo=0&autohide=1',
    thumbnailUrl: '/static/images/random_beacons_decentralized.png'
  },
];

ReactDOM.render(
    <Carousel slides={slides}/>,
    document.getElementById('root')
);
