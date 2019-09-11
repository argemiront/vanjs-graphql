const persons = [
  {
    id: 'p1',
    name: 'Argemiro Neto',
    token: 'asa',
    interests: ['h1', 'c1', 'c2', 's1'],
    friends: ['p2', 'p3', 'p4', 'p5'],
  },
  {
    id: 'p2',
    name: 'Shawn McKay',
    token: 'smc',
    interests: ['h2', 'h3', 's3', 'c1', 'c3'],
    friends: ['p1', 'p3', 'p4', 'p5'],
  },
  {
    id: 'p3',
    name: 'Bruno Lima',
    token: 'brl',
    interests: ['h3', 'c1', 'c3', 's1', 's3'],
    friends: ['p1', 'p2', 'p4', 'p5'],
  },
  {
    id: 'p4',
    name: 'Blair Bodnar',
    token: 'blr',
    interests: ['h3', 'c1', 'c3', 's1', 's3'],
    friends: ['p1', 'p2', 'p3', 'p5'],
  },
  {
    id: 'p5',
    name: 'Scott Clayton',
    token: 'scc',
    interests: ['h3', 'c1', 'c3', 's1', 's3'],
    friends: ['p1', 'p2', 'p3', 'p4'],
  },
];

const hikes = [
  {
    id: 'h1',
    place: 'Garibaldi Lake',
    summary: 'With turquoise-coloured water nestled between alpine mountains and a spectacular glacier as the backdrop, Garibaldi Lake is one of the most scenic destinations in British Columbia.'
  },
  {
    id: 'h2',
    place: 'Diez Vistas',
    summary: 'Named Diez Vistas for its ten views, this hike offers beautiful scenery overlooking Indian Arm as you make your way around the Buntzen Lake area.'
  },
  {
    id: 'h3',
    place: 'Stanley Park',
    summary: 'The world-famous Stanley Park is one of the major attractions for tourists when they visit Vancouver.'
  },
];

const concerts = [
  {
    id: 'c1',
    artist: 'Cirque du Soleil',
    local: 'Concord Pacific Place'
  },
  {
    id: 'c2',
    artist: 'WOW Jazz Orchestra',
    local: 'West Point Grey Legion'
  },
  {
    id: 'c3',
    artist: 'Elton John',
    local: 'Rogers Arena'
  },
];

const tvShows = [
  {
    id: 's1',
    title: 'Dark',
    provider: 'NETFLIX'
  },
  {
    id: 's2',
    title: 'Avatar: the Last Airbender',
    provider: 'NETFLIX'
  },
  {
    id: 's3',
    title: 'The Man in the High Castle',
    provider: 'AMAZON'
  },
];

module.exports = {
  getUser: (token) => persons.find(person => person.token === token),
  getPersonById: (id) => {

    console.log(`DB Fetch person with ID: ${id}`);

    return persons.find(item => item.id === id);

  },
  getHikeById: (id) => hikes.find(item => item.id === id),
  getConcertById: (id) => concerts.find(item => item.id === id),
  getTVShowById: (id) => tvShows.find(item => item.id === id),
}