export default {
  accessToken: '',
  isLogin: false,
  user: { id: null, email: '', username: '', userDate: '' },
  likeItems: [],

  makgeolli: {
    id: null,
    breweryId: null,
    name: '',
    area: '',
    content: '',
    explain: '',
    material: '',
    likes: '',
    views: '',
    image: '',
    createdAt: null,
    updatedAt: null,
  },

  brewery: {
    name: '',
    address: '',
    number: '',
    kinds: '',
    createdAt: null,
    updatedAt: null,
  },

  review: {
    id: null,
    makgeolli_id: null,
    user_id: null,
    star: '',
    comment: '',
    image: '',
    createdAt: '',
  },

  reviewList: [],
  makgeolliList: [],
  breweryList: [],
  bestList: [],
};
