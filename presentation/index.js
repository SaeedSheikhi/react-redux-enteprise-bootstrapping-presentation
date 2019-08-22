// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  logo: require('../assets/logo.jpg'),
  firstFileTypeTree: require('../assets/1.jpg'),
  secondFileTypeTree: require('../assets/2.jpg'),
  thirdFileTypeTree: require('../assets/3.jpg'),
  forthFileTypeTree: require('../assets/4.jpg'),
  fifthFileTypeTree: require('../assets/5.jpg'),
  servicesTree: require('../assets/6.jpg'),
  catToGo: require('../assets/catToGo.gif'),
  geryeHozzar: require('../assets/geryeHozzar.gif'),
  bacheTakhti: require('../assets/bacheTakhti.gif')

};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="secondary">
          <Image src={images.logo} width={800} />
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={3} bold caps lineHeight={1.3} textColor="secondary">
          How to bootstrap an scalable React/Redux Enterprise Project
          </Heading>
        </Slide>

        <Slide transition={['fade']} >
          <List>
            <ListItem margin="30px 0" textSize={24}>React, of course, does not dictate any folder structure but we have felt an increasing need</ListItem>
            <ListItem margin="30px 0" textSize={24} > From a human perspective, it’s easy to get lost in hundreds of files.</ListItem>
            <ListItem margin="30px 0" textSize={24} >Clear and effective organization helps us focus on just one aspect of the complex system.</ListItem>
            <ListItem margin="30px 0" textSize={24} >It can be easier to onboard new developers who can learn parts of the app in isolation</ListItem>
            <ListItem margin="30px 0" textSize={32} bulletStyle="star" >In short, it provides the usual benefits of good abstraction—comprehensibility and composability.</ListItem>
          </List>
        </Slide>

        <Slide>
          <Image src={images.catToGo} width={500} />
        </Slide>


        <Slide>
          <Heading size={3} margin="0 0 30px 0" fit>There are a couple primary patterns for organizing projects</Heading>
          <List>
            <ListItem >File-Type First (FTF)</ListItem>
            <ListItem >Feature First</ListItem>

          </List>

        </Slide>

        <Slide>
          <Heading size={3} margin="0 0 45px 0" >File-Type First (FTF)</Heading>

          <Heading size={6} margin="0 0 30px 0" fit>that all actual application code lives under app/. Application configuration will live under config/.</Heading>
          <Image src={images.firstFileTypeTree} width={800} />

          <Heading size={6} margin="0 0 30px 0" fit>Each conceptual type of file lives under a common parent that other file-types do not. For example: all React components would live under components/, and all Redux reducers would live under reducers/.</Heading>
          <Image src={images.secondFileTypeTree} width={800} />
        </Slide>

        <Slide>
          <Text textSize={32}>This pattern is easy to start with when designing or learning a new framework or library</Text>
          <Image src={images.thirdFileTypeTree} width={600} />

        </Slide>
        <Slide>
          <List>
            <ListItem margin="30px 0" textSize={24}>You build an application for a client with a team of a few developers, everything works very well all together.</ListItem>
            <ListItem margin="30px 0" textSize={24} >Your client requires new features, fine, you add them.</ListItem>
            <ListItem margin="30px 0" textSize={24}>Your client asks you to remove some features and add new ones, it starts to get complicated, you didn’t think about that, but you make it work even though it’s not perfect.</ListItem>
            <ListItem margin="30px 0" textSize={24}>Your client now wants you to change another feature, remove some others and add another one that wasn’t expected. At that point, you grab the scotch tape and start patching some code. You are not really proud of it but it works.
            </ListItem>
            <ListItem margin="30px 0" textSize={24}>6 months later, after some other iterations, the code of the application gets really complicated to read and understand, everything looks like some Italian spaghetti pasta.
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Text textSize={32} margin="0 0 45px 0" >What to Do now?</Text>
          <Image src={images.geryeHozzar} width={500} />
        </Slide>


        <Slide>
          <Heading size={3} margin="0 0 45px 0" >Feature First</Heading>
          <Text textSize={32}>Each component, scene or service (a feature) has everything it needs to work on its own, such as its own styles, images, translations, set of actions as well as unit or integration tests. You can see a feature like an independent piece of code you will use in your app (a bit like node modules).</Text>
        </Slide>

        <Slide>
          <Image src={images.forthFileTypeTree} width={500} />

        </Slide>

        <Slide >
          <Heading size={6} margin="0 0 45px 0">Screens/Scenes</Heading>

          <Text textSize={32} margin="0 0 30px 0" > React-Router or React Native Router will placed into scenes/screens</Text>
          <Image src={images.fifthFileTypeTree} width={700} />
        </Slide>


        <Slide >
          <Text textSize={32} margin="0 0 45px 0" >Home has a component ButtonShare, it can only be used by the Home scene.</Text>
          <Image src={images.fifthFileTypeTree} width={700} />
        </Slide>

        <Slide >
          <Text textSize={32} margin="0 0 45px 0" >Sign has a component ButtonHelp. This component can be used by Login or Register scenes, or by any components defined in those scenes.</Text>
          <Image src={images.fifthFileTypeTree} width={700} />
        </Slide>


        <Slide >
          <Text textSize={32} margin="0 0 45px 0" >Form component uses ButtonHelp internally, this is authorized because ButtonHelp is defined by a parent.</Text>
          <Image src={images.fifthFileTypeTree} width={700} />
        </Slide>

        <Slide >
          <Text textSize={32} margin="0 0 45px 0" >The Register scene cannot use any of the components defined in Login, but it can use the ButtonHelp.</Text>
          <Image src={images.fifthFileTypeTree} width={700} />
        </Slide>


        <Slide >
          <Heading size={6} margin="0 0 45px 0">Services</Heading>

          <Text textSize={32} margin="0 0 30px 0" >Not everything can be a component, and you will need to create independent modules that can be used by your components or scenes.</Text>
          <Image src={images.servicesTree} width={700} />
        </Slide>


        <Slide>
          <Text textSize={32} margin="0 0 45px 0" >Ready to deep div into a real project?</Text>
          <Image src={images.bacheTakhti} width={500} />
        </Slide>

        {/* <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide> */}
      </Deck>
    );
  }
}
