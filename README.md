# MapirReactComponent
[![npm version](https://badge.fury.io/js/mapir-react-component.svg)](https://badge.fury.io/js/mapir-react-component)

![Map.ir](https://map.ir/css/images/mapir-logo.png) React wrapper for mapbox-gl-js. Expose a bunch of component meant to be simple to use for React.

### Quick start 

```jsx
import Mapir from "mapir-react-component";

...
const Map = Mapir.setToken({
	transformRequest: (url)=> {
		return {
			url: url,
			headers: { 
				'x-api-key': 'Your_API_KEY', //Mapir api key
				'Mapir-SDK': 'reactjs'
			}
		}

	}
});
...

<Mapir Map={Map}/>
```
[![Edit mapir-react](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/objective-ganguly-st4od?fontsize=14)

![Mapir react component English Documentation](https://github.com/map-ir/mapir-react-component/wiki/Documentation)
![Mapir react component Persian Documentation](https://support.map.ir/developers/components/reactjs/)
