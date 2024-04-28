// __mocks__/external-package.js
const contentFullClientMock = {
  getEntries: jest.fn().mockResolvedValue(({content_type})=>{

    if (content_type === 'NewsPost') {
      return Promise.resolve({/* mocked NewsPost data */});
    } else {
      return Promise.resolve({/* default mocked data */});
    }
  }),

  };

//   export default contentFullClientMock;
// const contentFullClientMock = {
//   getEntries: async ({ content_type }) => {
//     if (content_type === "NewsPost") {
//       return Promise.resolve({
//         /* mocked NewsPost data */
//       });
//     } else {
//       return Promise.resolve({
//         /* default mocked data */
//       });
//     }
//   },
// };
// const contentFullLibMock = {
//   createClient: jest.fn().mockResolvedValue(({ space, accessToken }) => {
//     return contentFullClientMock;
//   }),
// };

// export default contentFullLibMock;
