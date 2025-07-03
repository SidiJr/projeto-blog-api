npx sequelize-cli init
npm run lint
npm run format


npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

npx sequelize db:seed:undo:all
npx sequelize-cli db:drop
