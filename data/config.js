import colorObject from 'daisyui/src/colors'

export const meta = {
  title: 'Talent Tree - Learner Dashboard',
  name: 'description',
  content: 'Generated by create next app',
  viewport: 'viewport',
  viewportContent: 'width=device-width, initial-scale=1',
  favicon: 'favicon.ico',
  title: 'Alexander Janssen - Web Developer and UI/UX Designer',
}

export const user = {
  name: 'Alexander Janssen',
}

export const sidebar = {
  logo: 'logo/android-chrome-192x192.png',
  title: 'Talent Tree',
  links: [`Dashboard`, 'Skills', 'Agenda', 'Community'],

  settings: 'Settings',
  signout: 'Sign Out',
}

export const skills = {
  title: ['PHP', 'Advanced Mathematics', 'German'],
  percentage: ['w-1/3', 'w-1/2', 'w-40'],
}

export const skillsAll = {
  title: [
    'PHP',
    'Advanced Mathematics',
    'German',
    'Dutch',
    'Surfing',
    'UX design',
    'Writing',
    'Drawing',
    'Engine building',
  ],
  percentage: [
    'w-1/3',
    'w-1/2',
    'w-40',
    'w-40',
    'w-12',
    'w-20',
    'w-60',
    'w-full',
    'w-full',
  ],
}

export const lineData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'My First dataset',
      fill: true,
      lineTension: 0.1,
      backgroundColor: ['rgba(118, 184, 82, 0.5)'],
      borderColor: 'rgba(118, 184, 82, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(118, 184, 82, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(118, 184, 82, 1)',
      pointHoverBorderColor: 'rgba(118, 184, 82, 1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [4, 12, 10, 14, 12],
    },
  ],
}

export const discussions = [
  {
    id: 1,
    title: 'Nested arrays in React',
    author: 'Alexander Janssen',
    date: '21-12-2020',
    photoUrl:
      'https://media.licdn.com/dms/image/C4D03AQFe9oneTfbu6g/profile-displayphoto-shrink_800_800/0/1538600782762?e=1677110400&v=beta&t=UaBGYavGkIlO0AFGHmPBiH3d-j2GM-lx-EtE2DMAO4U',
    content:
      'I am trying to learn PHP but I am having a hard time. Can anyone help me?',
    comments: [
      {
        id: 1,
        author: 'Brad Pitt',
        photoUrl:
          'https://previews.123rf.com/images/subbotina/subbotina1510/subbotina151000118/46445929-schoonheid-jonge-vrouw-portret-ge%C3%AFsoleerd-op-wit.jpg',
      },
    ],
  },
  {
    id: 1,
    title: 'How to learn PHP',
    author: 'Alexander Janssen',
    date: '12-12-2020',
    photoUrl: 'https://picsum.photos/200/300',
    content:
      'I am trying to learn PHP but I am having a hard time. Can anyone help me?',
    comments: [
      {
        id: 1,
        author: 'Brad Pitt',
        photoUrl: 'https://picsum.photos/200/300',
      },
      {
        id: 2,
        author: 'Brad Pitt',
        photoUrl: 'https://picsum.photos/200/300',
      },
    ],
  },
  {
    id: 1,
    title: 'How to learn PHP',
    author: 'Alexander Janssen',
    date: '12-12-2020',
    photoUrl: 'https://picsum.photos/200/300',
    content:
      'I am trying to learn PHP but I am having a hard time. Can anyone help me?',
    comments: [
      {
        id: 1,
        author: 'Brad Pitt',
        photoUrl: 'https://picsum.photos/200/300',
      },
      {
        id: 2,
        author: 'Brad Pitt',
        photoUrl: 'https://picsum.photos/200/300',
      },
    ],
  },
]

export const leaderboard = [
  {
    id: 1,
    name: 'Alexander Janssen',
    photoUrl: 'https://picsum.photos/200/300',
    contributions: 1386,
  },
  {
    id: 1,
    name: 'Luc Nijboer',
    photoUrl:
      'https://media.licdn.com/dms/image/C4D03AQEEJU2F6lOOxA/profile-displayphoto-shrink_800_800/0/1650485142228?e=1677715200&v=beta&t=Y5lG5Mn345u3E8c8UGVbmtNeXpeUz0nM5lw-iVgeQQY',
    contributions: 1286,
  },
  {
    id: 1,
    name: 'MKBHD',
    photoUrl: 'https://picsum.photos/200/300',
    contributions: 1199,
  },
  {
    id: 1,
    name: 'Jeff Bezos',
    photoUrl: 'https://picsum.photos/200/300',
    contributions: 1086,
  },
  {
    id: 1,
    name: 'Hans Janss',
    photoUrl: 'https://picsum.photos/200/300',
    contributions: 978,
  },
  {
    id: 1,
    name: 'Johan Janss',
    photoUrl: 'https://picsum.photos/200/300',
    contributions: 960,
  },
  {
    id: 1,
    name: 'Vera Klaassen',
    photoUrl: 'https://picsum.photos/200/300',
    contributions: 850,
  },
  {
    id: 1,
    name: 'Vera Klaassen',
    photoUrl: 'https://picsum.photos/200/300',
    contributions: 849,
  },
]
