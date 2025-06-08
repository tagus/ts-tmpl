import init from '@/server';
import env from '@/config/env';

init()
  .then(srv => {
    srv.listen(env.PORT, () => {
      console.log(`ts-tmpl server started on: ${env.PORT} (${env.NODE_ENV})`);
    });
  })
  .catch(console.error);
