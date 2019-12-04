# MapirReactComponent
[![npm version](https://badge.fury.io/js/mapir-react-component.svg)](https://www.npmjs.com/package/mapir-react-component)

![Map.ir](https://map.ir/css/images/mapir-logo.png) React wrapper for mapbox-gl-js. Expose a bunch of component meant to be simple to use for React.

## Installation

```
npm i mapir-react-component
```

## Quick start 

### Import module
```jsx
import Mapir from "mapir-react-component";
```
### Set API Key
```jsx
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
```
### Generate Component
```jsx
render () {
	return (
		<Mapir Map={Map}/>
	)
}
```
[![Edit mapir-react](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/objective-ganguly-st4od?fontsize=14)

📖 [English Documentation](https://github.com/map-ir/mapir-react-component/wiki/Documentation)

📖 [Persian Documentation](https://support.map.ir/developers/components/reactjs/)
