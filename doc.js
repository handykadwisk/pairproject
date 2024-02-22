/*
npx sequelize-cli model:generate --name Category --attributes name:string
npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string,role:string
npx sequelize-cli model:generate --name Vapehascatagory --attributes name:string,CategoryId:integer,merk:string,desc:string,img:string
npx sequelize-cli model:generate --name Vapestore --attributes VhcId:integer,price:integer,status:string,UserId:integer
npx sequelize-cli model:generate --name Sold --attributes VapestoreId:integer,User:string,email:string,qty:integer



*/