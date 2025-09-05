import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { createAnimationProps, createInitialProps, getAnimationDelay } from '@/utils/animations';

const MOVIES = [
  {
    id: 1,
    title: '1917',
    poster: '/movies/1917.jpg',
    description: 'An epic WWI film following two soldiers on an impossible mission to deliver a crucial message across enemy territory.'
  },
  {
    id: 2,
    title: 'Arrival',
    poster: '/movies/Arrival.jpg',
    description: 'A thought-provoking sci-fi masterpiece about communication, time, and the nature of language.'
  },
  {
    id: 3,
    title: '2001: A Space Odyssey',
    poster: '/movies/2001- A Space Odyssey.jpg',
    description: "Kubrick's groundbreaking sci-fi epic exploring human evolution, artificial intelligence, and our place in the universe."
  },
  {
    id: 4,
    title: 'A Clockwork Orange',
    poster: '/movies/A Clockwork Orange.jpg',
    description: "Kubrick's controversial dystopian masterpiece exploring free will, violence, and societal conditioning through Alex's disturbing journey."
  },
  {
    id: 5,
    title: 'Alien',
    poster: '/movies/Alien.jpg',
    description: "Ridley Scott's masterful sci-fi horror that redefined the genre. A perfect blend of suspense, atmosphere, and terror in space."
  },
  {
    id: 6,
    title: 'American History X',
    poster: '/movies/American History X.jpg',
    description: 'A powerful drama about redemption and the cycle of hate, featuring Edward Norton in a career-defining performance.'
  },
  {
    id: 7,
    title: 'American Sniper',
    poster: '/movies/American Sniper.jpg',
    description: "Clint Eastwood's gripping war drama about Navy SEAL Chris Kyle, exploring the psychological toll of warfare on soldiers and families."
  },
  {
    id: 8,
    title: 'Apocalypto',
    poster: '/movies/Apocalypto.jpg',
    description: "Mel Gibson's visceral and immersive adventure set in the declining Mayan civilization, exploring survival and human resilience."
  },
  {
    id: 9,
    title: 'Asteroid City',
    poster: '/movies/Asteroid City.jpg',
    description: "Wes Anderson's whimsical ensemble piece blending meta-theatrical elements with his distinctive visual style and deadpan humor."
  },
  {
    id: 10,
    title: 'Baby Driver',
    poster: '/movies/Baby Driver.jpg',
    description: "Edgar Wright's kinetic heist film perfectly synchronized to music, featuring incredible car chases and a standout soundtrack."
  },
  {
    id: 11,
    title: 'Battle Royale',
    poster: '/movies/Battle Royale.jpg',
    description: "Fukasaku's shocking dystopian thriller that predated Hunger Games, exploring youth rebellion and survival in extreme circumstances."
  },
  {
    id: 12,
    title: 'F**** C***',
    poster: '/movies/Fight Club.jpg',
    description: "Fincher's subversive masterpiece about masculinity, consumerism, and the dark side of modern society. A cultural phenomenon."
  },
  {
    id: 13,
    title: 'BlacKkKlansman',
    poster: '/movies/BlacKKKlansman.jpg',
    description: "Spike Lee's masterful true story of Ron Stallworth's infiltration of the KKK, blending sharp satire with urgent social commentary."
  },
  {
    id: 14,
    title: 'City of God',
    poster: '/movies/City of God.jpeg',
    description: 'A breathtaking Brazilian masterpiece exploring crime, poverty, and survival in Rio de Janeiro favelas with stunning cinematography.'
  },
  {
    id: 15,
    title: 'Django Unchained',
    poster: '/movies/Django Unchained.jpg',
    description: "Tarantino's bold Western revenge tale tackling slavery with his signature style, starring Jamie Foxx and Christoph Waltz."
  },
  {
    id: 16,
    title: 'Goodfellas',
    poster: '/movies/Goodfellas.jpg',
    description: "Scorsese's definitive mob epic following Henry Hill's rise and fall in the Lucchese crime family. Pure cinematic perfection."
  },
  {
    id: 17,
    title: 'The Social Network',
    poster: '/movies/The Social Network.jpg',
    description: "Fincher's sharp exploration of Facebook's creation and the cost of ambition in the digital age."
  },
  {
    id: 18,
    title: 'There Will Be Blood',
    poster: '/movies/There Will Be Blood.webp',
    description: "Paul Thomas Anderson's oil-soaked masterpiece featuring Daniel Day-Lewis in an unforgettable performance about greed and obsession."
  },
  {
    id: 19,
    title: 'No Country for Old Men',
    poster: '/movies/No Country for Old Men.jpg',
    description: "The Coen Brothers' haunting neo-Western thriller featuring one of cinema's most terrifying villains, Anton Chigurh."
  },
  {
    id: 20,
    title: 'Mulholland Drive',
    poster: '/movies/Mulholland Drive.jpg',
    description: "Lynch's surreal Hollywood nightmare that challenges perception and reality in the most beautiful and disturbing ways."
  },
  {
    id: 21,
    title: 'Parasite',
    poster: '/movies/Parasite.jpg',
    description: "Bong Joon-ho's masterful dark comedy thriller about class warfare that swept the Oscars and changed cinema forever."
  },
  {
    id: 22,
    title: 'Memento',
    poster: '/movies/Memento.jpeg',
    description: "Nolan's brilliant reverse-chronology thriller about memory, identity, and the unreliable nature of perception."
  },
  {
    id: 23,
    title: 'Oldboy',
    poster: '/movies/Oldboy.jpg',
    description: "Park Chan-wook's visceral revenge masterpiece that redefined what cinema could achieve in terms of violence and storytelling."
  },
  {
    id: 24,
    title: 'Mad Max: Fury Road',
    poster: '/movies/Mad Max - Fury Road.jpg',
    description: 'George Miller\'s explosive post-apocalyptic chase film that redefined action cinema with practical effects and feminist themes.'
  },
  {
    id: 25,
    title: 'Ex Machina',
    poster: '/movies/Ex Machina.jpg',
    description: 'A haunting exploration of artificial intelligence, consciousness, and what it means to be human in the digital age.'
  },
  {
    id: 26,
    title: 'The Lighthouse',
    poster: '/movies/The Lighthouse.jpg',
    description: 'Robert Eggers\' claustrophobic psychological horror featuring two lighthouse keepers descending into madness.'
  },
  {
    id: 27,
    title: 'Snowpiercer',
    poster: '/movies/Snowpiercer.jpg',
    description: 'Bong Joon-ho\'s allegorical class-warfare thriller set aboard a train carrying humanity\'s last survivors.'
  },
  {
    id: 28,
    title: 'Heat',
    poster: '/movies/Heat.jpg',
    description: 'Michael Mann\'s epic crime saga featuring the ultimate cat-and-mouse game between De Niro and Pacino.'
  },
  {
    id: 29,
    title: 'Whiplash',
    poster: '/movies/Whiplash.jpg',
    description: 'Damien Chazelle\'s intense drama about the brutal pursuit of perfection in music, featuring incredible performances.'
  },
  {
    id: 30,
    title: 'The Revenant',
    poster: '/movies/The Revenant.jpg',
    description: 'Iñárritu\'s brutal survival epic showcasing Leonardo DiCaprio\'s Oscar-winning performance and stunning natural cinematography.'
  },
  {
    id: 31,
    title: 'Prisoners',
    poster: '/movies/Prisoners.jpg',
    description: 'Denis Villeneuve\'s tense thriller exploring moral ambiguity when a father takes justice into his own hands.'
  },
  {
    id: 32,
    title: 'Gone Girl',
    poster: '/movies/Gone Girl.jpg',
    description: 'Fincher\'s twisted marriage thriller that dissects media manipulation and the facades of perfect relationships.'
  },
  {
    id: 33,
    title: 'Sicario',
    poster: '/movies/Sicario.jpg',
    description: 'Villeneuve\'s intense drug war thriller exploring the moral complexities of border violence and justice.'
  },
  {
    id: 34,
    title: 'Logan',
    poster: '/movies/Logan.jpg',
    description: 'A gritty, emotional farewell to Wolverine that transcends superhero cinema with its raw humanity.'
  },
  {
    id: 35,
    title: 'The Martian',
    poster: '/movies/The Martian.jpg',
    description: 'Ridley Scott\'s optimistic space survival story showcasing human ingenuity and the power of science.'
  },
  {
    id: 36,
    title: 'Dunkirk',
    poster: '/movies/Dunkirk.jpg',
    description: 'Nolan\'s immersive WWII masterpiece told from three perspectives, creating an unforgettable sensory experience.'
  },
  {
    id: 37,
    title: 'Blade Runner 2049',
    poster: '/movies/Tenet.jpg',
    description: 'Villeneuve\'s worthy sequel that expands the original\'s themes while creating its own visual poetry.'
  },
  {
    id: 38,
    title: 'Dr. Strangelove',
    poster: '/movies/Dr. Strangelove or- How I Learned to Stop Worrying and Love the Bomb.jpg',
    description: 'Kubrick\'s brilliant nuclear war satire that remains devastatingly relevant and hilariously dark.'
  },
  {
    id: 39,
    title: 'Full Metal Jacket',
    poster: '/movies/Full Metal Jacket.jpg',
    description: 'Kubrick\'s unflinching look at military dehumanization and the Vietnam War\'s psychological toll.'
  },
  {
    id: 40,
    title: 'Eyes Wide Shut',
    poster: '/movies/Eyes Wide Shut.jpg',
    description: 'Kubrick\'s final film exploring marriage, desire, and the hidden underbelly of society.'
  },
  {
    id: 41,
    title: 'Good Will Hunting',
    poster: '/movies/Good Will Hunting.jpg',
    description: 'A touching story about genius, trauma, and healing featuring breakthrough performances by Matt Damon and Robin Williams.'
  },
  {
    id: 42,
    title: 'Shutter Island',
    poster: '/movies/Shutter Island.jpg',
    description: 'Scorsese\'s psychological thriller that masterfully blurs the line between reality and delusion.'
  },
  {
    id: 43,
    title: 'The Big Lebowski',
    poster: '/movies/The Big Lebowski.jpg',
    description: 'The Coen Brothers\' cult classic comedy about The Dude and his surreal adventure in Los Angeles.'
  },
  {
    id: 44,
    title: 'Training Day',
    poster: '/movies/Training Day.jpg',
    description: 'Antoine Fuqua\'s gripping police corruption thriller featuring Denzel Washington\'s Oscar-winning villain.'
  },
  {
    id: 45,
    title: 'The Grand Budapest Hotel',
    poster: '/movies/The Grand Budapest Hotel.jpg',
    description: 'Wes Anderson\'s whimsical caper set in a luxurious European hotel with his trademark visual style.'
  },
  {
    id: 46,
    title: 'Once Upon a Time... in Hollywood',
    poster: '/movies/Once Upon a Time... in Hollywood.jpg',
    description: 'Tarantino\'s nostalgic love letter to 1960s Hollywood featuring Leonardo DiCaprio and Brad Pitt.'
  },
  {
    id: 47,
    title: 'Boiler Room',
    poster: '/movies/Boiler Room.jpg',
    description: 'A gripping tale of Wall Street corruption and the seductive allure of easy money in the stock market.'
  },
  {
    id: 48,
    title: 'Captain Phillips',
    poster: '/movies/Captain Phillips.jpg',
    description: 'Paul Greengrass\'s intense maritime thriller based on the true story of Somali pirate hijacking.'
  },
  {
    id: 49,
    title: 'Chappie',
    poster: '/movies/Chappie.jpg',
    description: 'Neill Blomkamp\'s sci-fi tale about artificial intelligence and the nature of consciousness in a robot.'
  },
  {
    id: 50,
    title: 'Citizen Kane',
    poster: '/movies/Citizen Kane.jpg',
    description: 'Orson Welles\' masterpiece often considered the greatest film ever made, exploring power, ambition, and isolation.'
  },
  {
    id: 51,
    title: 'Dallas Buyers Club',
    poster: '/movies/Dallas Buyer Club.jpg',
    description: 'McConaughey\'s Oscar-winning portrayal of Ron Woodroof\'s fight against AIDS and the medical establishment.'
  },
  {
    id: 52,
    title: 'District 9',
    poster: '/movies/Distric 9.jpg',
    description: 'Blomkamp\'s brilliant sci-fi allegory about segregation and xenophobia told through alien refugees.'
  },
  {
    id: 53,
    title: 'DogMan',
    poster: '/movies/DogMan.jpg',
    description: 'Matteo Garrone\'s gritty crime drama about loyalty, betrayal, and survival in the Italian underworld.'
  },
  {
    id: 54,
    title: 'Don\'t Look Up',
    poster: '/movies/Don\'t Look Up.jpg',
    description: 'Adam McKay\'s satirical disaster film about media, politics, and climate change denial.'
  },
  {
    id: 55,
    title: 'Elysium',
    poster: '/movies/Elysium.jpg',
    description: 'Blomkamp\'s dystopian sci-fi exploring class inequality and healthcare in a divided future society.'
  },
  {
    id: 56,
    title: 'Enemy',
    poster: '/movies/Enemy.jpg',
    description: 'Villeneuve\'s psychological thriller about identity and duality featuring Jake Gyllenhaal\'s dual performance.'
  },
  {
    id: 57,
    title: 'Eye in the Sky',
    poster: '/movies/Eye in the Sky.jpg',
    description: 'A tense moral thriller about drone warfare and the ethical complexities of modern military operations.'
  },
  {
    id: 58,
    title: 'Fantastic Mr. Fox',
    poster: '/movies/Fantastic Mr.Fox.jpg',
    description: 'Wes Anderson\'s charming stop-motion adaptation of Roald Dahl\'s beloved children\'s story.'
  },
  {
    id: 59,
    title: 'Fear and Loathing in Las Vegas',
    poster: '/movies/Fear and Loathing in Las Vegas.jpg',
    description: 'Terry Gilliam\'s psychedelic adaptation of Hunter S. Thompson\'s gonzo journalism masterpiece.'
  },
  {
    id: 60,
    title: 'For a Few Dollars More',
    poster: '/movies/For a few Dollars More.jpg',
    description: 'Sergio Leone\'s spaghetti western featuring Clint Eastwood in the iconic Man with No Name trilogy.'
  },
  {
    id: 61,
    title: 'Ford v Ferrari',
    poster: '/movies/Ford v Ferrari.jpg',
    description: 'James Mangold\'s thrilling racing drama about Ford\'s quest to defeat Ferrari at Le Mans.'
  },
  {
    id: 62,
    title: 'Fury',
    poster: '/movies/Fury.jpg',
    description: 'David Ayer\'s brutal WWII tank crew drama showcasing the horrors and brotherhood of war.'
  },
  {
    id: 63,
    title: 'Get the Gringo',
    poster: '/movies/Get the Gringo.jpg',
    description: 'Mel Gibson\'s gritty action-thriller set in a Mexican prison with dark humor and intense action.'
  },
  {
    id: 64,
    title: 'Good Time',
    poster: '/movies/Good Time.jpg',
    description: 'The Safdie Brothers\' frenetic crime thriller featuring Robert Pattinson\'s career-best performance.'
  },
  {
    id: 65,
    title: 'Gran Torino',
    poster: '/movies/Gran Torino.jpg',
    description: 'Clint Eastwood\'s powerful drama about redemption, prejudice, and unlikely friendship across generations.'
  },
  {
    id: 66,
    title: 'Green Book',
    poster: '/movies/Green Book.jpg',
    description: 'Peter Farrelly\'s Oscar-winning road trip drama about friendship across racial divides in 1960s America.'
  },
  {
    id: 67,
    title: 'Her',
    poster: '/movies/Her.jpg',
    description: 'Spike Jonze\'s intimate sci-fi romance exploring love, loneliness, and connection in the digital age.'
  },
  {
    id: 68,
    title: 'Holy Motors',
    poster: '/movies/Holy Motors.jpg',
    description: 'Leos Carax\'s surreal masterpiece about performance, identity, and the nature of cinema itself.'
  },
  {
    id: 69,
    title: 'Inherent Vice',
    poster: '/movies/Inherent Vice.jpg',
    description: 'Paul Thomas Anderson\'s psychedelic neo-noir adaptation of Thomas Pynchon\'s stoner detective story.'
  },
  {
    id: 70,
    title: 'La Haine',
    poster: '/movies/La Haine.jpg',
    description: 'Mathieu Kassovitz\'s explosive black-and-white drama about urban violence and social inequality in France.'
  },
  {
    id: 71,
    title: 'Léon: The Professional',
    poster: '/movies/Léon - The Professional.jpg',
    description: 'Luc Besson\'s stylish action thriller about an unlikely bond between a hitman and a young girl.'
  },
  {
    id: 72,
    title: 'Licorice Pizza',
    poster: '/movies/Licorice Pizza.jpg',
    description: 'Paul Thomas Anderson\'s nostalgic coming-of-age romance set in 1970s San Fernando Valley.'
  },
  {
    id: 73,
    title: 'Life',
    poster: '/movies/Life.jpg',
    description: 'Daniel Espinosa\'s tense sci-fi horror about the discovery of life on Mars with terrifying consequences.'
  },
  {
    id: 74,
    title: 'Limitless',
    poster: '/movies/Limitless.jpg',
    description: 'Neil Burger\'s thriller about a drug that unlocks the full potential of the human brain.'
  },
  {
    id: 75,
    title: 'Logan Lucky',
    poster: '/movies/Logan Lucky.jpg',
    description: 'Steven Soderbergh\'s charming heist comedy about blue-collar brothers planning an elaborate NASCAR robbery.'
  },
  {
    id: 76,
    title: 'Mile 22',
    poster: '/movies/Mile 22.jpg',
    description: 'Peter Berg\'s intense action thriller starring Mark Wahlberg as an elite CIA operative.'
  },
  {
    id: 77,
    title: 'Million Dollar Baby',
    poster: '/movies/Million Dollar Baby.jpg',
    description: 'Clint Eastwood\'s Oscar-winning boxing drama about determination, dreams, and heartbreaking sacrifice.'
  },
  {
    id: 78,
    title: 'Moneyball',
    poster: '/movies/Moneyball.jpg',
    description: 'Bennett Miller\'s sports drama about Billy Beane\'s revolutionary approach to baseball using statistics.'
  },
  {
    id: 79,
    title: 'New Paradise Cinema',
    poster: '/movies/New Paradise Cinema.jpg',
    description: 'Giuseppe Tornatore\'s nostalgic masterpiece about cinema\'s power to shape our lives and memories.'
  },
  {
    id: 80,
    title: 'Nosferatu',
    poster: '/movies/Nosferatu.jpg',
    description: 'F.W. Murnau\'s silent horror masterpiece that defined the vampire genre with expressionist artistry.'
  },
  {
    id: 81,
    title: 'Nymphomaniac',
    poster: '/movies/Nynphomaniac.jpg',
    description: 'Lars von Trier\'s provocative exploration of sexuality, addiction, and the human condition.'
  },
  {
    id: 82,
    title: 'Overdrive',
    poster: '/movies/Overdrive.jpg',
    description: 'Antonio Negret\'s stylish action thriller about car thieves targeting luxury vehicles in the French Riviera.'
  },
  {
    id: 83,
    title: 'Passengers',
    poster: '/movies/Passengers.jpg',
    description: 'Morten Tyldum\'s sci-fi romance about two passengers awakened early on a spacecraft to a distant colony.'
  },
  {
    id: 84,
    title: 'Perfect Days',
    poster: '/movies/Perfect Days.jpg',
    description: 'Wim Wenders\' meditative masterpiece about finding meaning in simple daily routines and human connection.'
  },
  {
    id: 85,
    title: 'Planet of the Apes',
    poster: '/movies/Planet of the Apes 1968.jpg',
    description: 'Franklin J. Schaffner\'s sci-fi classic with one of cinema\'s most shocking and memorable endings.'
  },
  {
    id: 86,
    title: 'Prometheus',
    poster: '/movies/Prometheus.jpg',
    description: 'Ridley Scott\'s ambitious Alien prequel exploring humanity\'s origins and the dangerous pursuit of knowledge.'
  },
  {
    id: 87,
    title: 'Reservoir Dogs',
    poster: '/movies/Reservoir Dogs.jpg',
    description: 'Tarantino\'s explosive debut featuring nonlinear storytelling and iconic dialogue in a heist gone wrong.'
  },
  {
    id: 88,
    title: 'Rush',
    poster: '/movies/Rush.jpg',
    description: 'Ron Howard\'s thrilling Formula 1 drama about the legendary rivalry between Niki Lauda and James Hunt.'
  },
  {
    id: 89,
    title: 'Sicario: Day of the Soldado',
    poster: '/movies/Sicario - Day of the Soldado.jpg',
    description: 'Stefano Sollima\'s intense sequel exploring the escalating drug war on the US-Mexico border.'
  },
  {
    id: 90,
    title: 'Sin City',
    poster: '/movies/Sin City.jpg',
    description: 'Robert Rodriguez\'s stylized neo-noir bringing Frank Miller\'s graphic novel to life with striking visuals.'
  },
  {
    id: 91,
    title: 'Sinners',
    poster: '/movies/Sinners 2025.jpg',
    description: 'Ryan Coogler\'s upcoming supernatural thriller starring Michael B. Jordan in dual roles.'
  },
  {
    id: 92,
    title: 'Sound of Metal',
    poster: '/movies/Sound of Metal.jpg',
    description: 'Darius Marder\'s profound drama about a drummer losing his hearing and finding new purpose.'
  },
  {
    id: 93,
    title: 'The Big Short',
    poster: '/movies/The Big Short.jpg',
    description: 'Adam McKay\'s darkly comic exposé of the 2008 financial crisis and the men who predicted it.'
  },
  {
    id: 94,
    title: 'The Brutalist',
    poster: '/movies/The Brutalist.jpg',
    description: 'Brady Corbet\'s epic architectural drama exploring art, ambition, and the American Dream.'
  },
  {
    id: 95,
    title: 'The Founder',
    poster: '/movies/The Founder.jpg',
    description: 'John Lee Hancock\'s biographical drama about Ray Kroc\'s transformation of McDonald\'s into a global empire.'
  },
  {
    id: 96,
    title: 'The Handmaiden',
    poster: '/movies/The Handmaiden.jpg',
    description: 'Park Chan-wook\'s erotic psychological thriller featuring stunning cinematography and complex plotting.'
  },
  {
    id: 97,
    title: 'The Hunt',
    poster: '/movies/The Hunt.jpg',
    description: 'Thomas Vinterberg\'s powerful drama about false accusations and the destruction of a man\'s reputation.'
  },
  {
    id: 98,
    title: 'The Imitation Game',
    poster: '/movies/The Imitation Game.jpg',
    description: 'Morten Tyldum\'s biographical drama about Alan Turing\'s crucial role in breaking the Enigma code.'
  },
  {
    id: 99,
    title: 'The Machinist',
    poster: '/movies/The Machinist.jpg',
    description: 'Brad Anderson\'s psychological thriller featuring Christian Bale\'s shocking physical transformation.'
  },
  {
    id: 100,
    title: 'The Mule',
    poster: '/movies/The Mule.jpg',
    description: 'Clint Eastwood\'s crime drama about an elderly horticulturist who becomes a drug courier for a Mexican cartel.'
  },
  {
    id: 101,
    title: 'The Northman',
    poster: '/movies/The Northman.jpg',
    description: 'Robert Eggers\' brutal Viking epic of revenge, featuring stunning cinematography and visceral action.'
  },
  {
    id: 102,
    title: 'The Place Beyond the Pines',
    poster: '/movies/The Place Beyond the Pines.jpg',
    description: 'Derek Cianfrance\'s multigenerational drama exploring legacy, consequences, and the sins of fathers.'
  },
  {
    id: 103,
    title: 'The Thing',
    poster: '/movies/The Thing.jpg',
    description: 'John Carpenter\'s masterful horror about paranoia and isolation in an Antarctic research station.'
  },
  {
    id: 104,
    title: 'The Tragedy of Macbeth',
    poster: '/movies/The Tragedy of Macbeth.jpg',
    description: 'Joel Coen\'s stunning black-and-white adaptation of Shakespeare\'s darkest tragedy.'
  },
  {
    id: 105,
    title: 'The Witch',
    poster: '/movies/The Witch.jpg',
    description: 'Robert Eggers\' atmospheric horror masterpiece set in 1630s New England Puritan society.'
  },
  {
    id: 106,
    title: 'They Live',
    poster: '/movies/They Live.jpg',
    description: 'John Carpenter\'s satirical sci-fi thriller about alien control and consumer manipulation.'
  },
  {
    id: 107,
    title: 'Trainspotting',
    poster: '/movies/Trainspotting.jpg',
    description: 'Danny Boyle\'s kinetic drug culture drama that launched a generation of British filmmakers.'
  },
  {
    id: 108,
    title: 'Uncut Gems',
    poster: '/movies/Uncut Gems.jpg',
    description: 'The Safdie Brothers\' anxiety-inducing thriller featuring Adam Sandler\'s career-best dramatic performance.'
  },
  {
    id: 109,
    title: 'V for Vendetta',
    poster: '/movies/V for Vendetta.jpg',
    description: 'James McTeigue\'s dystopian thriller about revolution, identity, and the power of ideas.'
  },
  {
    id: 110,
    title: 'Vice',
    poster: '/movies/Vice.jpg',
    description: 'Adam McKay\'s satirical biographical drama about Dick Cheney\'s rise to political power.'
  },
  {
    id: 111,
    title: 'Wild at Heart',
    poster: '/movies/Wild at Heart.jpg',
    description: 'David Lynch\'s surreal road movie exploring violence, love, and the American Dream gone wrong.'
  },
  {
    id: 112,
    title: 'Boston',
    poster: '/movies/Boston.jpg',
    description: 'A gripping thriller set against the backdrop of Boston\'s complex urban landscape.'
  },
  {
    id: 113,
    title: 'Tenet',
    poster: '/movies/Tenet.jpg',
    description: 'Christopher Nolan\'s mind-bending thriller that plays with time inversion and the nature of causality.'
  }
];

