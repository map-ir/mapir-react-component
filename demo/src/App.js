import Mapir from "mapir-react-component";
import "mapir-react-component/dist/index.css";
import "./App.css";

const API_KEY =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM2ZjVkYzFjNGQ3ZjMxNmFkZDE5Njc3MTliMjNhZDFiOTQ1Nzg2ZmJhOWVkNzBhZDdmNTMwNmFjOWY3OTNjNzI4NjM0YTlmMGQ2N2IwNmY3In0.eyJhdWQiOiIyMDA4NyIsImp0aSI6ImM2ZjVkYzFjNGQ3ZjMxNmFkZDE5Njc3MTliMjNhZDFiOTQ1Nzg2ZmJhOWVkNzBhZDdmNTMwNmFjOWY3OTNjNzI4NjM0YTlmMGQ2N2IwNmY3IiwiaWF0IjoxNjY5MDk2ODczLCJuYmYiOjE2NjkwOTY4NzMsImV4cCI6MTY3MTYwMjQ3Mywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.r5EUqb9v6QDkS44OUQ8jxe19E3sdhZWFyGAPfrLvJ8TKMtxkKVipSdNUqmSTewng6595y3J7nWfCAYInAE4nSYm0oOxjIBu9Cs2vPhrpl3rrALbrVWi5MfmO1u6C176qy5oLM7Y6JY2bBVDJkpfZct_jKpo75C8BzB8jMwp1KAb0rO3evboszfNnoQ5H_VaZFrKIoXCea0YfcCRKtsrTtpGEWGPolk-_ITLNbtgHz8ust-TjeYKDHsS4OypptcJNkm83K5I74OjSMNblpza44ZxW8bSTZviQu7FTSuI2tfz27MQ7ijpLZHio23ps_yepvL_ejvhEEVdzkU4vIU5i2A";
  
const CENTER_COORDS = [51.42047, 35.729054];

const Map = Mapir.setToken({
  transformRequest: (url) => {
    return {
      url: url,
      headers: {
        "x-api-key": API_KEY, //Mapir api key
        "Mapir-SDK": "reactjs",
      },
    };
  },
});

function App() {
  return (
    <div>
      <Mapir Map={Map} apiKey={API_KEY} center={CENTER_COORDS}>
        <Mapir.Marker coordinates={CENTER_COORDS} />
      </Mapir>
    </div>
  );
}

export default App;
