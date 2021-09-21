import Mapir from 'mapir-react-component';
import 'mapir-react-component/dist/index.css';
import './App.css';

const apiKey =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVkMjhhOGY5YzRlMzBlZmM3NTFhYjRkYWQ1Y2QyMDczNzllMTViM2ZjOTg3MzljYzIxNTYyYjYwNWRkMzc2YmFlZmIxNWZhY2ZlYjUyNmYwIn0.eyJhdWQiOiI2OTgwIiwianRpIjoiNWQyOGE4ZjljNGUzMGVmYzc1MWFiNGRhZDVjZDIwNzM3OWUxNWIzZmM5ODczOWNjMjE1NjJiNjA1ZGQzNzZiYWVmYjE1ZmFjZmViNTI2ZjAiLCJpYXQiOjE1NzU5NTYyNzUsIm5iZiI6MTU3NTk1NjI3NSwiZXhwIjoxNTc4NDYxODc1LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.Fx_r1Rguxm3Gtp_RDGxSbjhm67w-f_tldO0AHAyr1-L9JkGKgnaVBNWv4_x1qdjk6I6biCXAKpB5jafrUsp8bRS11pz2Tg0G80vaGb891_XF97pT-WGVV3J_H447tiC5JHj7ZSRodOsiVc8EblsX2BmxgewKyHYqs-6YGHYrVro_-xzNRl8EoXzDZtV34HqUWA0IQ5nqhVW39eIWzu6dmySKfSFoLRcOL9-8qC8p2jk9_siki9k3RBt5NVJyl8rOPHASy6yuqABWyeZZV5N8qELqiipP-Ka_zjc0DgrxwSE1AdvxdNDhZO7x7v72X0eM3oWvFMpwGqI5pRzIOpASiw';
const Map = Mapir.setToken({
  transformRequest: (url) => {
    return {
      url: url,
      headers: {
        'x-api-key': apiKey, //Mapir api key
        'Mapir-SDK': 'reactjs',
      },
    };
  },
});

function App() {
  return (
    <div>
      <Mapir Map={Map} apiKey={apiKey} />
    </div>
  );
}

export default App;
