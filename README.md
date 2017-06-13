OLX Items
---

---
### How
To run OLX Items:

  - fork/clone this repo:
  ```
  > git clone git@github.com:chemikpil/olx-items.git
  > cd olx-items
  ```

  - install dependencies
  ```
  > yarn global add json-server
  > yarn install
  ```

  - run the json server
  ```
  > json-server --watch -p 8080 ads.json
  ```

  - run the app
  ```
  > yarn run start
  ```

  - open `http://localhost:3000/` in your browser

---
### Used technologies

  - `react-create-app` to start react app
  - `react.js`
  - `redux.js`
  - `redux-saga`
  - `reselect`
  - `jest`