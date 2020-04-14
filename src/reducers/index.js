import {
  IS_LOGINED,
  CHANGE_DISPLAYMODE,
  GAME_TYPE,
  NICKNAME,
  ARTICLES,
  LEADER_BOARD,
  CHANGE_TOKEN,
  CHANGE_CURRENTARTICLE,
  MY_SCORE,
} from '../actions';

const initialState = {
  isLogined: false,
  displayMode: 'Game',
  gametype: '1',
  articles: [],
  article: [],
  nickname: 'guest',
  leaderBoard: {},
  myScore: {
    nickname: 'black tardis',
    games: [
      {
        gameTitle: 'Game 1',
        scores: [33, 48, 52],
      },
      {
        gameTitle: 'Game 2',
        scores: [22, 48, 52, 32],
      },
      {
        gameTitle: 'Game 3',
        scores: [6, 11, 39, 32],
      },
    ],
  },
  token: {
    accessToken: '',
    refreshToken: '',
  },
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGINED: {
      return {
        ...state,
        isLogined: !state.isLogined,
      };
    }

    case CHANGE_DISPLAYMODE: {
      return {
        ...state,
        displayMode: action.displayMode,
      };
    }
    case GAME_TYPE: {
      return {
        ...state,
        gametype: action.gametype,
      };
    }

    case NICKNAME: {
      return {
        ...state,
        nickname: action.nickname,
      };
    }

    case ARTICLES: {
      return {
        ...state,
        articles: action.articles,
      };
    }

    case LEADER_BOARD: {
      return {
        ...state,
        leaderBoard: action.leaderBoard,
      };
    }

    case CHANGE_TOKEN: {
      return {
        ...state,
        token: {
          accessToken: action.token.accessToken,
          refreshToken: action.token.refreshToken,
        },
      };
    }

    case CHANGE_CURRENTARTICLE: {
      return {
        ...state,
        article: action.article,
      };
    }

    case MY_SCORE: {
      return {
        ...state,
        myScore: action.myScore,
      };
    }

    default:
      return state;
  }
};

export default reducers;