const Movies: React.FC = () => {
  const [currentMovie, setCurrentMovie] = useState(MOVIES[0]);

  const getRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * MOVIES.length);
    setCurrentMovie(MOVIES[randomIndex]);
  };

  useEffect(() => {
    // Set a random movie on component mount
    getRandomMovie();
  }, []);

  return (
    <Layout showParticles={false}>
      <div className="max-w-4xl mx-auto -mt-16 sm:mt-0">

        {/* Movie Display */}
        <motion.div
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(1))}
          className="flex flex-col items-center mb-2"
        >
          <div className="relative mb-6 max-w-sm">
            <img
              src={currentMovie.poster}
              alt={`${currentMovie.title} poster`}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="text-center max-w-md">
            <h2 className="text-2xl sm:text-3xl font-semibold text-portfolio-primary mb-3">
              {currentMovie.title}
            </h2>
            <p className="text-portfolio-muted text-sm sm:text-base leading-relaxed mb-4">
              {currentMovie.description}
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(2))}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={getRandomMovie}
            variant="outline"
            size="lg"
            className="gap-2 bg-portfolio-primary/10 border-portfolio-primary/30 hover:bg-portfolio-primary/20 hover:border-portfolio-primary/50 transition-colors touch-manipulation"
          >
            <RefreshCw className="w-4 h-4" />
            Another Recommendation
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            asChild
            className="gap-2 bg-portfolio-primary/10 border-portfolio-primary/30 hover:bg-portfolio-primary/20 hover:border-portfolio-primary/50 transition-colors touch-manipulation"
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Movies;