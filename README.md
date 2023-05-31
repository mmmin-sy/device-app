# Prerequisites

- Node.js
- Docker

# How to run

1. DB Start

```
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=my_db -d -p 3306:3306 mysql
```

2. Backend Start

```
cd server 
npm install
npm start
```

3. Frontend Start (In new Terminal)

```
cd client 
npm install
npm start
```

4. Open http://localhost:3000/
