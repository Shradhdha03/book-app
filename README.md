This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and express.

To build React UI for distributing, you can run 

### `cd .\client\`

### `npm install `

### `npm run build`

To setup express backend, you can run 

### `cd .. `

### `npm install `

### `npm start`

Open [http://localhost:80](http://localhost80) to view it in the browser.



Docker image - simple build (362MB)

### `docker build  -t nodewebapp:v1 .`

Docker image - build with multi-stage (171MB)

### `docker build -f .\Dockerfile.multi-stage -t nodewebapp:v2 .`
