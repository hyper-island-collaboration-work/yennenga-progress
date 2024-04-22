import * as contentful from "contentful";
// REACT_APP_SPACE_ID='1mn42d90w2s9'
// REACT_APP_ACCESS_TOKEN='jqojvZwwiLq_FmThUnOfO_ET4QzOMGdtbLvGAlmNP7w'

// export const client = contentful.createClient({
//   space: process.env.REACT_APP_SPACE_ID,
//   accessToken: process.env.REACT_APP_ACCESS_TOKEN,
// });

export const client = contentful.createClient({
    space: '1mn42d90w2s9',
    accessToken: 'jqojvZwwiLq_FmThUnOfO_ET4QzOMGdtbLvGAlmNP7w',
  });
