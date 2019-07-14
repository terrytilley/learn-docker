import app from './server';
import models from './models';

const port = process.env.PORT || 8000;

models.sequelize.sync({ force: true }).then(() => {
  app.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });
});
