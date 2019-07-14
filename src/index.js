import app from './server';
import models from './models';

const port = process.env.PORT || 8000;

/* eslint-disable */
const startServer = async () => {
  let retries = 5;

  while (retries) {
    try {
      await models.sequelize.sync({ force: true });
      app.listen({ port }, () => {
        console.log(`🚀 Server ready at http://localhost:${port}`);
      });
    } catch (err) {
      console.log(err);
      retries -= 1;
      await new Promise(res => setTimeout(res, 5000));
    }
  }
};
/* eslint-disable */

startServer();

// models.sequelize
//   .sync({ force: true })
//   .then(() => {
//     app.listen({ port }, () => {
//       console.log(`🚀 Server ready at http://localhost:${port}`);
//     });
//   })
//   .catch(err => console.log(err));

// app.listen({ port }, () => {
//   console.log(`🚀 Server ready at http://localhost:${port}`);
// });
