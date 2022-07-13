export type NewsType = {
  title: string
  imgUrl: string
  date: string
  description: string
  likesCount: number
  commentsCount: number
}

function randomDate() {
  const d = new Date(+new Date() - Math.floor(Math.random() * 10000000000))
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
  return `${da}.${mo}.${ye}`
}

export const rowNews: NewsType[] = [
  {
    title: 'Letpro',
    imgUrl:
      'https://images.unsplash.com/photo-1657391292533-06f714e2d286?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    date: randomDate(),
    description:
      'Id id adipisicing esse consectetur nostrud consequat nisi ad. Eu ut nostrud proident amet incididunt. Anim non qui ipsum excepteur ex dolore voluptate veniam in occaecat culpa. Esse labore eiusmod aliqua nisi officia elit. Quis occaecat eu reprehenderit culpa ipsum aliqua non.\r\n',
    likesCount: 528,
    commentsCount: 535,
  },
  {
    title: 'Kiggle',
    imgUrl:
      'https://images.unsplash.com/photo-1657514142877-b2bb475d4835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    date: randomDate(),
    description:
      'Eiusmod minim mollit nostrud enim amet. Excepteur non ullamco incididunt magna dolor aliquip nulla. Duis cupidatat do sit nulla commodo enim in aute proident. Ipsum irure id laboris commodo voluptate. Incididunt Lorem laborum magna ad in.\r\n',
    likesCount: 722,
    commentsCount: 412,
  },
  {
    title: 'Yurture',
    imgUrl:
      'https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    date: randomDate(),
    description:
      'Eiusmod minim dolore cupidatat pariatur sit incididunt eu qui. Consectetur reprehenderit occaecat anim laboris eiusmod id esse tempor ipsum velit est ullamco. Deserunt pariatur ad ea fugiat est amet. Sint adipisicing do veniam enim. Adipisicing qui quis nisi incididunt. Cillum dolor voluptate id proident tempor eu amet dolor quis elit sunt occaecat.\r\n',
    likesCount: 22,
    commentsCount: 330,
  },
  {
    title: 'Zolavo',
    imgUrl:
      'https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    date: randomDate(),
    description:
      'Magna consectetur deserunt proident mollit irure mollit elit mollit exercitation deserunt incididunt officia irure. Esse nulla incididunt nulla est commodo fugiat pariatur. Id Lorem velit tempor laboris. Anim culpa eiusmod commodo adipisicing laborum aliquip laboris velit. Adipisicing aliquip nostrud nulla Lorem nostrud veniam sunt enim. Proident enim Lorem aliqua occaecat et ex cillum. Adipisicing laboris ad nisi esse consequat excepteur amet ut enim laboris.\r\n',
    likesCount: 169,
    commentsCount: 961,
  },
  {
    title: 'Comstar',
    imgUrl:
      'https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    date: randomDate(),
    description:
      'Culpa commodo duis ut minim dolore Lorem adipisicing fugiat nulla voluptate ut sit dolor aliquip. Duis laborum ad fugiat nostrud ea. Anim dolore eiusmod ut nostrud nisi non mollit nisi enim elit ea veniam consectetur.\r\n',
    likesCount: 521,
    commentsCount: 321,
  },
  {
    title: 'Collaire',
    imgUrl:
      'https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    date: randomDate(),
    description:
      'Labore sint amet voluptate elit laborum pariatur veniam dolore in ea proident. Ullamco dolor magna et minim in id. Amet quis labore ex sint. Id qui ipsum Lorem eiusmod ex magna. Dolore ea labore mollit sit aliqua dolor voluptate cillum reprehenderit velit sint pariatur.\r\n',
    likesCount: 24,
    commentsCount: 755,
  },
  {
    title: 'Wazzu',
    imgUrl:
      'https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    date: randomDate(),
    description:
      'Veniam consectetur est id dolore veniam dolore esse. Dolor do aute minim et est velit pariatur ipsum eiusmod proident minim. Officia laboris in ex aute labore laboris ipsum ad magna commodo. Fugiat ut ad non occaecat commodo nulla ex nostrud adipisicing sunt esse consequat. Ut mollit esse laborum velit adipisicing laborum consectetur. Non labore culpa laboris quis dolore deserunt adipisicing aute sint dolor commodo tempor cupidatat. Enim occaecat nisi fugiat Lorem Lorem enim sint dolor ut eiusmod sunt magna.\r\n',
    likesCount: 363,
    commentsCount: 590,
  },
  {
    title: 'Anacho',
    imgUrl:
      'https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    date: randomDate(),
    description:
      'Et sunt ea mollit sunt consequat exercitation commodo. Est sint cillum pariatur et in id in elit duis cupidatat cupidatat consectetur est culpa. Commodo aliquip cupidatat ea nostrud mollit laboris tempor. Consequat ex Lorem aliqua dolor quis. Sint ea ea consequat elit non ex irure incididunt elit.\r\n',
    likesCount: 380,
    commentsCount: 332,
  },
  {
    title: 'Zensor',
    imgUrl:
      'https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    date: randomDate(),
    description:
      'Qui irure et velit minim do exercitation ut id. Occaecat et minim labore adipisicing Lorem ut Lorem non anim. Magna in pariatur dolor et voluptate consectetur tempor esse exercitation sit. Consectetur adipisicing duis adipisicing mollit culpa voluptate dolor sint.\r\n',
    likesCount: 503,
    commentsCount: 950,
  },
  {
    title: 'Quility',
    imgUrl: '',
    date: randomDate(),
    description:
      'Aliqua reprehenderit officia eiusmod mollit. Excepteur minim consectetur nisi labore sint. Duis sit officia minim in commodo laboris labore minim anim. Enim velit mollit aliqua Lorem labore sunt nostrud deserunt laborum. Magna veniam incididunt exercitation nulla incididunt magna incididunt aliquip anim.\r\n',
    likesCount: 732,
    commentsCount: 786,
  },
]
