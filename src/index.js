import './scss/main.scss';

const importAll = (r) => {
  r.keys().forEach(r);
};

importAll(require.context('./components/', true, /\.(s[ac]ss|css|js)$/));

